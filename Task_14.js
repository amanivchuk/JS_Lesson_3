/*
* Задание №14. Функции
Напишите функцию calc(a, b, op), которая выполняет над числами a и b одну из
арифметических операций и возвращает ее результат. Вид операции определяется
целым числом op: 1 – вычитание, 2 – умножение, 3 – деление, остальные значения –
сложение.
*/

console.log(calc(3,1,1));

function calc(a, b, sign) {
    var result = 0;
    switch(sign){
        case 1 : result = a - b; break;
        case 2 : result = a * b; break;
        case 3 : result = a / b; break;
        default : result = a + b; break;
    }
    return result;
}