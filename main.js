// tree to hold data for exploration
var t = new BinarySearchTree();

// tree event variables
var insertEventButton = document.getElementById("insert");
var removeEventButton = document.getElementById("remove");



insertEventButton.addEventListener("click",insert)
function getInsertButtonValue(){return document.getElementById("insert_input").value;}
function insert(){
  t.insert(getInsertButtonValue())

  displayTraversals(t.root);

  console.log(t.length())
  console.log(t);
}

removeEventButton.addEventListener("click",remove)
function getRemoveButtonValue(){return document.getElementById("remove_input").value;}
function remove(){
  t.remove(getRemoveButtonValue())
  console.log(t);
}






function displayTraversals(root){
  let inOrderTraversalElement = document.getElementById("in-order");
  let preOrderTraversalElement = document.getElementById("pre-order");
  let postOrderTraversalElement = document.getElementById("post-order");
  let traversals = [ "","","" ]
  inOrder(root,traversals[0])
  console.log(traversals[0])
}

function inOrder(root,tree_string){
  
  if(root !== null)
  {
    inOrder(root.left,tree_string);
    inOrder(root.right,tree_string);
    if(tree_string.length == 0)
      tree_string = root.node.data;
    else
      tree_string += "," + root.node.data;
    console.log(tree_string)
  }

}

function inOrder(root, insert_node, string){


}




