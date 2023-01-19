import { useRouteError } from "react-router-dom";

const Error =()=>{
    const err = useRouteError();
    // const {status,statusText} = err;
    return (
        <>
        <h2>Something went wrong. Please go back to the home page.</h2>
        <h4>{err.status + ": " +  err.statusText}</h4>
        </>
    )
}
export default Error;