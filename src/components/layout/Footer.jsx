import "./Footer.css"
export default function Footer (){

    return(
        <>
        <div className="fmain">
          <div className="fmid">
            <div className="fmid1">
                <img src="./src/assets/image/blue.svg" alt="footer logo" /><br/>
            <button >JOIN THE COMMUNITY</button>
            </div>


            <div className="fmid2">
                <div className="div1">
                    <h2 className="h3">The Basics</h2>
                    <ul >
                        <li className="fli"> <a href="#" className="fli">About TMDB</a></li>
                        <li className="fli" ><a href="#"className="fli">Contact Us</a></li>
                        <li className="fli" ><a href="#" className="fli">Support Forum</a></li>
                        <li className="fli"><a href="#" className="fli">API Documenation</a></li>
                        <li className="fli"><a href="#"className="fli">System Status</a></li>
                        
                    </ul>
                </div>
                <div className="div2">
                    <h2 className="h3">Get Involved</h2>
                    <ul>
                        <li className="fli"><a href="#" className="fli">Contribution Bible</a></li>
                        <li className="fli"><a href="#" className="fli">Add New Movie</a></li>
                        <li className="fli"><a href="#"className="fli"> Add New Tvshow</a></li>


                    </ul>
                </div>
                <div className="div3">
                    <h2 className="h3">Community</h2>
                    <ul>
                        <li className="fli"><a href="#"className="fli">Guidelines</a></li>
                        <li className="fli"><a href="#"className="fli">Discussions</a></li>
                        <li className="fli"><a href="#"className="fli">Leaderboard</a></li>
                    </ul>
                </div>
                <div className="div4">
                    <h2 className="h3">Legal</h2>
                    <ul>
                        <li className="fli"><a href="#"className="fli">Term of Use</a></li>
                        <li className="fli"><a href="#" className="fli">API Term of Use</a></li>
                        <li className="fli"><a href="#" className="fli">Privacy Policy</a></li>
                        <li className="fli"><a href="#"className="fli">DMCA Policy</a></li>

                    </ul>
                </div>
            </div>
            
          </div>
        </div>
        <div className="fmain2"></div>
        </>
    )

}