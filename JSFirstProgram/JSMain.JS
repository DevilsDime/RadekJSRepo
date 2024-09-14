var x=10;
var y=3;
var dodawanie = x+y;
var odejmowanie = x-y;
var mnozenie = x*y;
var dzielenie = x/y;
var resztaZDzielenia = x%y;
console.log('Wartości liczb x i y to kolejno ' + x + ' i '+ y);
console.log('Dodawanie x i y: ' + dodawanie);
console.log('Odejmowanie y od x: ' + odejmowanie);
console.log('Mnożenie x i y: ' + mnozenie);
console.log('Dzielenie x przez y: ' + dzielenie);
console.log('Reszta z dzielenia x przez y: ' + resztaZDzielenia);
console.log('Przeciażanie zmiennej x')
console.log('Dodawanie x i 2: ' + (x+=2));
console.log('Odejmowanie 2 od x: ' + (x-=2));
console.log('Mnożenie x i 2: ' + (x*=2));
console.log('Dzielenie x przez 2: ' + (x/=2));
console.log('Reszta z dzielenia x przez 2: ' + (x%=2));
for(let i=0; i<10 ;i++)
    {
        x+=1;
        console.log(x);
    }
console.log('Obecna wartość zmiennej X wynosi: ' + x);
console.log('End of script from the file......................................................')
