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