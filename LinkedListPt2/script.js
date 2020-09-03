// sinlge linked list reversed
//implement a reverse method on a sll class that reverses the order of the list

class LinkedListNode{
  constructor(val){
    this.value = val;
  }
}
class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.count = 0;
  }
  addToBack(val){
    let node = new LinkedListNode(val);
    if(this.head == null){
      this.head = node;
      this.count++;
    }
    else{
      let runner = this.head;
      while(runner.next){
        runner = runner.next;
      }
      runner.next = node;
      this.count ++;
    }
  }
}

reverseList(){
  if(this.head = null){
    console.log("There is no list");
    return;
  }
  let runner = this.head;
  prvious = null,
  temp = null;
  while(runner != null){
    temp = runner.next;
    runner.next = previous;
    previous = runner;
    runner = temp;
  }
  this.head = previous;
};

var list = new SinglyLinkedList();
list.addToBack(3);
list.addToBack(8);
list.addToBack(5);
list.addToBack(7);
list.reverseList();