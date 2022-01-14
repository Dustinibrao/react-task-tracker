import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
	return (
		<div>
			<button
				className="btn"
				onClick={onClick}
				style={{ backgroundColor: color }}
			>
				{text}
			</button>
		</div>
	);
};

Button.defaultProps = {
	color: "blue",
};
Button.propTypes = {
	text: PropTypes.string,
	color: PropTypes.string,
	onclick: PropTypes.func,
};

export default Button;
