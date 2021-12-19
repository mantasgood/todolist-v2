"use strict";
// variables
const task = document.getElementById("task");
const priority = document.getElementById("priority");
const dueDate = document.getElementById("dueDate");
const status = document.getElementById("status1");
const percentage = document.getElementById("percentage");
const myTable = document.querySelector("tbody");
const myButton = document.getElementById("myButton");
const myForm = document.querySelector("form");
//sumbit function
myButton.addEventListener("click", function (e) {
  e.preventDefault();
  addToDo();
  myForm.reset();
});
//add to start
function addToDo() {
  // console.log(task.value); //takes task value to console
  // console.log(priority.value); //takes priority value to console

  if (
    task.value !== "" &&
    priority.value !== "Choose priority" &&
    dueDate.value !== "" &&
    status1.value !== "Choose status" &&
    percentage.value !== "Choose percentage"
    //default values that cannot pass when undefined
  ) {
    // console.log(task.value); //takes task value to console
    // console.log(priority.value); //takes priority value to console
    // console.log("works"); // test if works
    //row create
    const myRow = document.createElement("tr"); // creates row
    myTable.appendChild(myRow); // appends a chil row in my table
    // task create
    const myTaskCol = document.createElement("td"); // creates column
    const myTaskCheckbox = document.createElement("input");
    const myTaskVal = document.createElement("p");
    myTaskCheckbox.type = "checkbox";
    myTaskVal.textContent = task.value; //put the value of task into it;

    myTaskCol.appendChild(myTaskCheckbox);
    myTaskCol.appendChild(myTaskVal);
    myRow.appendChild(myTaskCol); //appending the collumn

    myTaskCheckbox.addEventListener("click", function () {
      myTaskVal.style.textDecoration = "line-through";
      myTaskCheckbox.addEventListener("click", function () {
        myTaskVal.style.textDecoration = "none";
      });
    });

    //priority create
    const myPriorityCol = document.createElement("td"); // create collumn
    const myPriority = document.createElement("p"); // create pararaph for
    myPriority.textContent = priority.value; //put the value of priority into it;
    switch (
      priority.value //switch between priority values
    ) {
      case "High":
        myPriority.className = "btn btn-danger"; //put bootstap class name
        break;
      case "Normal":
        myPriority.className = "btn btn-warning"; //put bootstap class name
        break;
      case "Low":
        myPriority.className = "btn btn-success"; //put bootstap class name
        break;
    }

    myPriorityCol.appendChild(myPriority); //append the priority
    myRow.appendChild(myPriorityCol); //append the column

    //due date
    const myDueDateCol = document.createElement("td"); // creates column
    myDueDateCol.textContent = dueDate.value; //put the value of due date into it;
    myRow.appendChild(myDueDateCol);

    //status create
    const myStatusCol = document.createElement("td"); // create collumn
    myStatusCol.textContent = status1.value; //put the value of priority into it;
    myRow.appendChild(myStatusCol); //appending the collumn

    // percent completed create
    const myPercentageCol = document.createElement("td");
    const myPercentage = document.createElement("p");
    myPercentage.textContent = percentage.value;
    switch (percentage.value) {
      case "100%":
        myPercentage.className = "progress-bar bg-success";
        myPercentage.style = "width: 100%";
        break;
      case "75%":
        myPercentage.className = "progress-bar bg-success";
        myPercentage.style = "width: 75%";
        break;
      case "50%":
        myPercentage.className = "progress-bar bg-success";
        myPercentage.style = "width: 50%";
        break;
      case "25%":
        myPercentage.className = "progress-bar bg-success";
        myPercentage.style = "width: 25%";
        break;
      case "0%":
        myPercentage.className = "progress-bar bg-success";
        myPercentage.style = "width: 0%";
        break;
    }
    myPercentageCol.appendChild(myPercentage); //append the percentage
    myRow.appendChild(myPercentageCol); //appending the collumn

    // modified on

    const myModifiedOnCol = document.createElement("td"); //create collumn
    const currentTime = new Date();
    myModifiedOnCol.textContent = `${currentTime.getFullYear()}-${
      currentTime.getMonth() + 1
    }-${currentTime.getDate()}, ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;

    myRow.appendChild(myModifiedOnCol); //appending the collumn

    // delete button create
    const myDeleteCol = document.createElement("td");
    const myDeleteBtn = document.createElement("button");
    myDeleteBtn.textContent = "Delete";
    myDeleteBtn.className = "btn btn-danger";
    myDeleteCol.appendChild(myDeleteBtn);
    myRow.appendChild(myDeleteCol);

    // delete function

    myDeleteBtn.addEventListener("click", function () {
      myTable.removeChild(myRow); // removes my row
    }); //add to end
  } else {
    alert("You need to select all the values");
  }
}
