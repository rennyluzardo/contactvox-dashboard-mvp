import { Provider } from "react-redux";
import App from "next/app";
import { createWrapper } from "next-redux-wrapper";
import { initStore } from "../config/store";
import CONSTANTS from "../config/constants";

import { fetchActiveChats } from "../actions/chat";

export const wrapper = createWrapper(initStore, { debug: true });

import '../scss/styles.scss'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}

export default wrapper.withRedux(MyApp);
