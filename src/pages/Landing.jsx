import "./Landing.css"
import { IoMdSearch } from "react-icons/io";
function Landing() {
    return (
        <>
            <div className="searchmain">
                <div className="searchmid">
                    <div className="d1"><IoMdSearch size={"20px"} /></div>
                    <div className="d2">

                        <input type="serach" placeholder="Search for a movie , tv show , person..."></input>

                    </div>

                </div>
            </div>

            <div className="searchmain2">
                <div className="searchmid2">
                    <h1>Welcome.</h1>
                    <h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
                    
                    <form>
               <input type="search" placeholder="Search for a movie , tv show , person......" />
                    <button>Search</button>
                    </form>
                    
                </div>
            </div>
        </>
    )
}
export default Landing;