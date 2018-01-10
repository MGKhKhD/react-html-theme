import React, { Component } from 'react';

import SideSubMenu from './side_sub_menus';

const SideMenue = () =>(
    <nav id="menu">
                  <header className="major">
                    <h2>Menu</h2>
                  </header>
                  <ul>
                    <li><a href="index.html">Homepage</a></li>
                    <li><a href="generic.html">Generic</a></li>
                    <li><a href="elements.html">Elements</a></li>
                    <li>
                      <SideSubMenu />
                    </li>
                    <li><a href="#">Etiam Dolore</a></li>
                    <li><a href="#">Adipiscing</a></li>
                    <li>
                        <SideSubMenu />
                    </li>
                    <li><a href="#">Maximus Erat</a></li>
                    <li><a href="#">Sapien Mauris</a></li>
                    <li><a href="#">Amet Lacinia</a></li>
                  </ul>
                </nav>
);

export default SideMenue;