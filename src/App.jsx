import "./App.css"
import { useContext } from "react"

import ButtonComp from "./components/ButtonComp"

import { CountContext } from "./context/CountContext"
import { UserContext } from "./context/userContext"
import HeaderComp from "./components/HeaderComp"

function App() {
	const { count, setCount } = useContext(CountContext)
	const { user, setUser } = useContext(UserContext)

	const handleClick = () => {
		setCount((prev) => prev + 1)
	}

	const handleLogIn = () => {
		setUser(prev => {
			if (!prev) {
				return {
					...prev,
					email: "john.doe@gmail.com",
					username: "JohnDoe",
				}
			}
			setCount(0)
			return null
		})
	}

	return (
		<main
			className="app"
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "1em",
				backgroundColor: user ? "#024d1021" : "#4d020221",
				padding: ".5em",
			}}
		>
			<HeaderComp />
			<ButtonComp text="add" onclick={handleClick} />
			Your result is dynamic count here ... {count}
			{/* You'll need another button comp here later */}
			{user && <div className="alert">You are now logged in !!!</div>}
			<ButtonComp text={user ? "Logout" : "Login"} onclick={handleLogIn} />
		</main>
	)
}

export default App