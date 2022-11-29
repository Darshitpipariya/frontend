import { useState } from 'react';

function Login({startLogin}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // onSubmit event handler of this form
    const handleLogin = (event) => {
        // Preventing default submission of the form to the action attribute URL
        event.preventDefault()
        const credentials = {
            email, password
        }
        // Calling startLogin with the provided credentials that will make a call to the backend
        startLogin(credentials)

        // Reset the form state, i.e. the text that's on the username and password text boxes to empty strings
        setEmail('')
        setPassword('')
    }
    return (

        <div className='mx-auto p-3 my-5 d-flex flex-column w-50'>
            <h1>Login</h1>
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="form-control" />
            <br />
            <input type="password" placeholder="Password" onChange={(p) => setPassword(p.target.value)} className="form-control" />
            <br />
            <button onClick={handleLogin} className="btn btn-primary">Login</button>
        </div>
    );
}



export default Login