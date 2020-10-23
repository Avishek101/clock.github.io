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
    // console.log("sd");
     let total= ((h*60*60)+(m*60)+s)-(30*60);
     h=parseInt((total/3600));
     let sd=total%3600;
      m=parseInt(sd/60);
     s=parseInt(sd%60);

         let m1=m,m2=0; 

    b = h + ":"+ m+ ":"+ s+" "+t;
   
    document.getElementById('clock').innerHTML=b;
}
setInterval(clock,1000);

    //  while(m1!=0)
    //  {
    //       m1=m1%10;
    //      m2++;  
    //  }
     
    //  if(m2==1)
    //  {
    //       m="0"+m;
    //  }