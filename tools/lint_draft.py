#!/usr/bin/env python3
"""Compact draft linter (founding plan §5): clause-ID integrity, header
force vocabulary, entrenchment-tag/A-2 consistency, implementation-name
scope, digest/body citation presence. Exit 1 on failure."""
import re, sys

BODY = 'compact.md'
DIGEST_MARK = '## Appendix'

def main():
    text = open(BODY).read()
    defined = set(re.findall(r'\*\*([A-Z]{1,3}-\d+) ·', text))
    referenced = set(re.findall(r'\b([A-Z]{1,3}-\d+)\b', text))
    errors = []
    # predecessor lineage citations (e.g. "the predecessor's O-1", "P-8.1")
    # are references to the old law, not dangling Compact clauses.
    lineage = set(re.findall(r"predecessor's ([A-Z]{1,3}-[\d.]+)", text))
    lineage = {i.split('.')[0] for i in lineage} | {i for i in lineage}
    dangling = {r for r in referenced - defined
                if not any(r == l or r.startswith(l + '.') or l.startswith(r) for l in lineage)}
    if dangling:
        errors.append(f"dangling clause references: {sorted(dangling)}")
    # force vocabulary: closed set
    bad_force = [m for m in re.findall(r'\*\*[A-Z]{1,3}-\d+ · \[([^\]]+)\]', text)
                 if not (m.startswith('M') or m.startswith('C') or m.startswith('O'))]
    if bad_force:
        errors.append(f"force tags outside the closed set: {bad_force}")
    # implementation names must not appear in the law itself. The header
    # block and the Status section are meta-commentary; 'autonoetic'
    # appears legitimately as lineage (A-6).
    pre_end = text.find('## Preamble')
    status_start = text.find('## Status')
    app_start = text.find(DIGEST_MARK)
    law = text[pre_end:status_start] if -1 not in (pre_end, status_start) else text
    if app_start != -1:
        law += '\n' + text[app_start:]
    for name in ['cordis', 'rust', 'Rust', 'tokio', 'dsh']:
        if re.search(rf'\b{name}\b', law):
            errors.append(f"implementation name in body: {name}")
    # entrenchment: the set A-2 entrenches must equal the (core)-tagged headers
    core_tagged = set(re.findall(r'\*\*([A-Z]{1,3}-\d+) · \[[^\]]+\] · \(core\)', text))
    a2 = re.search(r'\*\*A-2 ·.*?(?=\n\*\*A-3)', text, re.S)
    if a2 is None:
        errors.append("A-2 clause not found")
    else:
        ids = set(re.findall(r'\b([A-Z]{1,3}-\d+)\b', a2.group(0)))
        entrenched = {i for i in ids if i in defined
                      and not any(i == l or i.startswith(l + '.') or l.startswith(i)
                                  for l in lineage)}
        entrenched.add('A-2')  # entrenches itself: "this clause"
        if core_tagged != entrenched:
            errors.append(f"entrenchment mismatch: A-2 lists {sorted(entrenched)}, "
                          f"headers tag {sorted(core_tagged)}")
    # digest must cite clause IDs
    digest = text.split(DIGEST_MARK)[-1]
    if not re.search(r'\([A-Z]{1,3}-\d+\)', digest):
        errors.append("digest cites no clause IDs")
    # version consistency across documents
    m = re.search(r'\*\*Draft (v[0-9.]+)', text)
    if not m:
        errors.append("body declares no draft version")
    else:
        ver = m.group(1)
        for path in ['README.md','site/index.html','assets/why-compact.svg']:  # FOUNDING.md exempt: historical plan, no version of its own
            if ver not in open(path).read():
                errors.append(f"{path} does not mention the current version {ver}")
    if errors:
        print("LINT FAIL"); [print(" -", e) for e in errors]; sys.exit(1)
    print(f"LINT OK: {len(defined)} clauses, no dangling refs, vocabulary clean, "
          f"entrenchment consistent, digest cites clauses")

if __name__ == '__main__':
    main()
