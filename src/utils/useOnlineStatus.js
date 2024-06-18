import { useEffect,useState} from "react";

const useOnlineStatus=()=>{
     const[onLineStatus,setOnLineStatus]=useState(true);
    useEffect(()=>{
        window.addEventListener("online",()=>{
         setOnLineStatus(true);
        });
         window.addEventListener("offline",()=>{
            setOnLineStatus(false);
        });
    },[]);

    return onLineStatus;
}

export default useOnlineStatus;