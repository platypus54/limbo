let dice = new Array(5);
let rolls = 0;

q = [];
//------------------------------------------------------------


class Pair{
  constructor(x, y){
    this.item1 = x;
    this.item2 = y;
  }
}

class Node{

  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;

    this._meta_data = {
      depth: -1 ,
      isChild: false ,
      isRoot: false,
      isParent: false,
      isleaf: false
    }

  }
}

class BinaryTree {

find_max()
{
  return this.#_find_max(this.root);
}


find_min()
{
  return this.#_find_min(this.root);
}

buildEmptyTreeFromList(init_list)
{
    if(this.root === null)
        for (let index = 0; index < init_list.length; index++) 
          this.insert(init_list[index]);
    else
      console.log("tree is not empty")
}

isEmpty(){
  if(this.root === null)
    return true;
  else
    return false;
}

remove(data){
  this.root = this.#_remove(this.root, data)
}

insert(data)
{
  this.root = this.#_insert(this.root,data);
} 

 getListFromTree()
 {
  let hereIsAListToBeMadeFromATree = [];
  this.#_getListFromTree(this.root,hereIsAListToBeMadeFromATree)
  return hereIsAListToBeMadeFromATree;
}

printTree()
{
  this.#_printTree(this.root);
}

roll()
{
  for (let n = 0; n < 10; n++)
    this.insert(Math.floor(Math.random() * (10 - 1) ) + 1);
}

in_order_traversal()
{
  this.#_in_order_traversal(this.root, 0);
}

pre_order_traversal()
{
  this.#_pre_order_traversal(this.root, 0);
}

post_order_traversal()
{
  this.#_post_order_traversal(this.root, 0)
}

get_depth()
{
  this.#_get_depth(this.root,0);
}

get_height()
{
  this.#_get_height(this.root,0);
}

find_leaves()
{
  this.#_find_leaves(this.root);
}

find_parents()
{
  this.#_find_parents(this.root);
}

colorNode(node){
      if(node == this.root)
        document.writeln(`<p style="color:blue"> ${node.data}</p>`); // is root
      else if(node.left == null && node.right == null)
        document.writeln(`<p style="color:green"> ${node.data}</p>`); // is leaf
      else if(node.left != null || node.right != null)
        document.writeln(`<p style="color:orange"> ${node.data}</p>`); // is parent
}

colorNode2(node, depth){
  if(node == this.root)
    document.writeln(`(${depth},${node.data})`); // is root
  else if(node.left == null && node.right == null)
    document.writeln(`(${depth},${node.data})`); // is leaf
  else if(node.left != null || node.right != null)
    document.writeln(`(${depth},${node.data})`); // is parent
}

/***********************************/

  constructor()
  {
    this.root = null;
  }

  #_find_max(node){
    
    if(node === null)
      return null;
    else if(node.right === null)
     return node;
    else
      return this.#_find_max(node.right)
    
    }

  #_find_min(node)
  {
    if(node === null)
      return null;
    else if(node.left === null)
     return node;
    else
      return this.#_find_min(node.left)
    
  }


  #_remove(node, data){
    if(node === null)
      return null;
    
    if(data < node.data)
    {
      node.left = this.#_remove(node.left, data);
    }
    else if(data > node.data)
    {
      node.right = this.#_remove(node.right,data);
    }
    else if(node.left !== null && node.right !== null)
    {
      let min_node = this.#_find_min(node.right);
      node.data = min_node.data;
      node.right = this.#_remove(node.right, node.data,);
    }
    else
    {
       if(node.left !== null)
          node = node.left;
        else 
          node = node.right; 
    }
    return node; 
  }
 

  #_insert(node, value) {
    if(node === null)
       return new Node(value);
    else if(value < node.data)
      node.left = this.#_insert(node.left, value);
    else if (value > node.data)
      node.right = this.#_insert(node.right,value);

    return node;
  }


  #_printTree(node){
    if(node !== null){
      this.#_printTree(node.left)
      this.#_printTree(node.right)
      document.writeln(node.data + "");
    }
  }



  #_getListFromTree(node, list){
    if(node !== null){

      let p = new Pair(node._meta_data.depth, node.data)
      list.push(p);
      this.#_getListFromTree(node.left,list);
      this.#_getListFromTree(node.right,list);
      
    }
  }

  
 
  #_in_order_traversal(node, depth){
    if(node !== null)
    {
      
      this.#_in_order_traversal(node.left, depth + 1);
      this.colorNode2(node, depth);
      this.#_in_order_traversal(node.right, depth + 1);

    }
  }

  

  // {root, left tree, right tree}
  #_pre_order_traversal(node, depth){
    if(node !== null)
      {
        this.colorNode2(node,depth);
        this.#_pre_order_traversal(node.left, depth + 1);
        this.#_pre_order_traversal(node.right, depth + 1);
      }
  }

  // {root, right tree, left tree}
 

  #_post_order_traversal(node, depth){
    if(node !== null)
      {     
        this.#_post_order_traversal(node.left, depth + 1);
        this.#_post_order_traversal(node.right, depth + 1);
        this.colorNode2(node, depth);
      }
  }

  
  #_get_depth(node,depth){
    
      if(node !== null)
      {
          node._meta_data.depth = depth;
          this.colorNode2(node,depth);
          this.#_get_depth(node.left,depth + 1);
          this.#_get_depth(node.right,depth + 1);
      }
  }

  

  #_get_height(){}


  #_find_leaves(node){
      if( node !== null)
      {
        if(node.left == null && node.right == null)
          node._meta_data.isleaf = true;
          this.#_find_leaves(node.left);
          this.#_find_leaves(node.right);
      } 
  }


  

  #_find_parents(node){
    if( node !== null)
      {
          if(node.left != null || node.right != null)
            node._meta_data.isParent = true;
          this.#_find_parents(node.left);
          this.#_find_parents(node.right);
      } 
  }

  
}

function getCombinationsWithRepetition(arr, length, start = 0, current = [], result = []) {
  if (current.length === length) { 
      result.push([...current]);
      return;
  }

  for (let i = start; i < arr.length; i++) {
      current.push(arr[i]);
      getCombinationsWithRepetition(arr, length, i, current, result); // Allow repeated values
      current.pop();
  }

  return result;
}
