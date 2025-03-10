// create a object CHARACTER_CNT
// [SORTED_STRING] = sort strign
// iterate through SORTED_STRING
    // one to the count if it exists
    // else add it and add one to the count
// Iterate trough SORTED_OBJECT
    // if CHAR_A[COUNT] == CHAR_B[COUNT], sort alphabetically
    // return [RESULT_DATA]

function charCount(str) {
    let sortedString = str.replace(/ /g, '').split('').sort();
    let characterCount = countingCharacters(sortedString);
    let arr = sortingObject(characterCount);

    return sortingArr(arr)
};

function countingCharacters(arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in obj) {
            obj[arr[i]]++;
        } else {
            obj[arr[i]] = 1;
        }
    }
    return obj;
};

function sortingObject(obj) {
    let data = [];
    for (const [key, value] of Object.entries(obj)) {
        data.push([key, value])
    };
    return data
};

function sortingArr(arr) {
    return arr.sort(function(a,b) {return b[1]-a[1]})
}

module.exports = {charCount};