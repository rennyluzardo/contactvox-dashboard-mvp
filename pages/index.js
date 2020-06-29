import { Component } from "react";
// import { connect } from "react-redux";

// Components
import MainLayout from "../components/layouts/MainLayout";
import SideHeader from "../components/global/SideHeader";
import SideSearchbar from "../components/global/SideSearchbar";
import ChatList from "../components/global/ChatList";
import SideFooter from "../components/global/SideFooter";
import SideHeaderDetail from "../components/global/SideHeaderDetail";
import ChatHeader from "../components/chat/ChatHeader";
import ChatHistory from "../components/chat/ChatHistory";
import InputMessage from "../components/chat/InputMessage";

const activeChat = [<ChatHeader />, <ChatHistory />, <InputMessage />];

const welcome = (
  <div>
    <h1>Bienvenido</h1>
    <br />
    <h6>Mostrar charts aqui..</h6>
  </div>
);

const homeSidebar = [
  <SideHeader></SideHeader>,
  <SideSearchbar></SideSearchbar>,
  <ChatList></ChatList>,
  <SideFooter></SideFooter>,
];

const detailSidebar = <SideHeaderDetail></SideHeaderDetail>;

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    $("body .messages").animate(
      {
        scrollTop: $(document).height(),
      },
      "fast"
    );

    $("#profile-img").click(function () {
      $("#status-options").toggleClass("active");
    });

    $("body .expand-button").click(function () {
      $("body #profile").toggleClass("expanded");
      $("body #contacts").toggleClass("expanded");
    });

    $("#status-options ul li").click(function () {
      $("#profile-img").removeClass();
      $("#status-online").removeClass("active");
      $("#status-away").removeClass("active");
      $("#status-busy").removeClass("active");
      $("#status-offline").removeClass("active");
      $(this).addClass("active");

      if ($("#status-online").hasClass("active")) {
        $("#profile-img").addClass("online");
      } else if ($("#status-away").hasClass("active")) {
        $("#profile-img").addClass("away");
      } else if ($("#status-busy").hasClass("active")) {
        $("#profile-img").addClass("busy");
      } else if ($("#status-offline").hasClass("active")) {
        $("#profile-img").addClass("offline");
      } else {
        $("#profile-img").removeClass();
      }

      $("#status-options").removeClass("active");
    });

    $(".contact").click(function (e) {
      console.log("chat #", $(this).data("id"));

      $("#frame .content").css("display", "block");
    });

    $("body #configurations").click(function () {
      $("body #bg-frame #sidepanel").css("transform", "translateX(0%)");
    });

    $("#back").click(function () {
      $("#bg-frame #sidepanel").removeAttr("style");
    });
  }

  componentWillUnmount() {}

  render() {
    const propsPrimaryLayout = {
      frameId: "frame",
      sideBar: homeSidebar,
      displayContent: "none",
    };

    const propsSecondaryLayout = {
      frameId: "bg-frame",
      sideBar: detailSidebar,
      displayContent: "block",
    };

    return [
      <MainLayout {...propsPrimaryLayout}>{activeChat}</MainLayout>,
      <MainLayout {...propsSecondaryLayout}>{welcome}</MainLayout>,
    ];
  }
}

export default Index;
