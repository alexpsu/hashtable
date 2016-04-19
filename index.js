//Creates contructor for node
function Node(data) {
  this.data = data;
  this.next = null;
};

//contructor for hashtable
function Hash() {
};

//Function to add a value to the hashtable, returns the node
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

//function to find value in hashtable, returns key as well as position if in a linked list
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
  if(count > 1){
    return "The key for this value is, " + key + ", it was found at the " + count
    + " position in the linked list associated with that key.";
  } else {
    return "They key is, " + key + ", it is the only value associated with this key";
  }
};

var animals = new Hash();
animals.add("Dog");
// console.log(animals["171"].data);
animals.add("Cat");
// console.log(animals);
animals.add("Dooog");
console.log(animals.find("Dooog"))
