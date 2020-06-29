import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faChevronDown,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

import { Menu, Button } from "antd";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

function SideHeader() {
  return (
    <div id="profile">
      <div className="wrap">
        <img
          id="profile-img"
          src="http://emilcarlsson.se/assets/mikeross.png"
          className="online"
          alt=""
        />
        <p>Renny Luzardo</p>
        <FontAwesomeIcon className="expand-button" icon={faChevronDown} />
        <div id="status-options">
          <ul>
            <li id="status-online" className="active">
              <span className="status-circle"></span>
              <p>Online</p>
            </li>
            <li id="status-away">
              <span className="status-circle"></span>
              <p>Away</p>
            </li>
            <li id="status-busy">
              <span className="status-circle"></span>
              <p>Busy</p>
            </li>
            <li id="status-offline">
              <span className="status-circle"></span>
              <p>Offline</p>
            </li>
          </ul>
        </div>
        <div id="expanded">
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="dark"
            className="top-menu"
          >
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Bandeja de entrada
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Conversaciones activas
            </Menu.Item>
            <Menu.Item key="3" icon={<ContainerOutlined />} id="configurations">
              Historial
            </Menu.Item>
            <Menu.Item key="4" icon={<ContainerOutlined />} id="configurations">
              Llamadas
            </Menu.Item>
            <Menu.Item key="5" icon={<ContainerOutlined />} id="configurations">
              Videollamadas
            </Menu.Item>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default SideHeader;
