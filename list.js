let dice = new Array(5);
let rolls = 0;

q = [];



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
      return 
  }

  insert(data){
      // create a node to put the data in
      let newNode = new Node(data);
      
      // if the root is empty, store this as the root
      if(!this.root){

        this.root = newNode;
      }
      else{
        // we pass in our root and the node we are to add
        // 
        this._insertNode(this.root,newNode);
      }
  }

  _insertNode(node, newNode) {

    // this is a big part...
    // we end up finding the spot to place our node by comparing the data
    // for this insert, the data is compared by a less than operator.
    if(newNode.data < node.data)
    {
        // 
      if(!node.left)
      {
        node.left = newNode;
      }
      else
      {
        this._insertNode(node.left, newNode)
      }
    }
    else {
        if(!node.right)
        {
            node.right = newNode;
        }
        else 
        {
          this._insertNode(node.right, newNode);
        }
    }
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

  t.insert(1);
  t.insert(2);
  t.insert(3);
  t.insert(9);
  t.insert(0);


  console.log(t);

}


