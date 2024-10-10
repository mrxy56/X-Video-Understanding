import { SearchBar } from "./index";
import { faArrowUp, faQuestion, faDownload, faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import './Header.css';
import brand from "../assets/brand.png";

export const Header = () => {
  const search_value1 = "Filter by benchmarks, modalities, scenarios, data splits,...";
  const search_value2 = "Paste video uids or semantic search for anything";
  return (
    <>
    <header className="sticky-header">
      <div className="row">
          <div className="col-2">
              <Link to="/">
                <img src={brand} alt="openinterx"/>
              </Link>
          </div>
          <div className="col-4">
              <SearchBar prompt={search_value1} icon_type={faFilter}/>
          </div>
          <div className="col-4">
              <SearchBar prompt={search_value2} icon_type={faSearch}/>
          </div>
          <div className="col-2">
              <button className="header-button" type="submit"><FontAwesomeIcon className="funcicon" icon={faArrowUp}/></button>
              <button className="header-button" type="submit"><FontAwesomeIcon className="funcicon" icon={faQuestion}/></button>
              <button className="header-button" type="submit"><FontAwesomeIcon className="funcicon" icon={faDownload}/></button>
          </div>
      </div>
      <div className="row borderbottom">
          <span className="header-span">Browsing <span className="video-span">9 / 9 videos.</span> Total Duration: <span className="video-span">4.97 hours.</span></span>
      </div>
    </header>
    </>
  )
}
