import { useEffect, useState } from "react";
import "./landing.css";
import { IoMdSearch } from "react-icons/io";
import { GetTrendingOnDay, GetTrendingWeek } from "../api/tmdbFunction";
import MovieCard from "../components/MovieCard";
import { TbBrandInstagram } from "react-icons/tb";
import ToggleButton from "../components/ToggleButton";
import TrailerCard from "../components/TrailerCard";
function Landing() {
  const [Trending, setTrending] = useState({ results: [] });
  const getTrending = async (byDay) => {
    if (byDay == "Today") {
      const data = await GetTrendingOnDay();
      setTrending(data);
    } else {
      const data = await GetTrendingWeek();
      setTrending(data);
    }
    // console.log(data);
  };
  useEffect(() => {
    console.log("trnading", Trending);
    getTrending("Today");
  }, []);
  const Traillers = [
    {
      pic: "https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/3a3Ch56Y7n8ouiAXPdFDmVLnvWz.jpg",
      Name: "Dark Angel",
      about: "Classic Trailer",
    },
    {
      pic: "https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
      Name: "Stranger Things",
      about: " Stranger Things 5 Date Announcement",
    },
    {
      pic: "https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/ScaVfT5IkwVC3Edhmxqyl0GbK0.jpg",
      Name: "Gen V",
      about: "Season 2 Teaser Trailer",
    },
    {
      pic: "https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/2meX1nMdScFOoV4370rqHWKmXhY.jpg",
      Name: "Squid Game",
      about: "Season 3 Official Trailer [Subtitled]",
    },
  
  ];
  return (
    <>
      <div className="searchmain">
        <div className="searchmid">
          <div className="d1">
            <IoMdSearch size={"20px"} />
          </div>
          <div className="d2">
            <input
              type="serach"
              placeholder="Search for a movie , tv show , person..."
            ></input>
          </div>
        </div>
      </div>

      <div className="searchmain2">
        <div className="searchmid2">
          <h1>Welcome.</h1>
          <h2>
            Millions of movies, TV shows and people to discover. Explore now.
          </h2>

          <form>
            <input
              type="search"
              placeholder="Search for a movie , tv show , person......"
            />
            <button>Search</button>
          </form>
        </div>
      </div>
      {/* trending section */}
      <div className="container">
        <div className="trending_section">
          <div className="toggle_container col-3">
            <ToggleButton
              name="Trending"
              data={["Today", "This Week"]}
              getData={getTrending}
            />
          </div>
          <div className="trending_background">
            {Trending?.results?.length == 0
              ? console.log("nodata")
              : Trending?.results.map((row, i) => {
                  return (
                    <MovieCard className="moveCard" key={row.id} data={row} />
                  );
                })}
          </div>
        </div>
      </div>
      {/* Traillers to be inserted here */}
      <div className="container">
        <div className="trending_section">
          <div className="toggle_container col-3">
            <ToggleButton
              name="Latest Trailers"
              data={[
                "Popular",
                "Streaming",
                "On TV",
                "For Rent",
                "In Theatres",
              ]}
            />
          </div>
          <div className="trailer_background">
            {/* {Trending?.results?.length == 0 ? console.log('nodata') : (Trending?.results.map((row, i) => { return <MovieCard className='moveCard' key={row.id} data={row} /> }))} */}
            {Traillers.map((row, i) => {
              return <TrailerCard data={row} key={i} />;
            })}
          </div>
        </div>
      </div>
      {/* whats popular section */}
      <div className="container">
        <div className="trending_section">
          <div className="toggle_container col-3">
            <ToggleButton
              name={`What's Popular`}
              data={["Streaming", "On TV", "For Rent", "In Theatres"]}
            />
          </div>
          <div className="trending_background">
            {Trending?.results?.length == 0
              ? console.log("nodata")
              : Trending?.results.map((row, i) => {
                  return (
                    <MovieCard className="moveCard" key={row.id} data={row} />
                  );
                })}
          </div>
        </div>
      </div>
      {/* free to watch  */}
      <div className="container">
        <div className="trending_section">
          <div className="toggle_container col-3">
            <ToggleButton name="Free To Watch" data={["Movies", "Tv"]} />
          </div>
          <div className="trending_background">
            {Trending?.results?.length == 0
              ? console.log("nodata")
              : Trending?.results.map((row, i) => {
                  return (
                    <MovieCard className="moveCard" key={row.id} data={row} />
                  );
                })}
          </div>
        </div>
      </div>
      {/* leaderboard */}
    </>
  );
}
export default Landing;
