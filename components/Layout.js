import React from 'react';
import Navigation from './Navigation';
import Home from './Home';
import Work from './Work';
import Portafolio from './Portafolio';
import Contact from './Contact';
const Layout = (props) => {
    return(
        <React.Fragment>
            <Navigation />
            <Home />
            <Work />
            <Portafolio />
            <Contact />
            {props.children}
        </React.Fragment>
    )
}

export default Layout;
