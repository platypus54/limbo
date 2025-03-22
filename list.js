let dice = new Array(5);
let rolls = 0;

q = [];

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

class Node{

  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
    this.depth;
    this.isChild = false;
    this.isRoot = false;
    this.isParent = false;
    this.isleaf = false;
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
    else if(value < node.data)
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
 
  // 
  _in_order_traversal(node){
    if(node !== null)
    {
      
      this._in_order_traversal(node.left);

      if(node == this.root)
        document.writeln(`<h1 style="color:blue"> ${node.data}</h1>`);
      else
        document.writeln(`<p> ${node.data}<p>`);

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
        if(node == this.root)
          document.writeln(`<p style="color:blue"> ${node.data}</p>`);
        else
          document.writeln(`<p> ${node.data}<p>`);
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
        
        this._pre_order_traversal(node.left);
        
        this._pre_order_traversal(node.right);
        
        if(node == this.root)
          document.writeln(`<p style="color:blue"> ${node.data}</p>`);
        else
          document.writeln(`<p> ${node.data}<p>`);     
      }
  }

  get_depth(){
    this._get_depth(this.root,0);
  }
  
  _get_depth(node,depth){
    
      if(node !== null)
      {
        node.depth = depth;

        this._get_depth(node.left,depth + 1);
        this._get_depth(node.right,depth + 1);

        if(node == this.root)
          document.writeln(`<p style="color:blue"> ${node.depth}</p>`);
        else
          document.writeln(`<p> ${node.depth}<p>`);
        
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
           node.isleaf = true;
        else
        {   
            this._find_leaves(node.left);
            this._find_leaves(node.right);
        }
      } 
  }
}




//------------------------------------------------------------
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

  for (let index = 0; index < 4; index++)
  {
    t.roll();
  }

  aList = t.getListFromTree();

  //t.printTree();
  
  document.writeln("<h1> in order traversal </h1>")
  t.in_order_traversal();
  
  document.writeln("<h1>pre order traversal</h1> ")
  t.pre_order_traversal();

  document.writeln("<h1>post order traversal</h1> ")
  t.post_order_traversal();

  document.writeln("<h1>depth</h1> ")
  t.get_depth();
  t.find_leaves();

  emptyTree.insert("NOT_EMPTY");

  emptyTree.find_leaves();
  console.log(t);
  console.log(emptyTree);
}



/****************************************************************************/

//fibonacci(5)
function fibonacci(n, memo = {})
{

  if(n in memo )
    return memo[n];
  
  if(n == 0){
    console.log(`${memo[0]}`)
    return memo[0] = 0;
  }


  if(n == 1){
    console.log(` ${memo[1]}`)
    return memo[1] = 1;
  }


  if(n >= 2);
  {
    console.log(` f(${n}) ` )

    let a = fibonacci(n - 1, memo); 
    console.log(`/ \n f(${a}) `)

    let b = fibonacci(n - 2, memo);
    
    console.log(` f(${b}) `);
    
    memo[n] = a + b;

    return memo[n];
  }
}
