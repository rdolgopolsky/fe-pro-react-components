import React from "react";
import PropTypes from "prop-types";

const NavItem = ({children, link}) => {
	if (children) {
		return <li className="nav-list__item">
			<a href={link}>
				{children}
			</a>
		</li>
	}
}

NavItem.propTypes = {
	children: PropTypes.node,
	link: PropTypes.string
}

export default NavItem;