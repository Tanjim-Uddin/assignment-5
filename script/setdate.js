const now = new Date();
const day= now.getDate();
 const day_name=now.toLocaleString("en-US", { weekday: "long"});
const month= now.toLocaleString("en-US", { month: "long" });;
const year= now.getFullYear();
document.getElementById('date').innerHTML=day_name +"<br><span class='font-bold'>"+ month+" " + day + " "+ year + "</span>"