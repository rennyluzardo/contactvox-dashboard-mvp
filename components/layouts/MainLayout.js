import { Component } from "react";

// Components
import SideBar from "../global/SideBar";
import Content from "../global/Content";

class MainLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const propsContent = {
      display: this.props.displayContent,
    };

    return (
      <div id={this.props.frameId}>
        <SideBar>{this.props.sideBar}</SideBar>
        <Content {...propsContent}>{this.props.children}</Content>
      </div>
    );
  }
}

export default MainLayout;
