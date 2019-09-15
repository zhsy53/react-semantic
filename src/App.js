import React, { Component } from "react";

import MyTable from "./views/MyTable";
import MyLoader from "./components/MyLoader";

class App extends Component {
  render() {
    return (
      <div>
        <MyTable titles={["服务器", "成功数", "失败数"]} metadata={[]} />
        <MyLoader />
      </div>
    );
  }
}

export default App;
