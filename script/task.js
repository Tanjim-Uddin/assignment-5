const task = document.getElementsByClassName("task");
let clickCount = 0;
for (let i = 0; i < task.length; i++) {
  task[i].addEventListener("click", function () {
    
    clickCount++;
    alert("Board Updated Successfully");

    if (clickCount === task.length) {
      alert("Congrates!!! YOU have completed all the current tasks" );
    }
    add_AND_sub();
    this.disabled = true;
    this.style.backgroundColor = "lightgray";

    const history = document.getElementById("history");
    const task_title = document.getElementsByClassName("title");
    const title = task_title[i].innerText;
    const p = document.createElement("p");
    p.innerText = `You have completed the task ${title} at ${new Date().toLocaleTimeString()}`;
    p.className = "bg-common rounded-lg text-gray-700 mt-3 p-3";
    history.appendChild(p);
    show_again();

    document.getElementById('clearHistory').addEventListener('click', function() {
  document.getElementById('history').style.display = 'none';
});
    
  });
}
function add_AND_sub() {
  const value1 = document.getElementById("addedTask");
  const convertedValue1 = parseInt(value1.innerText);
  const valueAfterSub = convertedValue1 - 1;
  const value2 = document.getElementById("check");
  const convertedValue2 = parseInt(value2.innerText);
  const valueAfterAdd = convertedValue2 + 1;
  document.getElementById("check").innerText = valueAfterAdd;
  document.getElementById("addedTask").innerText = "0" + valueAfterSub;
}
function show_again() {
     
  document.getElementById('history').style.display = 'block';

}