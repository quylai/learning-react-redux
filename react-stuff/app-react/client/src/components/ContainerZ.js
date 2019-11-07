import React, { Component } from "react";
import NavTabs from "./NavTabs";
import PageAcomp from "./pages/PageAcomp";
import PageBcomp from "./pages/PageBcomp";
import PageCcomp from "./pages/PageCcomp";

class ContainerZ extends Component {
  state = {
    currentPageZ: "PageAtag"
  };

  handlePageChange = page => {
    this.setState({ currentPageZ: page });
  };

  renderPageZ = (currentPageZ) => {
    switch(this.state.currentPageZ) {
      case "PageAtag":
        return <PageAcomp />;
      case "PageBtag":
        return <PageBcomp />;
      default:
        return <PageCcomp />;
    }
  }

  render() {
    return(
      <div>
        <NavTabs
          currentPage={this.state.currentPageZ}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPageZ()}
      </div>
    );
  }
}
export default ContainerZ;
