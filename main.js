// tree to hold data for exploration
var t = new BinaryTree();

// tree event variables




// we connect nodes together by searching the tree and finding where the
// data should fall depending on criteria. Here we have two nodes: tree_node 
// and node_to_insert.
function insert(tree_node, node_to_insert)
{
    if(tree_node === null)
        return new Node(node_to_insert.data);
    else if(node_to_insert.data < tree_node.data )
      tree_node.left = insert(tree_node.left, node_to_insert);
    else if(node_to_insert.data > tree_node.data )
      tree_node.right = insert(tree_node.right, node_to_insert);

    return tree_node;
}


