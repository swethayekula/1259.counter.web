let update1=document.getElementById("update")
function onincrement()
{
   let a=update1.textContent;
   let cv=parseInt(a)+1;
   if(cv>0)
   {
    update1.style.color="green"
   }
   else if(cv<0)
   {
   update1.style.color="red"
   }
   else
   {
    update1.style.color="black"
   }
   update1.textContent=cv;
}
 function reseton(){
    
    let cv=0;
    update1.textContent=cv;
    update1.style.color="black"
    
}
function ondecrement() {
   let a=update1.textContent;
   let cv=parseInt(a)-1;
   if(cv>0)
   {
    update1.style.color="green"
   }
   else if(cv<0)
   {
   update1.style.color="red"
   }
   else
   {
    update1.style.color="black"
   }
   update1.textContent=cv;
}