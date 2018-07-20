import React from 'react';
import { Link } from 'react-router-dom';

import '../style/Header.css';

const Header = (props) => (
  <div className="header" style={props.style}>
    { props.page === "main" &&
      <Link to='/upload'>
        <div className="header-item upload" />
      </Link>
    }
    { props.page === "player" && 
      <div className="header-item playlist" />
    }
    <div className="header-logo" />
    
    { props.page === "main" && 
      <div className="header-item dummy" />
    }
    { props.page === "player" && 
      <div className="header-item close" />
    }
  </div>
);

export default Header;