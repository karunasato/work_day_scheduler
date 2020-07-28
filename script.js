$(document).ready(function(){
   const hours = [
    "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM",
];
const date = new Date();
const hour = date.getHours();
const todos = JSON.parse(localStorage.getItem('todo')) || {};

$(document).on("click", ".saveBtn", function(){
        const key = $(this).siblings(".hour").text();
        const value = $(this).siblings('textarea').val().trim();
        todos[key] = value
        localStorage.setItem("todo", JSON.stringify(todos));
    })
        for (let i = 0; i < hours.length; i++) {
        const time = hours[i];
        $('.container').append(`<div class="row time-block">
        <div class="hour col-2">${time}</div>
        <textarea class="description ${i<hour-9 ? "past" : i > hour-9 ? "future" : "present"} col-8">${todos[time] || ""}</textarea>
        <button class="saveBtn col-2">Save</button>
      </div>`)
    } 
})

