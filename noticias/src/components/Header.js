import React from 'react';

const Header = (props) => {
    return (
        <nav>
            <div className="nav-wrapper light-blue darjen-3">
                    <a href="#top" className="brand-logo center">{props.titulo}</a>
            </div>
        </nav>
    );
};

export default Header;