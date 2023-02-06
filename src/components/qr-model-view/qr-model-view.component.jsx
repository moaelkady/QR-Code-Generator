import { IconButton } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import GButton from "../g-button/g-button.component";

import "./qr-model-view.styles.scss";
const QRModelView = ({ qrcode }) => {
  return (
    <div className="qr-model-view-container">
      <img src={qrcode} alt="QR Code" />
      <a href={qrcode} download="qrcode.png">
        <GButton
          btnName="Download QR Code"
          endIcon={
            <IconButton>
              <DownloadIcon />
            </IconButton>
          }
        />
      </a>
    </div>
  );
};

export default QRModelView;
