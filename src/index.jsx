import React, { Fragment } from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import classNames from "classnames";
import styles from "./style";

const Shimmer = (props) => {
	/**
	 * Appending animating shimmer class to the Shimmer component's child.
	 */
	const appendShimmerToChild = (child) => {
		const { classes } = props;
		return React.cloneElement(child, {
			className: classNames(child.props.className, classes.shimmer),
		});
	};

	const { children } = props;
	let modifiedChildren = [];
	if (children.length > 0) {
		children.forEach((element) => {
			modifiedChildren.push(appendShimmerToChild(element));
		});
	} else {
		modifiedChildren = appendShimmerToChild(children);
	}
	return <Fragment>{modifiedChildren}</Fragment>;
};

Shimmer.propTypes = {
	classes: PropTypes.object,
	children: PropTypes.object,
};

export default injectSheet(styles)(Shimmer);
