let todolist = [{
    item : `learn js`,
    date : `2024-08-01`
}]
showtodo();
function addtodo(){
    let display = document.querySelector(`#task`); /**by this the input tag is used */
    let dateelement = document.querySelector(`#date`);
    let todoitem = display.value ; /**by this the value of that input box will be used */
    let tododate = dateelement.value
    todolist.push({item:todoitem,date:tododate}); /**all the input values are pushed into an array */
    display.value = ""; /**by this the input box will be empty after adding the task */
    dateelement.value = ""
    showtodo();
}
function showtodo(){
    let element = document.querySelector(`.todo-items`);
    let newhtml = '';
    for (let i = 0; i < todolist.length; i++) {
        let todoitem = todolist[i].item;
        let tododate = todolist[i].date;
        newhtml += `
        <span>${todoitem}</span>
        <span>${tododate}</span> 
        <button onclick="todolist.splice(${i},1); showtodo()">Delete</button>`;  /*we are creating a new html and button every time add is clicked 
        and functionality of delete btn with splice the first value is index which is i and second value is no.of items then again call this func to display new list */      
    }
    element.innerHTML = newhtml;
}