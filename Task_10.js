/*
* Задание №10. Циклы
Даны целые числа a и b (a &lt; b). Выведите все целые числа от a до b
включительно; при этом число a должно выводиться 1 раз, число a + 1 должно
выводиться 2 раза и т.д.
* */

var a = 2;
var b = 5;
var k = 1;
for(var i = a; i <= b; i++){
    for(var j = 0; j < k; j++){
        console.log(i + " ");
    }
    k++;
}