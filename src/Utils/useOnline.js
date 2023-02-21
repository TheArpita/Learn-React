import { useEffect, useState } from "react"

const useOnline = () => {

    const [isOnline, setIsOnline] = useState(true);

    useEffect(()=>{

        const handleOnline = () => {
            setIsOnline(true); 
        };
        const handelOffline = () => {
            setIsOnline(false);
        };

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handelOffline);

        return() => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handelOffline);
        }
        
    }, []);
    return isOnline;
}

export default useOnline;