
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');








///////////////onLoad Task

window.onload = function() {
      
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
 
    tasks.forEach(task => {
       hiha(task);
    });
}

function addTask() {
    const taskValue = taskInput.value;
    if (taskValue.trim() !== '') {
        createTaskElement(taskValue);
        taskInput.value = '';
        saveTasks();
    }
}


function saveTasks() {

    const tasks = Array.from(taskList.children).map(task => task.innerText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert(tasks)
}





/////////////////////Event Handlers


addTaskBtn.addEventListener('click',dooo);


taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        dooo()
    }
});




function dooo(){


    const taskText = taskInput.value;
    if (taskText.trim() !== '') {
        const li = document.createElement('li');
        const date = new Date();
        const dateString = date.toLocaleDateString();
        const timeString = date.toLocaleTimeString();
        li.innerHTML = `${taskText} <span class="taskDate">(Created on ${dateString} at ${timeString})</span>`;
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
            if (li.classList.contains('completed')) {
                taskList.appendChild(li); // Move completed task to the bottom
            } else {
                taskList.insertBefore(li, taskList.childNodes[0]); // Insert non-completed task at the top
            }
        });
        taskList.insertBefore(li, taskList.childNodes[0]); // Insert new task at the top
        taskInput.value = '';
    }
    saveTasks();

}

function hiha(data){
    let temp= data.split("(Created");
    const taskText = temp[0]

    const dateString = temp[1]


    if (taskText.trim() !== '') {
        const li = document.createElement('li');
        // const date = new Date();
        // const dateString = date.toLocaleDateString();
        // const timeString = date.toLocaleTimeString();
        li.innerHTML = `${taskText} <span class="taskDate">(Created  ${dateString}</span>`;
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
            if (li.classList.contains('completed')) {
                taskList.appendChild(li); // Move completed task to the bottom
            } else {
                taskList.insertBefore(li, taskList.childNodes[0]); // Insert non-completed task at the top
            }
        });
        taskList.insertBefore(li, taskList.childNodes[0]); // Insert new task at the top
        taskInput.value = '';
     

    }
}

