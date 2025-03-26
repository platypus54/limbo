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
      isleaf: false,
    }
  }

}

class BinaryTree {

  constructor(){
      this.root = null;
  }

  
  isEmpty(){
    if(this.root == null)
      return true;
    else
      return false;
  }

  insert(data){
     this.root = this._insert(this.root,data);
  } 

  _insert(node, value) {

    if(node === null)
       return new Node(value);
    else if(value <= node.data)
    {
      node.left = this._insert(node.left, value);
    }
    else if (value > node.data)
    {
      node.right = this._insert(node.right,value);
    }
    return node;
  }

  printTree(){
    this._printTree(this.root);
  }

  _printTree(node){
    if(node !== null){
      this._printTree(node.left)
      this._printTree(node.right)
      document.writeln(node.data + "");
    }
  }

  getListFromTree(){
    let hereIsAListToBeMadeFromATree = [];
    this._getListFromTree(this.root,hereIsAListToBeMadeFromATree)
    return hereIsAListToBeMadeFromATree;
  }

  _getListFromTree(node, list){
    if(node !== null){
      this._getListFromTree(node.left,list);
      this._getListFromTree(node.right,list);
      list.push(node.data);
    }
  }

  roll(){
    for (let n = 0; n < 5; n++)
      this.insert(Math.floor(Math.random() * (7 - 1) ) + 1);
  }

  in_order_traversal()
  {
    this._in_order_traversal(this.root);
  }
 
  _in_order_traversal(node){
    if(node !== null)
    {
      
      this._in_order_traversal(node.left);

        this.colorNode(node);

      this._in_order_traversal(node.right);

    }
  }

  pre_order_traversal()
  {
    this._pre_order_traversal(this.root);
  }

  // {root, left tree, right tree}
  _pre_order_traversal(node){
    if(node !== null)
      {
        this.colorNode(node);
          
        this._pre_order_traversal(node.left);
        this._pre_order_traversal(node.right);
      }
  }

  // {root, right tree, left tree}
  post_order_traversal(){
    this._post_order_traversal(this.root)
  }

  _post_order_traversal(node){
    if(node !== null)
      {     
        this._post_order_traversal(node.left);
        this._post_order_traversal(node.right);
        
        this.colorNode(node);
      }
  }

  get_depth(){
    this._get_depth(this.root,0);
  }
  
  _get_depth(node,depth){
    
      if(node !== null)
      {
        node._meta_data.depth = depth;
        if(node == this.root)
          document.writeln(`<p style="color:blue"> ${node._meta_data.depth}</p>`);
        else
          document.writeln(`<p> ${node._meta_data.depth}<p>`);

        this._get_depth(node.left,depth + 1);
        this._get_depth(node.right,depth + 1);
        
      }
  }

  get_height(){
    this._get_height(this.root,0);
  }
  _get_height(){}



  find_leaves(){
    this._find_leaves(this.root);
  }

  _find_leaves(node){
      if( node !== null)
      {
        if(node.left == null && node.right == null)
           node._meta_data.isleaf = true;
        else
        {   
            this._find_leaves(node.left);
            this._find_leaves(node.right);
        }
      } 
  }

  find_parents(){
    this._find_parents(this.root);
  }

  _find_parents(node){
    if( node !== null)
      {
          if(node.left != null || node.right != null)
            node._meta_data.isParent = true;

          this._find_parents(node.left);
          this._find_parents(node.right);
        
      } 
  }

  colorNode(node){
        if(node == this.root)
          document.writeln(`<p style="color:blue"> ${node.data}</p>`);
        else if(node.left == null && node.right == null)
          document.writeln(`<p style="color:green"> ${node.data}</p>`);
        else if(node.left != null || node.right != null)
          document.writeln(`<p style="color:orange"> ${node.data}</p>`); 
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
