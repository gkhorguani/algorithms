const main = () => {
    const collection = [ 1, 5, 7, 55, 102, 111, 3, 50 ];
    console.log(collection.length);
    mergeSort(collection, 0, collection.length - 1);
    console.log(collection);
    //const result = findElementIndex(sortedCollection, 102, 0, sortedCollection.length - 1);
    //const result2 = findElementIndexNew(sortedCollection, 1);
    //console.log(sortedCollection)
    //console.log('Result', result2)
    // console.log('Result # 2 ', result2)
}


const mergeSort = (collection, left, right) => {
    if(left == right)
    {
        return;
    }
    var middle = Math.floor((left+right)/2);
    mergeSort(collection, left, middle);
    mergeSort(collection, middle + 1, right);
    merge(collection, left, right, middle);


}


const merge = (collection, left, right, middle) => {
    var temp1 = [];
    var temp2 = [];

    for(var i=left; i<=middle; i++)
    {
        temp1.push(collection[i]);
    }

    temp1.push(Number.MAX_SAFE_INTEGER);

    for(var i=middle+1; i<=right; i++)
    {
        temp2.push(collection[i]);
    }


    temp2.push(Number.MAX_SAFE_INTEGER);

    var p = 0;
    var q = 0;

    // collec = [10, 15, 1 ,2]

    // t1 = [15]
    // t2 = [infitinity]

    // collec[left] = [1, 2, 10, 15] 

    // [1, 4, 5, 7]

    for(var i=left; i<=right; i++)
    {
        if(temp1[p] < temp2[q])
        {
            collection[i] = temp1[p];
            p+=1;
        }
        else
        {
            collection[i] = temp2[q];
            q+=1;
        }
    }

}

// const findElementIndex = (collection, elementToFind, left, right) => {
//     if(left > right)
//     {
//         return -1;
//     }

//     var middle = Math.floor((left + right)/2);
//     if(collection[middle] == elementToFind) return console.log(middle) || middle;
//     else if(elementToFind < collection[middle])right = middle;
//     else left = middle;

//     findElementIndex(collection, elementToFind, left, right);
// }

// const findElementIndexNew = (collection, elementToFind) => {
//     var left = 0;
//     var right = collection.length - 1;
    
//     while(left <= right)
//     {
//         var middle = Math.floor((left + right)/2);
//         if(collection[middle] == elementToFind)return middle;
//         else if(elementToFind < collection[middle])right = middle - 1;
//         else left = middle + 1;
//     }
//     return -1;
// }

main();