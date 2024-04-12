import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const HomePage = () => {

const { user } = useContext( UserContext );


    return (
        <>
            <h3>HomePage <small>{ user?.name }</small></h3>
            <hr />

            <pre>
                { JSON.stringify( user, null, 3 )}
            </pre>

            
        </>
    )
}
