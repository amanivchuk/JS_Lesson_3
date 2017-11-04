/*
* Задание №7. Циклы (for)
Даны два целых числа a и b (a &lt; b). Найдите сумму всех целых чисел от a до b
включительно.
*/

var a = 2;
var b = 5;
var result = 0;

for(var i = a; i <= b; i++){
    result += a;
}
console.log("Result = " + result);