import { Dispatch, SetStateAction } from "react";

export default function ErrorMessage({message, setErrorPresent}: {message: string, setErrorPresent: Dispatch<SetStateAction<boolean>> }) {
    
    return (
        <div className="error-wrapper">
            <h5>Error:</h5>
            <p>{message}</p>
            <button onClick={() => setErrorPresent(false)}>Close message</button>
        </div>
    )
}