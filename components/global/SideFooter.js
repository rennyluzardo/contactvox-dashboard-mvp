import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

function SideFooter() {
  return (
    <div id="bottom-bar">
      <button id="addcontact">
        <FontAwesomeIcon icon={faUserPlus} /> <span>Nueva conversación</span>
      </button>
    </div>
  );
}

export default SideFooter;
