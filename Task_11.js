/*
* Задание №11. Функции
Напишите функцию pow(x, n), которая возвращает x в степени n. Иначе говоря,
умножает x на себя n раз и возвращает результат.
*/

console.log(pow(Number(2),Number(3)));

function pow(x, n){
    var result = 1;
    for(var i = 0; i < n; i++){
        result *=x;
    }
    return result;
}