/*
* Задание №2. Условные конструкции
Дано целое число. Определите и выведите его строку-описание вида:
– &quot;нулевое число&quot;;
– &quot;положительное четное число&quot;;
– &quot;положительное нечетное число&quot;;
– &quot;отрицательное четное число&quot;;
– &quot;отрицательное нечетное число&quot;.
*/
var tmp = 0;
var nullNum = "нулевое число";
var evnNum = " четное число";
var unevenNum = " нечетное число"
var positiveNum = "положительное";
var negotiveNum = "отрицательное";

console.log(fff(tmp));

function fff(number){
    var res;

    if(tmp != 0){
        if(number > 0 && number / 2 === 0){
            res = positiveNum + evnNum;
        }else if(number < 0 && number / 2 === 0){
            res = negotiveNum + evnNum;
        }else if(number > 0 && number / 2 !== 0){
            res = positiveNum + unevenNum;
        }else{
            res = negotiveNum + unevenNum;
        }
    }else{
        res = nullNum;
    }
    return res;
}