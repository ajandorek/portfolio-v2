import React from 'react';
import FadeIn from 'react-fade-in';
import FontAwesome from 'react-fontawesome';

const Portfolio = () => (
  <FadeIn>
  <div>
    <h1 className='text-center page-title'>Portfolio</h1>
    <h4 className='text-center'>A collection of projects I have created or collaborated on</h4>
    <div className="grid-x grid-margin-x">
      <div className="small-4 large-offset-2 cell">
        <a className="callout" href="https://maps-app-ut.herokuapp.com/"
          target="blank">
          <h4 className='text-center'>Map Fun</h4>
          <img src={require('../images/map-fun.png')} />
          <p className='text-center'>A maps application that gives the user information about a city.</p>
          <h5 className='text-center'>Technologies Used</h5>
          <p className='text-center'>jQuery & AJAX</p>
        </a>
        <a className='callout git' href='https://github.com/ajandorek/maps-app' target="blank">
        <FontAwesome
              className="icon"
              name='github'
              size='4x'
            />
        </a>
      </div>
      <div className="small-4 cell">
        <a className="callout" href="http://react-sports.herokuapp.com/"
          target="blank">
          <h4 className='text-center'>PickUp</h4>
          <img src={require('../images/react-sports.png')} />
          <p className='text-center'>An application that allows a user to search for local pickup games.</p>
          <h5 className='text-center'>Technologies Used</h5>
          <p className='text-center'>React, Redux, MongoDB, Express, Auth0</p>
        </a>
        <a className='callout git' href='https://github.com/ajandorek/pickup-sports-app' target="blank">
        <FontAwesome
              className="icon"
              name='github'
              size='4x'
            />
        </a>
      </div>
    </div>
    <div className="grid-x grid-margin-x">
      <div className="small-4 large-offset-2 cell">
        <a className="callout" href="https://fallout-hangman.herokuapp.com/"
          target="blank">
          <h4 className='text-center'>Fallout Hangman</h4>
          <img src={require('../images/fallout-hangman.png')} />
          <p className='text-center'>A simple hangman game with a Fallout theme!</p>
          <h5 className='text-center'>Technologies Used</h5>
          <p className='text-center'>Javascript</p>
        </a>
        <a className='callout git' href='https://github.com/ajandorek/week-3-game' target="blank">
        <FontAwesome
              className="icon"
              name='github'
              size='4x'
            />
        </a>
      </div>
      <div className="small-4 cell">
        <a className="callout" href="http://overwatch-rpg.herokuapp.com/"
          target="blank">
          <h4 className='text-center'>Overwatch RPG</h4>
          <img src={require('../images/overwatch-rpg.png')} />
          <p className='text-center'>A role playing game with an Overwatch spin!</p>
          <h5 className='text-center'>Technologies Used</h5>
          <p className='text-center'>jQuery & jQueryUI</p>
        </a>
        <a className='callout git' href='https://github.com/ajandorek/week-4-game' target="blank">
        <FontAwesome
              className="icon"
              name='github'
              size='4x'
            />
        </a>
      </div>
    </div>
    <div className="grid-x grid-margin-x">
      <div className="small-4 large-offset-2 cell">
        <a className="callout" href="https://floating-caverns-89415.herokuapp.com/"
          target="blank">
          <h4 className='text-center'>Friend Finder</h4>
          <img src={require('../images/friend-finder.png')} />
          <p className='text-center'>A simple App that connects two users based off a survey!</p>
          <h5 className='text-center'>Technologies Used</h5>
          <p className='text-center'>jQuery, Node, Express</p>
        </a>
        <a className='callout git' href='https://github.com/ajandorek/friend-finder' target="blank">
        <FontAwesome
              className="icon"
              name='github'
              size='4x'
            />
        </a>
      </div>
      <div className="small-4 cell">
        <a className="callout" href="https://dry-tundra-67737.herokuapp.com/"
          target="blank">
          <h4 className='text-center'>Burger Time!</h4>
          <img src={require('../images/burger-time.png')} />
          <p className='text-center'>A simple application that lets a user create and eat burgers.</p>
          <h5 className='text-center'>Technologies Used</h5>
          <p className='text-center'>SQL, Sequelize, Express, Handlebars, jQuery</p>
        </a>
        <a className='callout git' href='https://github.com/ajandorek/sequelizedBurger' target="blank">
        <FontAwesome
              className="icon"
              name='github'
              size='4x'
            />
        </a>
      </div>
    </div>
    <div className="grid-x grid-margin-x">
      <div className="small-4 large-offset-2 cell">
        <a className="callout" href="https://pacific-meadow-73127.herokuapp.com/"
          target="blank">
          <h4 className='text-center'>Train Scheduler</h4>
          <img src={require('../images/train-scheduler.png')} />
          <p className='text-center'>An application that allows a user to schedule and monitor trains!</p>
          <h5 className='text-center'>Technologies Used</h5>
          <p className='text-center'>jQuery, Firebase, Moment.js</p>
        </a>
        <a className='callout git' href='https://github.com/ajandorek/train-scheduler' target="blank">
        <FontAwesome
              className="icon"
              name='github'
              size='4x'
            />
        </a>
      </div>
      <div className="small-4 cell">
        <a className="callout" href="http://vast-fjord-35673.herokuapp.com/"
          target="blank">
          <h4 className='text-center'>GIFtastic</h4>
          <img src={require('../images/giftastic.jpg')} />
          <p className='text-center'>Allows users to search for and view GIFs from the Giphy API.</p>
          <h5 className='text-center'>Technologies Used</h5>
          <p className='text-center'>jQuery & AJAX</p>
        </a>
        <a className='callout git' href='https://github.com/ajandorek/giphy-homework' target="blank">
        <FontAwesome
              className="icon"
              name='github'
              size='4x'
            />
        </a>
      </div>
    </div>
  </div>
</FadeIn>
);

export default Portfolio;
