import React, {Component, createContext} from "react";
const AppContext = createContext();

class AppConfigProvider extends Component {
  render() {
    return (
      <AppContext.Provider
        value={this.props.value}
      >
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export { AppConfigProvider };

export default AppContext;