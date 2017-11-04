/*
* Задание №4. Условные конструкции
Дано целое число k. Выведите строку-описание оценки, соответствующей
числу k (1 – &quot;плохо&quot;, 2 – &quot;неудовлетворительно&quot;, 3 – &quot;удовлетворительно&quot;, 4 –
&quot;хорошо&quot;, 5 – &quot;отлично&quot;). Если k не лежит в диапазоне 1–5, то вывести строку
&quot;ошибка&quot;.*/

console.log(fff(3));

function fff(tmp){
    var result;
    switch(tmp){
        case 1 : result = "плохо"; break;
        case 2 : result = "неудовлетворительно"; break;
        case 3 : result = "удовлетворительно"; break;
        case 4 : result = "хорошо"; break;
        case 5 : result = "отлично" ;break;
        default : result = "ошибка";
    }
    return result;
}