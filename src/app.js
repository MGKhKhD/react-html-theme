import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Banner from './components/banner';
import SectionWithSideLook from './components/section_with_side_look';
import SectionWithUpLook from './components/section_with_up_look';
import Sidebar from './components/sidebar';
import Header from './components/header';

class App extends Component{
  render(){
    return(
      <div id="wrapper">

          <div id="main">
            <div className="inner">

                <Header />

                <Banner />
                <SectionWithSideLook />
                <SectionWithUpLook />

                

            </div>
          </div>
          <Sidebar />
          

      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
