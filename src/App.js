import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import HttpsRedirect from "react-https-redirect";

import Header from "./components/containers/Header";
import Body from "./components/containers/Body";
import Footer from "./components/containers/Footer";

class App extends Component {
  render() {
    return (
      <HttpsRedirect>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Body />
            <Footer />
          </div>
        </BrowserRouter>
      </HttpsRedirect>
    );
  }
}

export default App;
