import { useRouteError } from "react-router-dom";
const ErrorHandler=()=>{
    const error= useRouteError();

    return (
        
        <div>
        <h1>{error.status}</h1>
            OOPS Something Went Wrong!
            <h1> {error.message} </h1>
        </div>
    )
}
export default ErrorHandler;