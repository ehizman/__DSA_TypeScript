(function () {
    var array = [1, 8, 9, 4, 32, 6, -1, 6];
    quickSort(array, 0, array.length - 1);
    console.log(array);
    function quickSort(array, low, high) {
        if (low < high) {
            var pivotIndex = partitionTheArray(array, low, high);
            quickSort(array, low, pivotIndex - 1);
            quickSort(array, pivotIndex + 1, high);
        }
    }
    function partitionTheArray(array, low, high) {
        var i = low - 1;
        var pivot = array[high];
        for (var j = low; j <= high - 1; j++) {
            if (array[j] < pivot) {
                i = i + 1;
                swap(array, i, j);
            }
        }
        swap(array, i + 1, high);
        return i + 1;
    }
    function swap(array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
})();
