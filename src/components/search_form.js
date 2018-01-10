import React, { Component } from 'react';

const SearchForm = () => (
    <section id="search" className="alt">
                  <form method="post" action="#">
                    <input type="text" name="query" id="query" placeholder="Search" />
                  </form>
                </section>
);

export default SearchForm;