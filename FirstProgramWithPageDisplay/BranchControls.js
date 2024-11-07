console.log("Upcoming changes");
var box1 = document.getElementById("result1");
var box2 = document.getElementById("result2");
var i = 0;
while (i<20)
    {
        if(i%2==0)
        {
            box2.innerHTML += "<br>" + i;           
        }
        else
        {
            box1.innerHTML += "<br>" + i;
        }        
        i++;
    }

var boxChess = document.getElementById("resultFOR")

var x,y;
for(y=0;y<=10;y++)
    {
        for(x=0;x<=10;x++)
            {
                boxChess.innerHTML += " " + x*y;
            }
        boxChess.innerHTML += "<br>";
    }
