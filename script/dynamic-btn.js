document.getElementById('dynamic-btn').addEventListener('click',function(){
    console.log("hello")
    const random=Math.random();
       
    const digit_6=random*16777215;
    
    const converted_int = parseInt( digit_6);
   
    const hexvalue=converted_int.toString(16);
     console.log(hexvalue)
    body_bg=document.querySelector("body");
    body_bg.style.backgroundColor= '#' + hexvalue;
})