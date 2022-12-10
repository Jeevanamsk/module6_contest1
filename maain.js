// Define the array of employees
const employees = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" }
  ];
  
  // Use the map() function to convert the ages from strings to integers
  const employeesWithIntAges = employees.map(employee => {
    // Convert the age to an integer
    const age = parseInt(employee.age, 10);
  
    // Return a new object with the same properties as the original,
    // but with the age converted to an integer
    return { ...employee, age };
  });
  
  // Use the forEach() function to edit the employee with the name "john"
  employeesWithIntAges.forEach(employee => {
    // If the employee's name is "john", update their age to 19
    if (employee.name === "john") {
      employee.age = 19;
    }
  });
  
  // Use the spread operator to append a new employee to the array
  const newEmployees = [...employeesWithIntAges, { id: 4, name: "kalpana", age: 23, profession: "developer" }];
  

  // Get a reference to the filter button and the dropdown
const filterButton = document.getElementById("filter-button");
const professionDropdown = document.getElementById("profession");

// Attach an event listener to the filter button
filterButton.addEventListener("click", () => {
  // Get the selected profession from the dropdown
  const selectedProfession = professionDropdown.value;
  // This would come from the dropdown in the UI
  const filteredEmployees = newEmployees.filter(employee => employee.profession === selectedProfession);

  filteredEmployees.forEach(employee => {
    // Create a new card element for the employee
    const card = document.createElement("div");
    card.className = "card";
  
    //Add the employee's id to the card
    const id =document.createElement("p");
    id.textContent=employee.id;
    card.appendChild(id);

    // Add the employee's name to the card
    const name = document.createElement("p");
    name.textContent = employee.name;
    card.appendChild(name);
  
    // Add the employee's age to the card
    const age = document.createElement("p");
    age.textContent = employee.age;
    card.appendChild(age);
  
    // Add the employee's profession to the card
    const profession = document.createElement("p");
    profession.textContent = employee.profession;
    card.appendChild(profession);
  
    // Add the card to the page
    document.getElementById("cards").appendChild(card);
  });

  // Check if a profession is selected in the dropdown // .appendChild(card)
  if (!selectedProfession) {
    // If no profession is selected, throw an alert
    alert("Please select a profession before clicking the button.");
    return;
  }

  
});

  