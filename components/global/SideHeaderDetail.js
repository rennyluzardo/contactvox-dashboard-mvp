import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function SideBarDetail() {
  return [
    <div className="bg-header">
      <div className="back-btn" id="back">
        <span className="oi oi-arrow-thick-left"></span>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
    </div>,
    <div className="bg-content">FORMS, SETTINGS, ETC..</div>,
  ];
}

export default SideBarDetail;
