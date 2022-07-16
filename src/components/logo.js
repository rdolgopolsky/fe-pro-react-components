import React from "react";
import PropTypes from "prop-types";

const Logo = ({children, link = "/"}) => {
	if (children) {
		return <a href={link} className="logo">
			{children}
		</a>
	}
}

Logo.propTypes = {
	children: PropTypes.node,
	link: PropTypes.string
}

export default Logo;
