#!/usr/bin/env python3
"""Compact draft linter (founding plan §5): clause-ID integrity, header
force vocabulary, digest/body citation presence. Exit 1 on failure."""
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
    # runtime names must not appear in the body
    for name in ['autonoetic', 'cordis', 'rust', 'Rust', 'tokio', 'dsh']:
        if name != 'autonoetic' and re.search(rf'\b{name}\b', text.split(DIGEST_MARK)[0].split('Lineage:')[0]):
            errors.append(f"implementation name in body: {name}")
    # digest must cite clause IDs
    digest = text.split(DIGEST_MARK)[-1]
    if not re.search(r'\([A-Z]{1,3}-\d+\)', digest):
        errors.append("digest cites no clause IDs")
    if errors:
        print("LINT FAIL"); [print(" -", e) for e in errors]; sys.exit(1)
    print(f"LINT OK: {len(defined)} clauses, no dangling refs, vocabulary clean, digest cites clauses")

if __name__ == '__main__':
    main()
