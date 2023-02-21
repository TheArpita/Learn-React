import { useContext } from "react"
import userContext from "../Utils/userContext"

export default Footer = () => {
    const {user} = useContext(userContext);
    return(
        <>
            <h1>hi {user.name}</h1>
            <h2>This is dummy footer</h2>
        </>
    )
}