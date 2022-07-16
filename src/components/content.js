import React from "react";
import PropTypes from "prop-types";

const Content = ({children}) => {
	if (children) {
		return <main>
			{children}
		</main>
	}
}

Content.propTypes = {
	children: PropTypes.node,
}

export default Content;