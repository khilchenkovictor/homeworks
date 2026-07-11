console.log('#5. JavaScript homework example file');

/*
 * #1
 *
 * Створіть функцію counter(), яка має реалізувати лічильник за допомогою замикання:
 * функція може приймати число як аргумент counter(n)
 * якщо число передано у функцію - лічба починається із зазначеного числа
 * якщо ні - то лічба триває
 */

const counter = function() {
    let memoryNum = null;

    return function(n) {
        if (n === undefined) {
            memoryNum = (memoryNum === null) ? 0 : memoryNum + 1;
        } else typeof n === 'number' ? memoryNum = n : memoryNum = memoryNum + 1;
            return memoryNum;
    };
}()

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter(100)); // 100
console.log(counter()); // 101
console.log(counter()); // 102
console.log(counter(500)); // 500
console.log(counter()); // 501
console.log(counter()); // 502
console.log('---------------------------------------------------')
console.log(counter(0)); // 0
console.log(counter()); // 0
console.log(counter()); // 1
console.log('Вот эти последние 2 вывода сделать невозможно, так как с логикой counter`a мы устанавливаем сначала counter(0) соответсвенно у нас будет 0,\nа потом вызываем функцию и у нас по-любому должно быть +1, так как это не является каким-то отдельным случаем и последние 3 числа мы будем получать в таком порядке: \n0 \n1 \n2 \nВместо: \n0 \n0 \n1');

/*
 * #2
 *
 * Створіть функцію counterFactory, яка має реалізувати три методи за допомогою замикання:
 * початкове значення лічильника - 0
 * counterFactory.value() - повертає значення лічильника
 * counterFactory.value(n) - встановлює значення лічильника, повертає нове значення
 * counterFactory.increment() - збільшує значення лічильника на 1
 * counterFactory.decrement() - зменшує значення лічильника на 1
 */

const counterFactory = function () {
    let newMemoryNum = 0;

    return {
        
        value: function(n) {
            typeof n === 'number' ? newMemoryNum = n : newMemoryNum;
            return newMemoryNum;
        },
        
        increment: function() {
            return newMemoryNum = newMemoryNum + 1;
        },

        decrement: function() {
            return newMemoryNum = newMemoryNum - 1;
        }

    };
}()

console.log('---------------------------------------------------');
console.log(counterFactory.value()); // 0
counterFactory.increment();
counterFactory.increment();
counterFactory.increment();
console.log(counterFactory.value()); // 3
counterFactory.decrement();
counterFactory.decrement();
console.log(counterFactory.value()); // 1
console.log(counterFactory.value(100)); // 100
counterFactory.decrement();
console.log(counterFactory.value()); // 99
console.log(counterFactory.value(200)); // 200
counterFactory.increment();
console.log(counterFactory.value()); // 201

/*
 * #3
 *
 * Створіть функцію myPow(a, b, myPrint). Всередині реалізуйте рекурсію для підрахунку результату піднесення числа a до ступеня b.
 * - Функція myPrint(a, b, res) - глобальна функція, що має генерувати з параметрів a, b, res рядок вигляду 'a^b=res' і повертати його.
 * - myPrint() має бути передана в myPow() як параметр і викликана всередині як callback-функція.
 * - функція myPow() як значення, що повертається, приймає результат myPrint().
 * Наприклад:
 * console.log(myPow(3, 4, myPrint)); // 3^4=81
 * console.log(myPow(2, 3, myPrint)); // 2^3=8
 * console.log(myPow(2, 0, myPrint))  // 2^0=1
 * console.log(myPow(2, -2, myPrint)) // 2^-2=0.25
 */

const myPrint = (a, b, res) => {
    return a + "^" + b + "=" + res;
}

const myPow = (a, b, cb) => {
    let res = 1;
    let helpNum = b;

    if (b < 0) {
        helpNum = b * -1
    };

    for (let i = 0; i < helpNum; i++) {
        res = res * a;
    };

    if (b < 0) {
        res = 1 / res;
    };

    return cb(a, b, res);

}

console.log('-----------------------------------------------')
console.log(myPow(3, 4, myPrint)); // 3^4=81
console.log(myPow(2, 3, myPrint)); // 2^3=8
console.log(myPow(2, 0, myPrint)); // 2^0=1
console.log(myPow(2, -2, myPrint)); // 2^-2=0.25


/*
 * #4
 * Створіть функцію myMax(arr), яка як параметр приймає
 * довільний числовий масив і повертає максимальне число з переданого їй масиву.
 * У реалізації функції має бути застосовано метод Math.max() і apply().
 */

const list = [12, 23, 100, 34, 56, 9, 233]
const myMax = (arr) => {
    return Math.max.apply(null, list);

}
console.log('-----------------------------------------------');
console.log(myMax(list)); // 233

/*
 * #5
 *
 * Створіть функцію myMul(a, b), яка буде множити числа а і b, повертаючи результат.
 */

const myMul = (a, b) => {
    return a * b;
}

/*
 * Створіть функції myDouble(n), яка приймає один параметр і подвоює його.
 * Використовувати множення або інші математичні операції всередині функції - заборонено, тільки bind() і myMul().
 * Функція повертає результат обчислення.
 */

const myDouble = myMul.bind(null, 2);

console.log('-----------------------------------------------');
console.log(myDouble(3)); // = myMul(2, 3) = 6
console.log(myDouble(4)); // = myMul(2, 4) = 8
console.log(myDouble(5)); // = myMul(2, 5) = 10

// Аналогічним чином створюємо функцію myTriple(n), яка потроює параметр, що приймає, повертаючи результат.

const myTriple = myMul.bind(null, 3);

console.log('-----------------------------------------------');
console.log(myTriple(3)); // = myMul(3, 3) = 9
console.log(myTriple(4));// = myMul(3, 4) = 12
console.log(myTriple(5)); // = myMul(3, 5) = 15

export { counter, counterFactory, myPow, myMax, myMul, myDouble, myTriple };