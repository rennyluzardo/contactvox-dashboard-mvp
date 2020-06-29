import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SideSearchbar() {
  return (
    <div id="search">
      <label htmlFor="">
        <FontAwesomeIcon icon={faSearch} />
      </label>
      <input type="text" placeholder="Buscar conversación..." />
    </div>
  );
}

export default SideSearchbar;
