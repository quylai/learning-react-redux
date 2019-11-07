import React from "react";

function NavTabs(props) {
  return(
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#bottomTaggedPageA"
          onClick={() => props.handlePageChange("PageAtag")}
          className={props.currentPage === "PageAtag" ? "nav-link active" : "nav-link"}
        >
          PageA
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#bottomTaggedPageB"
          onClick={() => props.handlePageChange("PageBtag")}
          className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          PageB
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#bottomTaggedPageC"
          onClick={() => props.handlePageChange("PageCtag")}
          className={props.currentPage === "Blog" ? "nav-link active" : "nav-link"}
        >
          PageC
        </a>
      </li>
    </ul>
  );
}
export default NavTabs;
