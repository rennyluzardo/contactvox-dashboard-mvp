import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { Menu, Dropdown, Button } from "antd";
import { PaperClipOutlined, StarFilled, StarTwoTone } from "@ant-design/icons";

function ChatHeader(props) {
  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="contact-profile">
      <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
      <p>Luis Machado</p>
      <div className="social-media">
        <Dropdown overlay={menu}>
          <Button className="attach-btn">
            <FontAwesomeIcon icon={faPaperclip} />
          </Button>
        </Dropdown>
        <Dropdown overlay={menu}>
          <Button className="menu-btn">
            <FontAwesomeIcon icon={faEllipsisV} />
          </Button>
        </Dropdown>
      </div>
    </div>
  );
}

export default ChatHeader;
