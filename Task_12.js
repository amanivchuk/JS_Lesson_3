/*
* Задание №12. Функции
Напишите функцию minMax(x, y), которая возвращает минимальное из x и y.
*/

console.log(minMax(2,3));

function minMax(x,y) {
    return x < y ? x : y;
}