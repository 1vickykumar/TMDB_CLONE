import { FaPlus, } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import "./Header.css"
export default function Header() {

    return (
        <>
            <div className="main">
                <div className="mid">
                    <div className="mid1">
                        <img src="./src/assets/image/short.svg" />
                        <ul className="ul">

                            <li className="dropdown">
                                <a href="#" className="li">Movies</a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Popular</a></li>
                                    <li><a href="#">Now Playing</a></li>
                                    <li><a href="#">Top Rated</a></li>
                                    <li><a href="#">Upcoming</a></li>
                                </ul>

                            </li>

                            <li className="dropdown"> 
                                <a href="#" className="li">Tv Shows</a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Popular</a></li>
                                    <li><a href="#">Air Today</a></li>
                                    <li><a href="#">On Tv</a></li>
                                    <li><a href="#">Top Rated</a></li>
                                </ul>

                            </li>
                            <li className="dropdown"> 
                                 <a href="#" className="li">People</a>
                                 <ul className="dropdown-menu">

                                    <li><a href="#">Popular people</a></li>

                                 </ul>
                            </li>
                            <li className="dropdown"> 
                                <a href="#" className="li">More</a>
                                <ul  className="dropdown-menu">
                                    <li><a href="#">Discussion</a></li>
                                    <li><a href="#">Leaderboard</a></li>
                                    <li><a href="#">Support</a></li>
                                    <li><a href="#">API Documentation</a></li>
                                    <li><a href="#">API for Business</a></li>
                                    
                                </ul>

                           </li>
                        </ul>
                    </div>
                    <div className="mid2">
                        <ul className="mid2ul">
                            <span className="li2"><FaPlus /></span>
                            <li><div className="li2">EN</div></li>
                            <li className="li2">Login</li>
                            <li className="li2">Join TMDB</li>
                            <span ><IoMdSearch size={28} color={"rgb(1,180,228)"} /></span>
                        </ul>
                    </div>
                </div>

            </div>

        </>
    )
}