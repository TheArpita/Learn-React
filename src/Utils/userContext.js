import { createContext } from "react";

const userContext = createContext({
    //give the default values of the contexts/variables which I want to keep as shared all over the project
    user: {
        name: 'Default'
    }
});

//not mandetory, but to track in case of multiple contexts; purpose-debugging
userContext.displayName = "userContext";

export default userContext;