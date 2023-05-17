// first name
// last name
// email
// age
// password
// confirmpassword
// submit button

import logo from './logo.svg';
import './formreact.css';
import { useEffect, useState } from 'react';
import { CustomButton } from './button';
import { Userinfo } from './userinfo';


export function FormComponent() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState();
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [user, setUser] = useState({});
    
    let users = [];

    useEffect(() => {
         setUser(  {
            "firstName": firstName,
            "lastName" : lastName,
            "email" : email,
            "age" :age,
            "password":password
            
        });
    },[firstName,lastName,email,age,password]);


    function handleFirstName(event) {
        setFirstName(event.target.value);
    }

    function handleLastName(event) {
        setLastName(event.target.value);
    }

    function handleEmail(event) {
        setEmail(event.target.value);
    }

    function handleAge(event) {
        setAge(event.target.value);
    }

    function handlePassword(event) {
        setPassword(event.target.value);
    }

    function handleConfirmPassword(event) {
        setConfirmPassword(event.target.value);
    }

    

    function addUsers(user) {
        
        
        users.push(user);
        console.log("Final Array", users);
    }

    return (
        <div className="formstyle">
            <header className="form-header">

                FirstName: <input type="text" onChange={handleFirstName}  value={firstName} /> <br /> <br />
                LastName:  <input type="text" onChange={handleLastName}  value={lastName} /> <br /> <br />
                Email: <input type="email" onChange={handleEmail}  value={email} />  <br /> <br />
                Age: <input type="number" onChange={handleAge}  value={age} /> <br /> <br />
                Password : <input type="password" onChange={handlePassword}  value={password} /> <br /> <br />
                confirmpassword: <input type="Password" onChange={handleConfirmPassword} value={confirmpassword} /> <br /> <br />
                
                <CustomButton btnname="submit" onclick={addUsers} user={user}/>
                <Userinfo users={[... users]}/>


            </header>
        </div>
    );
}