import React from 'react';
import FilterLink from '../Containers/FilterLink.jsx';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../shared/constants.js'


const Footer = () => (
    <p>
        Show 
        <FilterLink filter= { SHOW_ALL }>
           All
        </FilterLink>
        {','}
        <FilterLink filter = { SHOW_COMPLETED }> 
            Completed
        </FilterLink>
        {','}
        <FilterLink filter= { SHOW_ACTIVE } >
            Active
        </FilterLink>
    </p>
)

export default Footer;
