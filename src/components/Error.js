import { useRouteError } from "react-router"

const Error=()=>{
    const err=useRouteError();
    return (<>
    <h1>Error = {err.status} : {err.statusText}</h1>
    </>)
}
export default Error;