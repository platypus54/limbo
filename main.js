main();


function main(){

  root_node = new Node(1);
  insert(root_node, new Node(2));
  console.log(root_node);

  node_with_one_child = new Node(3);
  node_with_one_child.right = new Node(5);
  
  insert(root_node, node_with_one_child);

  //console.log("after inserting g into root:");
  console.log("node_with_one\n", node_with_one_child);
  console.log(root_node);

  node_with_one_child.data = 6;

  let parent_with_two_nodes = new Node(7);
  parent_with_two_nodes.left = new Node(5);
  parent_with_two_nodes.right = new Node(9); 

  console.log("hello", node_with_one_child);

  insert(node_with_one_child, parent_with_two_nodes);
  console.log(contains(parent_with_two_nodes,7))
}

function contains(node,c){
  if(node !== null){

      if(node.data = c)
        return true;

      contains(node.left, c);
      contains(node.right,c);
  }

  return false;
}


function insert(node, node_to_add){

  if(node === null)
  {
      if(node_to_add === null)
        return null;
      else
      {
        node = new Node(node_to_add.data)
        node.left = insert(node.left, node_to_add.left)
        node.right = insert(node.right, node_to_add.right);
        return node;
      }
  }
  else
  {
     if(node.data < node_to_add.data)
      {
        node.right =  insert(node.right, node_to_add)
      }
      else if(node.data > node_to_add.data)
      {
         node.left = insert(node.left, node_to_add)
      }
      else
      {

      }

    return node;
  }

}

function insert_more_than_one(node, node_to_add){

  if(node === null){
    return new Node(node_to_add.data);
  }
  else if(node.data < node_to_add.data)
  {
    node.right = insert(node.right, node_to_add)
  }
  else if(node.data > node_to_add.data)
  {
    node.left = insert(node.left, node_to_add)
  }

  return node;

}




