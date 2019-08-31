class BinaryHeap {
    constructor() {
        this.store = []
    }


    addNode(key) {
        this.store.push(key);
        if (this.store.length == 1) {
            return;
        }

        var indexOfKey = this.store.length - 1;

        while (indexOfKey > 0) {
            var parentIndex = this.getParentIndex(indexOfKey);
            if (this.store[parentIndex] < this.store[indexOfKey]) {
                this.swap(parentIndex, indexOfKey);
            }
            else
            {
                break;
            }
            indexOfKey = parentIndex;
        }

    }

    removeRootNode() {
        // remove root node
        var lastElement = this.store.pop();
        var rootElement = this.store[0];

        var currentIndex = 0;

        this.store[0] = lastElement;
        var currentLength = this.store.length;
        while (currentIndex < currentLength) {
            var leftChildIndex = this.getLeftChildIndex(currentIndex);
            var rightChildIndex = this.getRightChildIndex(currentIndex);

            // check if children ar elses than parent
            var maxIndex = (this.store[leftChildIndex] > this.store[rightChildIndex]) ? leftChildIndex : rightChildIndex;
            if (this.store[currentIndex] < this.store[maxIndex]) {
                this.swap(currentIndex, maxIndex);
                currentIndex = maxIndex;
            }
            else {
                break;
            }
        }

        return rootElement;
    }

    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    swap(index1, index2) {
        var temp = this.store[index1];
        this.store[index1] = this.store[index2];
        this.store[index2] = temp;
    }

    getParentIndex(indexOfChild) {
        return Math.floor((indexOfChild - 1) / 2);
    }
}

class PriorityQueue
{
    
}

const main = () => {
    const bh = new BinaryHeap();
    bh.addNode(5)
    bh.addNode(25)
    bh.addNode(7)
    bh.addNode(2)
    bh.addNode(3)

    console.log('Store before', bh.store);
    bh.removeRootNode()
    console.log('Store after', bh.store);

    bh.removeRootNode()
    console.log('Store after', bh.store);

    bh.removeRootNode()
    console.log('Store after', bh.store);
}

main();