function clock()
{
    let a = new Date();
    let b,c,t;
    s = a.getSeconds();
    h= a.getHours();
    m= a.getMinutes();
    if(h==0)
    {
        h=12;
        t="AM";
    }
    else if(h>12)
    {
        h-=12;
        t="PM";
    }
    else if(h!=0){
        t = "AM";
        
    }
    
    b = h + ":"+ m+ ":"+ s+" "+t;
    // console.log(b);
    document.getElementById('clock').innerHTML=b;
}
setInterval(clock,1000);

