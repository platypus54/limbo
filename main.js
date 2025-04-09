main();

function main () {

  let t = new BinaryTree();
  let emptyTree = new BinaryTree();

  root_node = new Node(100);
  node1 = new Node(25);
  node2 = new Node(101);

  insert(root_node,node1);
  insert(root_node,node2);
  
  console.log()

  

  for (let index = 0; index < 1; index++)
    t.roll();


  insert(t.root,root_node)


  // display results....
  document.writeln("<h1> in order traversal </h1>")
  t.in_order_traversal();
  
  document.writeln("<h1>pre order traversal</h1> ")
  t.pre_order_traversal();

  document.writeln("<h1>post order traversal</h1> ")
  t.post_order_traversal();

  document.writeln("<h1>depth</h1> ")
  t.get_depth();

  
  
  
  console.log(t);

}

// we connect nodes together by searching the tree and finding where the
// data should fall depending on criteria. Here we have two nodes: tree_node 
// and node_to_insert.
function insert(tree_node, node_to_insert)
{
    if(tree_node === null)
        return new Node(node_to_insert.data);
    else if(tree_node.data < node_to_insert.data )
      tree_node.left = insert(tree_node.left, node_to_insert);
    else if(tree_node.data > node_to_insert.data )
      tree_node.right = insert(tree_node.right, node_to_insert);

    return tree_node;
}



/* if(tree_node.data  < node_to_insert.data)
  tree_node.left = insertIntoTree(tree_node.left, node_to_insert);
else if(tree_node.data  > node_to_insert.data)
  tree_node.right = insertIntoTree(tree_node.right, node_to_insert); */
