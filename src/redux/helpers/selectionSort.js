export function selectionSort(A) {
    
    console.log(A)
    var len = A.length;
    for (var i = 0; i < len - 1; i = i + 1) {
        var j_min = i;
        for (var j = i + 1; j < len; j = j + 1) {
            if (A[j] < A[j_min]) {
                j_min = j;
            } 
        }
        if (j_min !== i) {
            swap(A, i, j_min);
        } 
    }
    return A.slice(0,len);
}

function swap(A, x, y) {
    var temp = A[x];
    A[x] = A[y];
    A[y] = temp;
}