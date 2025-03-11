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
    this.root = this.insertNode(this.root,data);
  } 

  insertNode(node, value) {

    if(node === null)
       return new Node(value);
    else if(value <= node.data)
    {
      node.left = this.insertNode(node.left, value);
    }
    else if (value > node.data)
    {
      node.right = this.insertNode(node.right,value);
    }



    return node;

  }
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

  for (let dice = 1; dice < 6; dice++) 
    t.insert( Math.floor(Math.random() * (7 - 1) ) + 1 )

  console.log(t);

}


