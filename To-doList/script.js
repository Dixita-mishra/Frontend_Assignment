const body = document.querySelector('body');
const main = document.getElementById('main');
const inputBox=document.createElement('div');
inputBox.className='inputBox';
inputBox.innerHTML=`<input type="text" id="taskInput" placeholder="Add your new task here">
<button id="taskBtn">Add Task</button>`;
main.appendChild(inputBox);
const taskList=document.createElement('ul');
taskList.className='taskList';
taskList.type='none';
main.appendChild(taskList);
const taskBtn=document.getElementById('taskBtn');
taskBtn.addEventListener('click',addTask);
function addTask(){
    const taskInput=document.getElementById('taskInput');
    const taskValue=taskInput.value;
    if (taskValue===''){
        alert('Please enter a task');
    } else {
        const listItem=document.createElement('li');
        listItem.className='listItem';
        listItem.innerText=taskValue;
        taskList.appendChild(listItem);
        const deleteBtn=document.createElement('button');
        deleteBtn.className='deleteBtn';
        deleteBtn.innerText='Delete';
        listItem.appendChild(deleteBtn);
        deleteBtn.addEventListener('click',function(){
            taskList.removeChild(listItem);
        });
        const editBtn=document.createElement('button');
        editBtn.className='editBtn';
        editBtn.innerText='Edit';
        listItem.appendChild(editBtn);
        editBtn.addEventListener('click',function(){
            const newTaskValue=prompt('Edit your task:',taskValue);
            if (newTaskValue!==null && newTaskValue!==''){
                listItem.firstChild.textContent=newTaskValue; 
            }
        });
        taskInput.value='';
    }}