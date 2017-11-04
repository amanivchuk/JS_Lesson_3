/*
* Напишите код, который:
1. Запрашивает по очереди значения при помощи prompt() и сохраняет их в
массиве;
2. Заканчивает ввод, как только посетитель введёт пустую строку, не число или
нажмёт &quot;Отмена&quot;;
3. Выводит сумму всех значений массива.
*/



var tmp;
var i = 0;
var mas = [];
while((tmp = prompt("Enter number",""))){
    if(tmp === "Отмена"){
        var result = 0;
        for(var j = 0; j < mas.length; j++){
            result += Number(mas[j]);
        }
        console.log(result);
        break;
    }
    mas[i++] = tmp;
}