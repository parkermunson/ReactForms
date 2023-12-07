import { useState } from "react"



const SignUpForm = ({setToken}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    async function handleSubmit(event) {
        event.preventDefault()
        // setToken(token)
        // console.log("Hello")

        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });

            const result = await response.json();
            console.log(result);
            setToken(result.token)
            } catch (error) {
                setError(error.message)
            }
    }

 return (
    <div>
    <h2>Sign Up</h2>  
    {error && <p>{error}</p>}
    <form onSubmit={handleSubmit}>
        <label>
            Username: <input value={username} onChange={(event) => setUsername(event.target.value)} />
        </label>
        <br />
        <label>
            Password: <input value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <br />
        <button>
            Submit
        </button>
    </form> 
    </div>
 )
     
 
}

export default SignUpForm