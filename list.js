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
  }

}

class BinaryTree {

  constructor(){
      this.root = null;
  }

  lessThan(nodeDataLeft, nodeDataRight){
      return nodeDataLeft < nodeDataRight;
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
      document.writeln(node.data);
      this._in_order_traversal(node.right);
    }
  }

  pre_order_traversal()
  {
    this._pre_order_traversal(this.root);
  }

  _pre_order_traversal(node){
    if(node !== null)
      {
        document.writeln(node.data);
        this._pre_order_traversal(node.left);
        this._pre_order_traversal(node.right);
      }
  }

  post_order_traversal(){
    this._post_order_traversal(this.root)
  }

  _post_order_traversal(node){
    if(node !== null)
      {
        this._pre_order_traversal(node.left);
        this._pre_order_traversal(node.right);
        document.writeln(node.data);
      }
  }


  }


//------------------------------------------------------------
main();
function main () {

  let t = new BinaryTree();

  /* const combinationsWithRepetition = getCombinationsWithRepetition([1,2,3,4,5,6], 5);
      combinationsWithRepetition.forEach(element => {
        let sum = 0;
        element.forEach(item => {
          sum += item;
        })
        t.insert(sum);
  }); */

  for (let index = 0; index < 8; index++)
  {
    t.roll();
  }

  aList = t.getListFromTree();
  //t.printTree();
  
  document.write("<h1> in order traversal </h1>")
  t.in_order_traversal();
  
  document.write("<h1>pre order traversal</h1> ")
  t.pre_order_traversal();

  document.write("<h1>post order traversal</h1> ")
  t.post_order_traversal();

  console.log(t);
}





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
