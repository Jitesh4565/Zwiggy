 import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return(
        <div className="flex justify-center items-center h-screen border-2">
            <h2>Oops,Something Went Wrong!</h2>
        </div>
    )
}

export default Error;