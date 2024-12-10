import { CountContext } from "./CountContext"
import { useState } from "react"

const CountContextProvider = ({ children }) => {
	const [count, setCount] = usestate(0)
	return (
		<CountContext.Provider value={{count, setCount}}>
							{children}
						</CountContext.Provider>	

	)
}

export default CountContextProvider
