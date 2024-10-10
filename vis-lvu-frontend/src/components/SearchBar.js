import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SearchBar.css";

export const SearchBar = ({prompt, icon_type}) => {
  return (
    <div className="search">
        <form>
            <label htmlFor="query"></label>
            <input type="text" name="query" id="query" placeholder={prompt} autoComplete="off" ></input>
            <button type="submit"><FontAwesomeIcon icon={icon_type}/></button>
        </form>
    </div>
  )
}
