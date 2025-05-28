import "./Login.css"
export default function Login(){

    return(
        <>
        <div className="lmain">
            <div className="lmid">
                <h2>Login to your account</h2>
                <p>In order to use the editing and rating capabilities of TMDB, as well as get personal recommendations you will need to login to your account. If you do not have an account, registering for an account is free and simple.<a href="#">Click here</a>  to get started.</p>
                <p>If you signed up but didn't get your verification email, <a href="#">click here</a>  to have it resent</p>

                <form>
                    <label>Username</label><br/>
                    <input type="text" name="username" placeholder="enter username"/>
                    <label>password</label><br/>
                    <input type="password" name="password" placeholder="enter your password"></input>
                </form>
                <button>Log-in</button>
                <a href="#" style={{textdecoration:"none"}}>Reset password</a>
            </div>
        </div>
        </>
    )
}