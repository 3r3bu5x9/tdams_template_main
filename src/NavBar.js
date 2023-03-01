import {Link} from "react-router-dom";
import {useContext} from "react";
import AuthContext from "./contexts/authContext";
import {UserContext} from "./contexts/userContext";

export default function NavBar() {
    const {loginStatus} = useContext(AuthContext)
    const {loggedinuser} = useContext(UserContext);

    console.log(loggedinuser)

    return (
        <>
            <nav className={'Nav'}>
                <Link to={'/'} className={'SiteTitle'}>TDAMS 🍔🍟🌭</Link>
                <h1>{(loginStatus === 1) ? loggedinuser.role : ""}</h1>
                <ul>
                    <li>
                        <Link to={'/all-products'}>Stock</Link>
                    </li>
                    <li>
                        <Link to={{pathname: '/login'}} state={""}>
                            {(loginStatus === 1) ? 'Logout' : 'Login'}</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link to={'/allUsers'}>All Users</Link>
                    </li>
                    <li>
                        <Link to={'/register'}>Register</Link>
                    </li>
                </ul>
            </nav>

        </>
    )
}