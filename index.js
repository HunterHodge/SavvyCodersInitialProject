import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const stores = {
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
2 set store = to navigation button clicked
3 Re-render page
*/
function render(store){
    document.querySelector('#root').innerHTML = `
${Navigation(store)}
${Header(store)}
${Main(store)}
${Footer(store)}`;

    const navSwitch = document.querySelectorAll('nav > ul >li:not(#dropdown)');

    navSwitch.forEach(function switchpage(element){
        element.addEventListener('click', function clickHandler(event){
            event.preventDefault();
            render(stores[event.target.textContent.toLowerCase()]);
        });
    });
}
render(stores.home);
