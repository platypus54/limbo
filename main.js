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

  for (let index = 0; index < 8; index++)
  {
    t.roll();
  }

  aList = t.getListFromTree();
  
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

  console.log(t);
  console.log(emptyTree);
}
