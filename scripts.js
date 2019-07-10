// Create a greeter that will use the person's name and display, "Hello, [Name]" in, <h1>.
const name = prompt('What is your name?');

document.querySelector('h1').textContent = `Hello ${name}`;
