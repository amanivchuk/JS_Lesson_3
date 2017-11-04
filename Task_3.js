/*Задание №3. Условные конструкции
Даны четыре целых числа, одно из которых отлично от трех других, равных
между собой. Определите порядковый номер числа, отличного от остальных.
*/

var mas = [2,2,2,4];
for(var i = 0; i < mas.length; i++){
    var found = false;
    for(var j = 0; j < mas.length; j++){
        if(i !== j && mas[i] === mas[j]){
            found = true;
        }
    }
    if(!found) {
        console.log("Number is " + mas[i] + " and position = " + i);
    }
}