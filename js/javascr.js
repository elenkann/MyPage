
/* перевод долларов в рубли
    const koefDoll=75;
    let sumdollar=prompt( "Хотите купить доллары? Сколько?" );
    let sumrub=koefDoll*sumdollar;
    alert ( "Приготовьте " + sumrub + " рублей" );
* /
/* Напишите функцию, которая принимает в качестве аргумента число и отвечает чётное оно или нечётное. Бонус: если передано не число выведите: “Упс, кажется, вы ошиблись”.*/
/* 
let strPrompt=prompt('Введите число');
if (isNaN(strPrompt))
{
    alert (  `Вы ввели не число:  ${strPrompt}.`); 
}
else if (strPrompt.valueOf%2===0)
{
    alert (  `Вы ввели четное число ${strPrompt}.`); /* обратная ковычка у буквы Ё*/
/* }
else
{
    alert ( `Вы ввели нечетное число ${strPrompt}.`);
}
*/
    


/*  Дана строка в виде массива “1 9 3 4 -5”. Напишите функцию, которая выведет строку с двумя числами:
 сначала большее, потом меньшее, то есть: “9 -5”. Используйте приведение типов, 
разбиение на массив, сортировку сравнение и математические функции.*/
/*
let arrPromp=prompt('Введите массив цифр через пробел.')    ///  запросить массив
                    .split(' ')                             /// разбить на массив
                        .map(item =>Number(item))           /// создать массив из элементов типа число
                            .sort((a,b)=>a>b?-1:1);         /// отсартировать массив
console.log(`${arrPromp[0]}  ${arrPromp[arrPromp.length-1]}`);
*/


/* Разбивайте число на знаки и перемножайте их до тех пор, пока число не станет однозначным. 
Посчитайте количество разбиений. Пример: persistense(39) === 3 потому что 3*9 = 27, 2*7 = 14, 1*4=4*/
/*
let strPromp=prompt('Введите число.')  
let strRezult=strPromp;
let nIterCount=0;
while (strRezult.length!=1 && nIterCount<100){
    nIterCount+=1;
    let arr=strRezult.split('',strRezult.length).map(item =>Number(item))  ;
  
    let  nSum=1;
    for (let i = 0; i <= arr.length-1; i = i + 1) {
       nSum*=arr[i];
      }
      strRezult=String(nSum);
}
alert(`За ${nIterCount} перемножением Ваше число ${strPromp} перешло в ${strRezult}`);
*/

/*let strPromp=prompt('Введите число.')  
let nIterCount=0;
while (strPromp.length!=1 && nIterCount<100){
    nIterCount+=1;
    strPromp=(strNumber=>{
                            let arr=strNumber.split('',strNumber.length).map(item =>Number(item))  ;
                            let  nSum=1;
                            for (let i = 0; i <= arr.length-1; i = i + 1) {
                                    nSum*=arr[i];
                                    };
                            return String(nSum) ;       
                            })(strPromp);
    console.log(strPromp);
}
alert(`За ${nIterCount} перемножением Ваше число перешло в ${strPromp}`);
*/
/// Замыкание
function createCounter() {
    var numberOfCalls = 0;
    alert(`Пример замыкания \n Выполнилось тело функции : ${numberOfCalls}`);
    return function() {
       return ++numberOfCalls;
    }
 }
 var fn = createCounter();
 alert(`И дальше просто выполняется return: ${fn()}`); //1
 alert(`И дальше просто выполняется return: ${fn()}`); //2
 alert(`И дальше просто выполняется return: ${fn()}`); //3