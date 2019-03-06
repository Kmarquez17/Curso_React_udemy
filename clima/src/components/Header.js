import React from 'react';
import PropTypes from 'prop-types';
const Header = props => {
	return (
		<div>
			<nav>
				<div className="nav-wrapper light-blue draken-2">
					<div className="brand-logo">
						{props.titulo}
					</div>
				</div>
			</nav>
		</div>
	);
};
Header.propTypes = {
	titulo: PropTypes.string.isRequired
}

export default Header;
