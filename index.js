'use strict';

/*Задание 1
Создать массив из 10 случайных чисел и написать несколько
функций для работы с ним.
    1. Функция принимает массив и выводит его на экран.*/

const arr1 = [];

for (let i = 0; i < 10; i++) {
    arr1.push(Math.round(Math.random() * 100));
}


/**
 *
 * @param {Array} array
 */
function displayArray(array) {
    for (let i = 0; i <= array.length - 1; i++) {
        console.log(array[i]);
    }
}

displayArray(arr1);

console.log('Task 2');

// 2. Функция принимает массив и выводит только четные элементы.
/**
 *
 * @param {Array} array
 */
function displayEven(array) {
    for (let i = 0; i <= array.length - 1; i++) {
        if (array[i] % 2 === 0) {
            console.log(array[i]);
        }
    }
}

displayEven(arr1);

// 3. Функция принимает массив и возвращает сумму всех элементов массива.
/**
 *
 * @param {Array} array
 * @returns {number}
 */
function sumArray(array) {
    let sum = null;
    for (let i = 0; i <= array.length - 1; i++) {
        sum += array[i];
    }
    return sum;
}

console.log(`Array sum: ${sumArray(arr1)}`);

// 4. Функция принимает массив и возвращает его максимальный элемент.
/**
 *
 * @param {Array} array
 * @returns {number} Maximum element of the array
 */
function findMax(array) {
    let max = null;
    for (let i = 0; i <= array.length - 1; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

console.log(`Array max element: ${findMax(arr1)}`);

// 5. Функция добавления нового элемента в массив по указанному индексу.
/**
 *
 * @param {Array} array Array where the specified Element will be inserted
 * @param element Element which will be inserted into Array
 * @param place Index at which the Element will be inserted into Array
 */
function addElement(array, element, place) {
    for (let i = array.length; i >= 0; i--) {
        if (i > place) {
            array[i] = array[i - 1];
        }
        if (i === place) {
            array[i] = element;
        }
    }
}

addElement(arr1, 45, 3);
console.log(`Array with added element 45 at index 3: ${arr1}`);

// 6. Функция удаления элемента из массива по указанному индексу.

/**
 *
 * @param {Array} array
 * @param {Number} place Index of the element to be removed from array.
 */
function removeElement(array, place) {
    for (let i = 0; i < array.length - 1; i++) {
        if (i >= place) {
            array[i] = array[i + 1];
        }
    }
    delete array[array.length - 1];
    array.length -= 1;
}

removeElement(arr1, 5);
console.log(`Array with removed element at index 5: ${arr1}`);


/*Задание 2
Создать еще один массив из 5 случайных чисел и написать следующие функции.

    1, Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из двух массивов без повторений.*/

const arr2 = [];

for (let i = 0; i < 5; i++) {
    arr2.push(Math.round(Math.random() * 100));
}

console.log(`Second array : ${arr2}`);

/**
 *
 * @param array1
 * @param array2
 * @returns {[]} Array which comprises all the elements from the array1 and the array2 without repetitions.
 */
function concatArrays(array1, array2) {
    const array = [];
    saveUniqueElementsToArray(array1, array, array);
    saveUniqueElementsToArray(array2, array, array);
    return array;
}

/**
 * Checks for each element in array 1 whether there is a duplicate element in array2. If there is no duplicate in array2, the element from array1 is saved in array3.
 * @param {Array} array1
 * @param {Array} array2
 * @param {Array} array3 Stores the elements from array1 that have no duplicates in array2.
 */
function saveUniqueElementsToArray(array1, array2, array3) {
    for (let i = 0; i < array1.length; i++) {
        let flag = true;
        for (let j = 0; j < array2.length; j++) {
            if ( array1[i] === array2[j] ) {
                flag = false;
                break;
            }
        }
        if (flag) {
            array3.push(array1[i]);
        }
    }
}

console.log(`Concatenated arr1 and arr2: ${concatArrays(arr1, arr2)}`);

/*  2. Функция принимает 2 массива и возвращает новый массив, в котором собраны общие элементы (то есть элементы, которые встречаются и в первом и во втором массивах) без повторений.*/

/**
 *
 * @param {Array} array1
 * @param {Array} array2
 * @returns {[]} Array that comprises mutual elements od array1 and array2 without repetitions.
 */
function findMutualElements(array1, array2) {
    const array = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                let flag = true;
                for (let k = 0; k < array.length; k++) {
                    if (array1[i] === array[k]) {
                        flag = false;
                        break;
                    }
                }
                if (flag) {
                    array.push(array1[i]);
                }
            }

        }
    }
    return array;
}

const arr4 = [2, 3, 3, 56, 77, 8, 55];
const arr5 = [2, 55, 54, 7, 3, 22, 3, 2, 44, 56];

console.log(`Mutual elements of arrays [2, 3, 3, 56, 77, 8, 55] and [2, 55, 54, 7, 3, 22, 3, 2, 44, 56] : ${findMutualElements(arr4, arr5)}`);
console.log(`Mutual elements of arr1 and arr2: ${findMutualElements(arr1, arr2)}`);

/*3. Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из первого массива, которых нет во втором массиве.*/

/**
 *
 * @param {Array} array1
 * @param {Array} array2
 * @returns {[]} Array that consists of the elements that are comprised in the first array but not included in the second array.
 */
function findUniqueElements(array1, array2) {
    const array = [];
    saveUniqueElementsToArray(array1, array2, array);
    return array;
}

console.log(`All elements comprised in the first array only: ${findUniqueElements(arr1,arr2)}`);