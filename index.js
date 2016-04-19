//Declare the hashtable
function Node(data) {
  this.data = data;
  this.next = null;
};

function Hash() {
};

Hash.prototype.add = function(value){
  var node = new Node(value);
  var key = (value.charCodeAt(0) + value.charCodeAt(value.length-1)).toString();
  var currentNode = this[key];

  //The key doesn't exsist
  if(!currentNode){
    this[key] = node;
  } else{
    //The key does exsist
    while(currentNode.next){
      currentNode = currentNode.next
    }
    currentNode.next = node;
  }
  return node;
};

Hash.prototype.find = function(value){
  var key = (value.charCodeAt(0) + value.charCodeAt(value.length-1)).toString(),
      nodeToFind = this[key],
      message = {failure: 'Failure: non-existent node in this list.'},
      count = 1;
  if(!nodeToFind){
    return message.failure;
  } while(nodeToFind.data !== value){
    nodeToFind = nodeToFind.next;
    count++;
  }
  return "The key for this valye is " + key + " it was found at the " + count + " position in the linked list at that key."
};

var animals = new Hash();
animals.add("Dog");
// console.log(animals["171"].data);
animals.add("Cat");
// console.log(animals);
animals.add("Dooog");
console.log(animals.find("Dooog"))
