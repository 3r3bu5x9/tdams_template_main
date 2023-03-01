import axios from "axios";

import {useContext, useEffect, useState} from "react";
import {UserContext} from "./contexts/userContext";


export default function Login() {

    const {loggedinuser} = useContext(UserContext);

    const {AddUser} = useContext(UserContext);

    const [user, setuser] = useState({uname: "", passwd: ""});

    const [userlist, setuserlist] = useState([]);


    const HandleChange = (args) => {
        var copyOfuser = {...user};
        copyOfuser[args.target.name] = args.target.value;
        setuser(copyOfuser);
        console.log(user);
    };

    const Validate = () => {
        console.log("inside validate");
        for (const u of userlist) {
            if (u.uname === user.uname && u.passwd === user.passwd) {
                console.log(u);
                axios.get("http://localhost:8080/user/" + u.uid)
                    .then((res) => {
                        AddUser(res.data)
                    })
                break;
            }
        }
    };

    useEffect(() => {
            const url = "http://localhost:8080/user/all";
            axios.get(url)
                .then((res) => {
                    setuserlist(() => (res.data));
                    console.log(userlist);
                })
        }
        , []);
    return (<div className={'FormContainer'}>
        <center>
            <h2>Login</h2>
        </center>
        <div className={'FieldContainer'}>
            <label className={'FieldLabel'}>
                Username:
                <br/>
                <input name={'uname'} type={'text'} placeholder={"Enter your username"}
                       value={user.uname} onChange={HandleChange}
                />
            </label>
        </div>
        <div>
            <label className={'FieldLabel'}>
                Password:
                <br/>
                <input name={'passwd'} type={'password'} placeholder={"Enter your password"}
                       value={user.passwd} onChange={HandleChange}
                />
            </label>
        </div>
        <div>
            <label className={'FieldLabel'}>
                <input name={'submit'} type={'submit'}
                       value={'Login'} onClick={Validate}
                />
            </label>
        </div>
        <div>
            <label className={'FieldLabel'}>
                <input name={'submit'} type={'submit'}
                       value={'GetData'} onClick={() => console.log(userlist)}
                />
            </label>
        </div>
        <div>
            <label className={'FieldLabel'}>
                <input name={'submit'} type={'submit'}
                       value={'CheckLoggedInUser'} onClick={() => console.log(loggedinuser)}
                />
            </label>
        </div>
    </div>)
}
