class Node {
    constructor(key, val) {
        this.key = key;
        this.value = val;
    }
}

class BSTreeNode
{

    constructor(leftChild, rightChild, node)
    {
        this.leftChild = leftChild;
        this.rightChild = rightChild;
        this.value = node;
    }
}

class BinarySearchTree
{
    constructor()
    {
        this.rootNode = null;
    }

    addElement(dictNode)
    {
        if(this.rootNode == null)
        {
            this.rootNode = new BSTreeNode(null, null, dictNode);
            return;
        }
        
        this.addElementInternal(dictNode, this.rootNode);
    }

    getElement(key)
    {
        return this.getElementInternal(key, this.rootNode);
    }

    addElementInternal(DictNode, node)
    {
        if(node == null) {
            return new BSTreeNode(null, null, DictNode);
        }

        if(node.value.key > DictNode.key) {
            // GO LEFT
            node.leftChild = this.addElementInternal(DictNode, node.leftChild);
        } else {
            // GO RIGHT
            node.rightChild = this.addElementInternal(DictNode, node.rightChild);
        }

        return node;
    }

    getElementInternal(key, node)
    {
        if(node == null)
        {
            return null;
        }
        if(node.value.key == key)
        {
            return node;
        }
        else
        {
            if(node.value.key < key)
            {
                return this.getElementInternal(key, node.rightChild);
            }
            else
            {
                return this.getElementInternal(key, node.leftChild);
            }
        }
    }

    lowest(node)
    {
        if(!node)
        {
            return null;
        }
        if(node.leftChild == null)
        {
            return node.value.key;
        }

        return this.lowest(node.leftChild);
    }

    largest(node)
    {
        if(!node)
        {
            return null;
        }
        if(node.rightChild == null)
        {
            return node.value.key;
        }

        return this.largest(node.rightChild);
    }

    
}

class Dictionary {
    constructor() {
        this.store = new BinarySearchTree();
    }

    set(key, val)
    {
        const node = this.getNode(key);
        if(node) {
            node.value = val;
        } else {
            const newNode = new Node(key, val);
            this.store.addElement(newNode);
        }
    }

    get(key)
    {
        const node = this.getNode(key);
        if(node) {
            return node.value;
        } else {
            return null;
        }
    }

    getNode(key) 
    {
        return this.store.getElement(key);
    }

    getSmallestKey()
    {
        return this.store.lowest(this.store.rootNode);
    }

    getLargestKey()
    {
        return this.store.largest(this.store.rootNode);
    }
}

const main = () => {
    const dict = new Dictionary();
    
    console.time("dbsave");
 
    for(let i = 0; i < 10000; i++) {
        const rand = Math.floor(Math.random() * 10000)
        dict.set(i, 'whatever' + i);
    }
    dict.set(7000, 'sangeeth');
    console.timeEnd("dbsave");

    console.time("getOperation");
    console.log(dict.getLargestKey());
    console.timeEnd("getOperation");
}

main();