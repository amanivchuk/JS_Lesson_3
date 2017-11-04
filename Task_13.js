/*
* Задание №13. Функции
Напишите функцию sign(x) целого типа, возвращающую для вещественного
числа X следующие значения:
– -1, если x &lt; 0;
– 0, если x = 0;
– 1, если x &gt; 0.
*/

console.log(sign(5));

function sign(tmp) {
    if(tmp < 0) return -1;
    else if(tmp > 0) return +1;
    else return 0;
}