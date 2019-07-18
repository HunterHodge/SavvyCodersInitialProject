import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const states = {
    'home': {
        'title': 'This is the home page!'
    },
    'about': {
        'title': 'About page'
    },
    'contact': {
        'title': 'Contact'
    }
};

/*
1 add event listener for what is clicked on
2 set state = to navigation button clicked
3 Re-render page
*/
function render(state){
    document.querySelector('#root').innerHTML = `
${Navigation(state)}
${Header(state)}
${Main(state)}
${Footer(state)}`;
}
render(states.home);
const navSwitch = document.querySelectorAll('nav > ul >li:not(#dropdown)');

navSwitch.forEach(function switchpage(element){
    element.addEventListener('click', function clickHandler(event){
        event.preventDefault();
        console.log(event.target.textContent);
        render(states[event.target.textContent.toLowerCase()]);
    });
});
