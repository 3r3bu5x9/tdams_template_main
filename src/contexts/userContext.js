import { createContext, useState } from "react";
export const UserContext = createContext({});

export default function UserProvider({children}) {

    const[loggedinuser, setloggedinuser] = useState({});

    const AddUser=(user)=>{
        setloggedinuser(user);
    }
    return (
        <UserContext.Provider value={{loggedinuser, AddUser}}>{children}</UserContext.Provider>
    )
}
