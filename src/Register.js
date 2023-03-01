import { useState } from "react";
import axios from "axios";

export default function Register()
{
    const [user, setuser] = useState({uname: "", passwd: "", firstName: "", lastName: "", mob: "", dob: ""});

    const [role, setrole] = useState(0);


    const HandleChange = (args) => {
        const copyuser = {...user};
        copyuser[args.target.name] = args.target.value;
        setuser(copyuser);
        console.log(user);
    };

    const submitUser = () => {
        const url = "http://localhost:8080/user/add/role/" + role;
        console.log(url);
        axios.post(url, user).then(() => {

        })
    };

    const onHandleChange = (e) => {
        setrole(x => e.target.value);
        console.log(role);
        // e.target.value
        //console.log(e.target.value);
    }

    return(
        <div className={'FormContainer'}>
            <center>
                <h2>Register</h2>
            </center>
        <div className={'FieldContainer'}>
            <label className={'FieldLabel'}>
                Username:
                <br/>
                <input name={'uname'} type={'text'}  placeholder={"Enter your username"}
                       value={user.uname} onChange={HandleChange}
                />
            </label>
            <div>
                <label className={'FieldLabel'}>
                    Password:
                    <br/>
                    <input name={'passwd'} type={'password'}  placeholder={"Enter your password"}
                           value={user.passwd} onChange={HandleChange}
                    />
                </label>
            </div>
            <div>
                <label className={'FieldLabel'}>
                    First Name:
                    <br/>
                    <input name={'firstName'} type={'text'}  placeholder={"Enter your First Name"}
                           value={user.firstName} onChange={HandleChange}
                    />
                </label>
            </div>
            <div>
                <label className={'FieldLabel'}>
                    Last Name:
                    <br/>
                    <input name={'lastName'} type={'text'}  placeholder={"Enter your Last Name"}
                           value={user.lastName} onChange={HandleChange}
                    />
                </label>
            </div>
            <div>
                <label className={'FieldLabel'}>
                    Mobile Number:
                    <br/>
                    <input name={'mob'} type={'text'}  placeholder={"1234567890"}
                           value={user.mob} onChange={HandleChange}
                    />
                </label>
            </div>
            <div>
                <label className={'FieldLabel'}>
                    Date of Birth:
                    <br/>
                    <input name={'dob'} type={'date'}  placeholder={"yyyy-mm-dd"}
                           min={"1900-01-01"} max={"2050-12-31"}
                           value={user.dob} onChange={HandleChange}
                    />
                </label>
            </div>
            <div>
                <label className={'FieldLabel'}>
                    Role:
                    <br/>
                    <select onChange={onHandleChange}>
                        <option value={1}>Admin</option>
                        <option value={2}>Customer</option>
                        <option value={3}>Vendor</option>
                        <option value={4}>Delivery Personnel</option>
                    </select>
                </label>
            </div>
            <div>
                <label className={'FieldLabel'}>
                    <input name={'submit'} type={'submit'}
                           value={'Register User'} onClick={submitUser}
                    />
                </label>
            </div>
        </div>
        </div>
    )
}

