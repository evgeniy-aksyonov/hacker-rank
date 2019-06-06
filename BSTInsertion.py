def insert(root, val):
    if not root or root.val == val:
        return root
    elif val < root.val:
        root.left = root.insert(root.left, val)
    else:
        root.right = root.insert(root.right, val)

    return root
