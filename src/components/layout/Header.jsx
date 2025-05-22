 import { FaPlus,} from "react-icons/fa";
 import { IoMdSearch } from "react-icons/io";
 import "./Header.css"
 export default function Header(){

    return(
        <>
        <div className="main">
         <div className="mid">
            <div className="mid1">
                <img src="./src/assets/image/short.svg"/>
                <ul className="ul">
                    <li> <a href="#" className="li">Movies</a></li>
                    <li> <a href="#" className="li">Tv Shows</a></li>
                    <li> <a href="#"className="li">People</a></li>
                    <li> <a href="#" className="li">More</a></li>
                </ul> 
            </div>
             <div className="mid2">   
                <ul className="mid2ul">
                    <span className="li2"><FaPlus /></span>
                    <li><div className="li2">EN</div></li>
                    <li className="li2">Login</li>
                    <li className="li2">Join TMDB</li>
                    <span ><IoMdSearch size={28} color={"rgb(1,180,228)"}/></span>
                </ul>
             </div>
         </div>
         
        </div>

        </>
    )
}