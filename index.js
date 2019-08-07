import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import Navigo from 'navigo';

const router = new Navigo(location.origin);

const store = {
    'home': {
        'links': {
            'primary': [ 'Home', 'About', 'Contact','Blog' ],
            'dropdown': [ 'Project 1', 'Project 2', 'Project 3' ]
        },
        'title': 'This is the home page!',
        'page': `
        <section>
          <h3>Top section</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            nihil enim incidunt sunt tempore magni ut. Asperiores quod, vitae
            corrupti sint deserunt saepe sit voluptatum veritatis, sed, nostrum
            totam porro.
          </p>
          <a href="#" class="cta-btn">Read More!</a>
        </section>
        <section>
          <h3>Middle Section</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            nihil enim incidunt sunt tempore magni ut. Asperiores quod, vitae
            corrupti sint deserunt saepe sit voluptatum veritatis, sed, nostrum
            totam porro.
          </p>
          <a href="#" class="cta-btn">Read More!</a>
        </section>
        <section>
          <h3>Bottom section</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            nihil enim incidunt sunt tempore magni ut. Asperiores quod, vitae
            corrupti sint deserunt saepe sit voluptatum veritatis, sed, nostrum
            totam porro.
          </p>
          <a href="#" class="cta-btn">Read More!</a>
        </section>`
    },
    'about': {
        'links': {
            'primary': [ 'Home', 'About', 'Contact','Blog' ],
            'dropdown': [ 'Project 1', 'Project 2', 'Project 3' ]
        },
        'title': 'About page',
        'page': `
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
        quisquam accusamus, perferendis sit sequi aliquid, commodi
        perspiciatis reiciendis at cupiditate beatae labore et libero, dolore
        minus laboriosam ea numquam ut.
        </p>`
    },
    'contact': {
        'links': {
            'primary': [ 'Home', 'About', 'Contact','Blog' ],
            'dropdown': [ 'Project 1', 'Project 2', 'Project 3' ]
        },
        'title': 'Contact',
        'page': `<!--
        The action attribute defines where on the server the form data should be sent
        The method attribute specifies the HTTP method (GET or POST)
      -->

    <form action="form-responses/new" method="POST" netlify>
      <!-- Developer's Note: 'placeholder' without using ' <
      label >
      ' is NOT RECOMMENDED for accessibility purposes. -->

      <div class="input-group input-group--row">
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          autofocus
        />
        <input type="text" name="lastname" placeholder="Last Name" />
      </div>
      <input
        type="email"
        name="userEmail"
        placeholder="your.email@example.com"
      />

      <div class="input-group">
        <p>What's this message about?</p>

        <div>
          <input
            type="radio"
            name="subject"
            value="professional"
            id="pro"
            checked
          />
          <label for="pro">I'd like to hire you!</label>
        </div>
        <div>
          <input
            type="radio"
            name="subject"
            value="personal"
            id="personal"
          />
          <label for="personal">Personal message</label>
        </div>
        <div>
          <input type="radio" name="subject" value="other" />
          <label>Don't know/something else</label>
        </div>
      </div>

      <div class="input-group">
        <input
          type="checkbox"
          name="optin"
          value="trusting"
          checked
        />Subscribe me to your newsletter!
      </div>

      <label for="marketing">How did you hear about me?</label>
      <div class="input-group input-group--flex">
        <select name="marketing">
          <optgroup label="Online">
            <option value="social"
              >Social Media (FB, Twitter, LinkedIn)</option
            >
            <option value="github">Online Portfolio (GitHub)</option>
            <option value="search">Search Engine</option>
            <option value="email">Email</option>
          </optgroup>
          <optgroup label="In-Person">
            <option value="networking">We met at a networking event</option>
            <option value="referral">Personal referral</option>
            <option value="random">We met somewhere else</option>
          </optgroup>
          <option value="other">Other</option>
        </select>
      </div>

      <div class="input-group input-group--flex">
        <textarea name="user_message" rows="8" cols="40"></textarea>
        <div>
          <input type="submit" />
          <input type="reset" value="Reset" />
        </div>
      </div>
    </form>`
    },
    'blog': {
        'links': {
            'primary': [ 'Home', 'About', 'Contact','Blog' ],
            'dropdown': [ 'Project 1', 'Project 2', 'Project 3' ]
        },
        'title': 'Blog',
        'page': '<p>Loading blog posts</p>'
    }
};

/*
1 add event listener for what is clicked on
2 set store = to navigation button clicked
3 Re-render page
*/
function render(state){
    document.querySelector('#root').innerHTML = `
${Navigation(state)}
${Header(state)}
${Main(state)}
${Footer(state)}`;

    // router.updatePageLinks();
    const navSwitch = document.querySelectorAll('nav > ul >li:not(#dropdown)');

    navSwitch.forEach(function switchpage(element){
        element.addEventListener('click', function clickHandler(event){
            event.preventDefault();
            render(store[event.target.textContent.toLowerCase()]);
        });
    });
}

router.on(':view', function handleParams(params){
    console.log(params);
    render(store[params.view]);
})
    .on('/', function resolver(){
        render(store.home);
    }).resolve();

