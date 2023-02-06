import QRCode from "qrcode";
import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";

import Navbar from "../../components/navbar/navbar.component";
import Input from "../../components/input/input.component";
import GButton from "../../components/g-button/g-button.component";
import QRModelView from "../../components/qr-model-view/qr-model-view.component";
import Footer from "../../components/footer/footer.component";
import BackgroundWaves from "../../components/background-waves/background-waves.component";

import "./home.styles.scss";
const Home = () => {
  const [url, setUrl] = useState("");
  const [btnStatus, setBtnStatus] = useState(true);
  const [qrcode, setQrcode] = useState("");

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const GenerateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 800,
        margin: 1,
      },
      (err, url) => {
        if (err) return console.error(err);
        console.log(url);
        setQrcode(url);
      }
    );
  };

  useEffect(() => {
    GenerateQRCode();
    const handleBtnStatus = () => {
      if (url.length < 1) {
        return true;
      }
      return false;
    };
    setBtnStatus(handleBtnStatus());
  }, [url]);

  return (
    <div className="home-view-container">
      <Navbar title="Welcome to QR Generator" />
      <div className="options-container">
        <Input
          text="Paste your link in here.."
          value={url}
          onChange={handleChange}
        />
        <GButton
          btnName="Generate QR Code"
          btnStatus={btnStatus}
          endIcon={
            <IconButton>
              <SettingsSuggestIcon />
            </IconButton>
          }
          onClick={GenerateQRCode}
        />
      </div>
      {qrcode && <QRModelView qrcode={qrcode} />}
      <BackgroundWaves />
      <Footer />
    </div>
  );
};

export default Home;
