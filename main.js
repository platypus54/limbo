main();

function main () {

  let t = new BinaryTree();
  let emptyTree = new BinaryTree();

  console.log(emptyTree.isEmpty());

  /* const combinationsWithRepetition = getCombinationsWithRepetition([1,2,3,4,5,6], 5);
      combinationsWithRepetition.forEach(element => {
        let sum = 0;
        element.forEach(item => {
          sum += item;
        })
        t.insert(sum);
  }); */

  for (let index = 0; index < 1; index++)
  {
    t.roll();
  }

  node1 = new Node();
  node1.data = 100;
  insertIntoTree(node1,t.root)

  
  document.writeln("<h1> in order traversal </h1>")
  t.in_order_traversal();
  
  document.writeln("<h1>pre order traversal</h1> ")
  t.pre_order_traversal();

  document.writeln("<h1>post order traversal</h1> ")
  t.post_order_traversal();

  document.writeln("<h1>depth</h1> ")
  t.get_depth();

  t.find_leaves();
  t.find_parents();

  emptyTree.insert("NOT_EMPTY");

  emptyTree.find_leaves();
  emptyTree.find_parents();

  aList = t.getListFromTree();

  console.log(aList)
  console.log(t);
  console.log(emptyTree);

}

function insertIntoTree(node_to_insert,tree_node)
{
    if(tree_node === null)
      return node_to_insert;
    else if(tree_node.data  <= node_to_insert.data)
      tree_node.left = insertIntoTree(node_to_insert, tree_node.left) ;
    else if(tree_node.data  >= node_to_insert.data)
      tree_node.right = insertIntoTree(node_to_insert, tree_node.right);
    return node_to_insert;
  
}

function checkTypeLess(node_to_insert, tree_node)
{
    if( typeof(node_to_insert.data) == "String" && typeof(tree_node.data) == "String" ) {
      return (node_to_insert.data).length < (tree_node.data).length 
    }
    else
      return tree_node.data  < node_to_insert.data;
}

function checkTypeGreater(node_to_insert, tree_node)
{
  if( typeof(node_to_insert.data) == "String" && typeof(tree_node.data) == "String" ) {
    return (node_to_insert.data).length > (tree_node.data).length 
  }
  else
    return tree_node.data  > node_to_insert.data;
}