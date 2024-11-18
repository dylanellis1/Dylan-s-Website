// Footer year
const currentYear = new Date().getFullYear();
document.querySelector("footer small").innerText = `© ${currentYear} Dylan Ellis`;

// Greeting based on time of day
const greeting = document.createElement("h1");
const hours = new Date().getHours();
let greetingText = "";
let greetingClass = "";

if (hours < 12) {
  greetingText = "Good Morning!";
  greetingClass = "morning";
} else if (hours < 17) {
  greetingText = "Good Afternoon!";
  greetingClass = "afternoon";
} else {
  greetingText = "Good Evening!";
  greetingClass = "evening";
}

greeting.innerText = greetingText;
greeting.classList.add(greetingClass);
document.querySelector("header").appendChild(greeting);

// Alert button and hover
const alertButton = document.createElement("button");
alertButton.id = "btn-alert";
alertButton.innerText = "Click Here";

// Button alert
alertButton.addEventListener("click", () => {
    alert("Welcome to Dylan's website");
  });
  
  // Hover functionality
  alertButton.onmouseover = () => {
    alertButton.innerText = "Button";
  };
  alertButton.onmouseout = () => {
    alertButton.innerText = "Click Here";
  };
  
  document.body.appendChild(alertButton);
  
  // Ordered list of even/odd numbers
  const numberList = document.createElement("ol");
  numberList.id = "Numbers";
  
  for (let i = 1; i <= 12; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i % 2 === 0 ? `Even ${i}` : `Odd ${i}`;
    numberList.appendChild(listItem);
  }
  
  document.body.appendChild(numberList);
  
  // Today's date
  console.log("Today's date:", new Date().toLocaleString());

