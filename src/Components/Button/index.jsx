import PropTypes from "prop-types";
import { Button } from "./styles";

function DefautButton({ children, theme, ...props }) {
	return (
		<Button {...props} theme={theme}>
			{children}
		</Button>
	);
}

DefautButton.propTypes = {
	children: PropTypes.node.isRequired,
	theme: PropTypes.string.isRequired,
};

export default DefautButton;
