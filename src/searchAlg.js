function search(searchVal, array){
    let start = 0;
    let mid
    let end = array.length-1;
    let index = null;
    while (start <= end) {
        mid = Math.floor((start+end) / 2)
        if (array[mid] === searchVal) {
            index = mid;
            return index;
        } else if (searchVal > array[mid]) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
    return index; 
}