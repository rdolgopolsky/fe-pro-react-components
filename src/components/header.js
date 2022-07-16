import React from "react";
import PropTypes from "prop-types";

const Header = ({children, className}) => {
	if (children) {
		return <header className="header {className}">
			<div className="container">
				{children}
			</div>
		</header>
	}
}

Header.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string
}

export default Header;
