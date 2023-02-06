import { Avatar } from "@mui/material";
import qrLogo from "../../assets/qr.svg";

import "./navbar.styles.scss";
const Navbar = ({title}) => {
  return (
    <div className="navbar-container">
      <Avatar alt="qr logo" src={qrLogo} variant="square" />
      <h1>{title}</h1>
    </div>
  );
};
export default Navbar;
