import "./Signup.css"
import { TiTick } from "react-icons/ti";

import { BsCheckLg } from "react-icons/bs";
export default function Signup() {

    return (
        <>
            <div className="smain">
                <div className="smid">
                    <div className="smid1">
                        <div className="sideupper">
                            <h3>Benefits of being a member</h3>
                        </div>
                        <ul className="sidesection">
                            <li><span><TiTick size={"20px"} /></span>Find something to watch on your subscribed streaming services</li>
                            <li><span ><TiTick size={"20px"} /></span>Log the movies and TV shows you have watched</li>
                            <li><span ><TiTick size={"20px"} /></span>Keep track of your favourite movies and TV shows and get recommendations from them</li>
                            <li><span ><TiTick size={"20px"} /></span>Build and maintain a personal watchlist</li>
                            <li><span><TiTick size={"20px"} /></span>Build custom mixed lists (movies and TV)</li>
                            <li><span><TiTick size={"20px"} /></span>Take part in movie and TV discussions</li>
                            <li><span ><TiTick size={"20px"} /></span>Contribute to, and improve the information in our database</li>
                            

                    
                        </ul>
                    </div>



                    <div className="smid2">
                        <h2>Sign up for an account</h2>
                        <p >Signing up for an account is free and easy. Fill out the form below to get started. JavaScript is required to to continue.</p>
                          <form>
                            <p>Username</p>
                            <input type="text" name="ussename" ></input>

                            <p>Password (4 characters minimum)</p>
                            <input type="text" name="ussename" ></input>

                             <p> confirm Password </p>
                            <input type="text" name="ussename" ></input>
                            <p>Email</p>
                            <input type="text" name="ussename" ></input>

                          </form>
                          <p>By clicking the "Sign up" button below, I certify that I have read and agree to the TMDB terms of use and privacy policy.</p>
                          
                          <button > Sign Up </button>

                          <a href="#" style={{textdecoration:"none"}}>cancel</a>
                          
                         </div>

                </div>

            </div>

        </>
    )
}