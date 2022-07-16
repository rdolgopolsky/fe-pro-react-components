import React from "react";
import PropTypes from "prop-types";

const Article = ({title, description}) => {
	return <li className="list__item">
		<h2>{title}</h2>
		<p>{description}</p>
	</li>
}

Article.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string
}

export default Article;