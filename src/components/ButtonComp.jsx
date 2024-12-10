import PropTypes from "prop-types"
import { UserContext } from "../context/userContext"
import { useContext } from "react"

const ButtonComp = ({ text, onclick }) => {
	const { user} = useContext(UserContext)

	const handleClick = () => {
		onclick()
	}
	return (
		<button
			style={{ color: user ? "#a1fc9f" : "#fcb9b9" }}
			onClick={handleClick}
		>
			{text}
		</button>
	)
}

ButtonComp.propTypes = {
	text: PropTypes.string.isRequired,
	onclick: PropTypes.func.isRequired,
}

export default ButtonComp
