import json
from collections import defaultdict

FILE = "tree.json"

RANK_ORDER = [
    "ROOT",
    "KINGDOM",
    "PHYLUM",
    "CLASS",
    "ORDER",
    "FAMILY",
    "GENUS",
    "SPECIES"
]

# =====================
# HELPERS
# =====================
def rank_index(rank):
    try:
        return RANK_ORDER.index(rank)
    except:
        return -1


# =====================
# LOAD
# =====================
with open(FILE, "r", encoding="utf-8") as f:
    tree = json.load(f)


# =====================
# VALIDATION
# =====================
seen_keys = {}
duplicates = []
invalid_hierarchy = []
missing_data = []
same_name_same_level = []


def traverse(node, parent=None, level=0):
    key = node.get("key")
    name = node.get("name")
    rank = node.get("rank")

    # ---------------------
    # Missing data
    # ---------------------
    if key is None or rank is None:
        missing_data.append((name, key, rank))

    # ---------------------
    # Duplicate keys
    # ---------------------
    if key in seen_keys:
        duplicates.append((name, key))
    else:
        seen_keys[key] = node

    # ---------------------
    # Hierarchy validation
    # ---------------------
    if parent:
        parent_rank = parent.get("rank")

        p = rank_index(parent_rank)
        c = rank_index(rank)

        if p != -1 and c != -1:
            if c != p + 1:
                invalid_hierarchy.append({
                    "parent": (parent.get("name"), parent_rank),
                    "child": (name, rank)
                })

    # ---------------------
    # Same name in same level
    # ---------------------
    if "children" in node:
        names = defaultdict(list)

        for child in node["children"]:
            names[child["name"]].append(child)

        for n, items in names.items():
            if len(items) > 1:
                same_name_same_level.append(n)

        for child in node["children"]:
            traverse(child, node, level + 1)


# =====================
# RUN
# =====================
traverse(tree)


# =====================
# REPORT
# =====================
print("\n===== RELATÓRIO =====")

print("\n🔁 Duplicados por KEY:")
for d in duplicates[:20]:
    print(d)

print(f"Total: {len(duplicates)}")


print("\n🌳 Hierarquia inválida:")
for h in invalid_hierarchy[:20]:
    print(h)

print(f"Total: {len(invalid_hierarchy)}")


print("\n⚠️ Dados faltando:")
for m in missing_data[:20]:
    print(m)

print(f"Total: {len(missing_data)}")


print("\n🧬 Mesmo nome no mesmo nível:")
for n in set(same_name_same_level):
    print(n)

print(f"Total: {len(set(same_name_same_level))}")