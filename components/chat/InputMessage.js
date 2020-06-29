import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function InputMessage(props) {
  return (
    <div className="message-input">
      <div className="wrap">
        <input type="text" placeholder="Escribe un mensaje..." />
        <button className="submit">
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </div>
  );
}

export default InputMessage;
