/*
* Задание №8. Циклы (for)
Дано целое число n (n &gt; 0). Найдите произведение n! = 1 * 2 * … * n.
*/

console.log(factorial(Number(3)));

function factorial(tmp){
    if(tmp < 0)
        return 0;
    if(tmp === 0)
        return 1;

    return tmp * factorial(tmp - 1);

}