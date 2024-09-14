var x = 5==5;
var text1 = 'TEXT1';
var text2 = 'TEXT1';
console.log(x);
console.log(typeof(x));
console.log(5=='5');
console.log(5==='5');
console.log(5===5);
console.log(text1==text2);   //porównanie wartości na poziomie kontentu
console.log(text1===text2);  //porównanie wartości na poziomie kontentu i typu w jakim się znajdują (int, double, string....)
console.log('_____________________________________')
console.log(5>5);
console.log(5>=5);
console.log(5!=5);
console.log(!(5>5));
console.log('_____________________________________')
console.log((true || true) + ' ' + (true || false) + ' ' + (false || true) + ' ' + (false || false));   // OR
console.log((true && true)  + ' ' + (true && false) + ' ' + (false && true) + ' ' + (false && false));   // AND