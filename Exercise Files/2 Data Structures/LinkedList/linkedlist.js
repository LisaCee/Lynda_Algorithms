/* eslint-disable class-methods-use-this */
class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
      // Do not modify anything inside of the constructor
    }
    // Wraps the given value in a node object and adds the node to the tail of the list
    // If the list is empty, the new element is considered the tail as well as the head
    // If there is one element in the list before the new element is added, the new element becomes the tail of the list
    addToTail(value) {
      let node = {
        value, 
        next: null
      }
      if (this.head == null) {
        this.head = node;
        this.tail = node;
        this.size++;
      } else {
        let oldTail = this.tail;
        this.tail = node;
        oldTail.next = node;
        this.size++;
      }
    }
    // Removes the current head node from the list, replacing it with the next element in the list
    // Returns the value of the removed node
    removeHead() {
      let oldHead;
      if (this.head == null) {
        return null;
      } else {
        oldHead = this.head;
        this.head = this.head.next;
        this.size--;
      }
      return oldHead.value
    
    }
    // Checks the linked list for the given value
    // Returns true if the the value is found in the list, false otherwise
    contains(value) {
      let item = this.head;
      while (item) {
        if (value == item.value) {
          return true;
        } else {
          item = item.next;
        }
      } return false;
    }
  }
  let list = new LinkedList
  
  list.addToTail(27)
  list.addToTail(42)
  list.addToTail('candy')
  console.log(list)
  list.removeHead()
  console.log(list)
  list.contains(16)