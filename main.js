// tree to hold data for exploration
var t = new BinaryTree();

// tree event variables
var insertEventButton = document.getElementById("insert");
var removeEventButton = document.getElementById("remove");

insertEventButton.addEventListener("click",insert)

function getInsertButtonValue(){
  return document.getElementById("insert_input").value;
}


function insert()
{
  t.insert(getInsertButtonValue())

  console.log(t);
}

function _insert(tree_node,node_to_insert)
{
  if(tree_node === null)
    return new Node(node_to_insert.data);
  else if(node_to_insert.data < tree_node.data )
    tree_node.left = insert(tree_node.left, node_to_insert);
  else if(node_to_insert.data > tree_node.data )
    tree_node.right = insert(tree_node.right, node_to_insert);

return tree_node;
}

function displayTraversals(){
  let inOrderTraversalElement = document.getElementById("in-order");
  let preOrderTraversalElement = document.getElementById("pre-order");
  let postOrderTraversalElement = document.getElementByIde("post-order");
  
  
}


