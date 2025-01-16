const taskInput = document.getElementById('taskInput');
const dateTime = document.getElementById('dateTime');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const text = document.getElementById('text');

taskInput.addEventListener('focus', () => {
    text.style.top = '-12px',
    text.style.fontSize='2.3vh',
    text.style.left = '-1px'
});


addTaskBtn.addEventListener('click', () => {
    text.style.top = '20px',
    text.style.fontSize = '2.5vh'
    const taskText = taskInput.value.trim();
    const taskDateTime = dateTime.value.trim();
    if(taskText!=="") {
        const taskItem= document.createElement('li');
        taskItem.classList.add('task');
        taskItem.textContent = taskText + " by " + " (" + taskDateTime + ")";




        // const editBtn = document.createElement('button');
        // editBtn.style.backgroundColor='transparent';
        // editBtn.style.border='2px solid gray';
        // editBtn.style.color='wheat';
        // editBtn.style.height='4.5vh';
        // editBtn.style.width='8.5vh';
        // editBtn.style.fontSize='2vh';
        // editBtn.style.borderRadius='10px'
        // editBtn.style.position='relative';
        // editBtn.style.left='10px';
        // editBtn.textContent = 'Edit';
        // editBtn.addEventListener('click', ()=> {
        //     taskList.editChild(taskItem);
        // });

        const deleteBtn = document.createElement('button');
        deleteBtn.style.backgroundColor='transparent';
        deleteBtn.style.border='2px solid gray';
        deleteBtn.style.color='whitesmoke';
        deleteBtn.style.height='4.5vh';
        deleteBtn.style.width='8.5vh';
        deleteBtn.style.fontSize='2vh';
        deleteBtn.style.borderRadius='10px'
        deleteBtn.style.position='relative';
        deleteBtn.style.left='10px';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });
        
        
        

        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);

        taskInput.value = '';
        dateTime.value = '';
    
    }
})