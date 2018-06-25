import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';

//app component 
const App = () => (
  <div className='app'>
    <h1>React Router Demo</h1>
    <Navigation />
    <Main />
  </div>
);


//navigation component in a bigger project this would be in its own file
const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink exact activeClassName='current' to='/'>Home</NavLink></li>
      <li><NavLink exact activeClassName='current' to='/about'>About</NavLink></li>
      <li><NavLink exact activeClassName='current' to='/contact'>Contact</NavLink></li>
    </ul>
  </nav>
);

//Main component 
const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/about' component={About}></Route>
    <Route exact path='/contact' component={Contact}></Route>
  </Switch>
);

//views for the app
const Home = () => (
  <div className='home'>
    <h1>Welcome to my portfolio website</h1>
    <p>Fell free to browse around and learn more about me.</p>
  </div>
);

const About = () => (
  <div className='about'>
    <h1>About Me</h1>
    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
  </div>  
);

const Contact = () => (
  <div className='contact'>
    <h1>Contact Me</h1>
    <p>You can reach via email: <strong>hello@example.com</strong></p>
  </div>
);



export default App;
