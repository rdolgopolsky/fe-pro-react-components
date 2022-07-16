import React from "react";
import PropTypes from "prop-types";

const Footer = ({children, className}) => {
	if (children) {
		return <footer className="footer {className}">
			<div className="container">
				{children}
			</div>
		</footer>
	}
}

Footer.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string
}

export default Footer;