// 1. Create a function that will find the factorial number of [9] using recursion.


function number(i) {
    if (i == 1) {

        return 1;
    }
    return i * number(--i);
}
console.log(number(9));

// 2. Find the maximum number in a jagged array given below array of numbers?

const ar = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];
const array = ar.flat();
const array2 = array.flat();
const Maximum = Math.max(...array2);

console.log(Maximum)




// 3. Find the counts of duplicates in an array?

const arr = ["1", "5", "9", "14", "5", "22", "48", "25", "22", "20", "9", "13"]

let total = {};

for (let i = 1; i < arr.length; i++) {

    if (total[arr[i]]) {

        total[arr[i]] += 1;

    } else {

        total[arr[i]] = 1;
    }
}

console.log(total);



// 4. How to find unique values from an array in sorted order?

function numberSort(arr) {
    if (arr.length === 0) return arr;
    arr = arr.sort(function (a, b) {
        return a * 1 - b * 1;
    });
    const add = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] !== arr[i]) {
            add.push(arr[i]);
        }
    }
    return add;
}

const minusNumber = numberSort([1, 5, 7, 44, 5, 9, 4, 5, 9, 10, 6, 7, 8]);


const special = (value, index, self) => {
    return self.indexOf(value) === index;
};

const myValues = minusNumber.filter(special);

console.log(myValues);




