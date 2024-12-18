/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { Title } from "./styled";

function DefaultTitle({ children }) {
	return <Title>{children}</Title>;
}

DefaultTitle.PropTypes = {
	children: PropTypes.node.isRequired,
};

export default DefaultTitle;
