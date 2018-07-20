import React from 'react';

import '../style/Header.css';

const Header = (props) => (
  <div className="header">
    { props.page === "main" &&
      <div className="header-item upload" />
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