// Create a greeter that will use the person's name and display, "Hello, [Name]"

let fname, lname;

while(!fname){
    fname = prompt('What is your first name?');
}
while(!lname){
    lname = prompt('What is your last name?');
}

document.querySelector('#greeting').textContent = `<p>Hello, ${fname} ${lname}</p>`;
console.log(name);
