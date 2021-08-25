class BTNode{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null
    }

    add(val){
        // Create a new node and assign the value
        let newNode = new BTNode(val)
        console.log("new node",newNode.val)
        // If the Binary Tree is empty, then add it to the tree
        if (!this.root) {
            // console.log("added new root")
            this.root = newNode
        }
        else {
            //find the position in the tree to insert the new node
            this.insertNewNode(this.root, newNode)
        }
    }

    insertNewNode(node, newNode) {
        // if the value is less than the node, move to the left side
        if (newNode.val < node.val) {
            // if the left is null, insert newNode
            if (!node.left) {
                node.left = newNode
            }
            else {
                // if the left is not null, call insertNewNode again
                this.insertNewNode(node.left, newNode)
            }
        }
        // if the value is greater than the node, move to the right side
        if (newNode.val > node.val) {
            // if the right is null, insert newNode
            if (!node.right) {
                node.right = newNode
            }
            else {
                // if the right is not null, call insertNewNode again
                this.insertNewNode(node.right, newNode)
            }
        }
    }

    size(node = this.root) {
      if (node == null) {
            return 0
      } else {
        return this.size(node.left) + 1 + this.size(node.right)
      }
    }

    height(node = this.root) {
      if (node == null) {
            return 0
      } else {
        let Left = this.height(node.left)
        let Right = this.height(node.right)
        if (Left > Right) {
            return Left + 1
        }
        else {
            return Right + 1
        }
      }
    }

    min(){
        // find minimum value
        return false;
    }

    contains(value, node = this.root){
        // If the value is equal to the node value, return true (found it)
        if (node.val === value) {
            return true;
        }
        // If the value is less than the node value, 
        // and there is a node on the left, call contains again to search again to the left
        if (value < node.val && node.left) {
            return this.contains(value,node.left);
        }
        // If the value is greater than the node value,
        // and there is a node on the right, call contains again to search again to the right
        else if (value > node.val && node.right) {
            return this.contains(value,node.right);
        }
        else {
            return false;
        }
    }
    balance(node = this.root) {
        var LeftHeight = 0;
        var RightHeight = 0;
        if (node == null) {
              return true    
        }
        LeftHeight = this.height(node.left)
        RightHeight = this.height(node.right)
        if (Math.abs(LeftHeight - RightHeight) > 1){
            return false
        }
        var LeftBalance = this.isBalanced(node.left)
        var RightBalance = this.isBalanced(node.right)
        // I am missing something here...
    }
    full(){
        let h = this.height()
        if (this.size() != Math.pow(2, h) - 1) {
            return false;
        }
        else {
            return true;
        }
    }
}

let tree = new BST()
tree.add(50)
console.log("tree 50",tree)
tree.add(10)
console.log("tree 10",tree)
tree.add(61)
console.log("tree 61",tree)
// tree.add(6)
//console.log("tree 6",tree)
// tree.add(150)
// tree.add(144)
// tree.add(134)
//console.log("tree 150",tree)
console.log(tree)
//console.log("size",tree.size())
//console.log("contains:")
//console.log(tree.contains(10))
// console.log("height",tree.height())
console.log(tree.full())
