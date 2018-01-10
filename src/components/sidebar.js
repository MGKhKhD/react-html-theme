import React, { Component } from 'react';

import SideMenue from './side_menu';
import SectionSideBar from './section_sidebar';
import BeingInTouch from './being_in_touch';
import Footer from './footer';
import SearchForm from './search_form';

class Sidebar extends Component{
    render(){
        return(
            <div id="sidebar">
            <div className="inner">

                <SearchForm />

                <SideMenue />

                <SectionSideBar />
                <BeingInTouch />
                <Footer />

                

            </div>
          </div>
        );
    }
}

export default Sidebar;