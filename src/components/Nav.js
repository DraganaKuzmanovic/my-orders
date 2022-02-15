import react from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBag,
  faChartBar,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link className="linkic" to="/">
            <FontAwesomeIcon icon={faShoppingBag} /> Sales
          </Link>
        </li>
        <li>
          <Link className="linkic" to="/charts">
            <FontAwesomeIcon icon={faChartBar} /> Charts
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
