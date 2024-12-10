import { useContext } from "react"
import { CountContext } from "../context/CountContext"

const LittleSpan = () => {

	const { count } = useContext(CountContext)
	return <span> { count }</span>
}

export default LittleSpan
