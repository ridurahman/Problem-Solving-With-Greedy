class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const makeTree = (values, i = 0) => {
  if (i >= values.length) {
    return null;
  }
  let newNode = new Node(values[i]);
  newNode.left = makeTree(values, 2 * i + 1);
  newNode.right = makeTree(values, 2 * i + 2);
  return newNode;
};

function mergeTree(root1, root2) {
    if (root1 == null) {
      return root2;
    } else if (root2 == null) {
      return root1;
    }
    //console.log(root1.value, root2.value);
    root1.value += root2.value;
  
    root1.left = mergeTree(root1.left, root2.left);
    root1.right = mergeTree(root1.right, root2.right);
    return root1;
  }
let root1 = [1, 3, 2, 5];
let root2 = [2, 1, 3, null, 4, null, 7];

let rootNode1 = makeTree(root1);
let rootNode2 = makeTree(root2);

function bfsTraversal(root) {
  if (root == null) {
    return;
  }
  let queue = [];
  queue.push(root);
  while (queue.length != 0) {
    let tempNode = queue.shift();
    process.stdout.write(tempNode.value + " ");

    if (tempNode.left != null) {
      queue.push(tempNode.left);
    }
    if (tempNode.right != null) {
      queue.push(tempNode.right);
    }
  }
  process.stdout.write("\n");
}

bfsTraversal(rootNode1);
bfsTraversal(rootNode2);
let root3 = mergeTree(rootNode1, rootNode2);
bfsTraversal(root3);

// Time Complexity: mergeTree() has O(n+m) time complexity where n is the length of root1 array and m is the length of root2 array.
// Space Complexity: mergeTree() has O(n+m) space complexity where n is the length of root1 array and m is the length of root2 array.