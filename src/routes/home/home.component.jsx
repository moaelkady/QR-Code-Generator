import React, { Suspense, useEffect, useState } from "react";
import QRCode from "qrcode";
import { IconButton } from "@mui/material";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import Loading from "../../components/loading/loading.component";

import "./home.styles.scss";

const Navbar = React.lazy(() =>
  import("../../components/navbar/navbar.component")
);
const Input = React.lazy(() =>
  import("../../components/input/input.component")
);
const GButton = React.lazy(() =>
  import("../../components/g-button/g-button.component")
);
const QRModelView = React.lazy(() =>
  import("../../components/qr-model-view/qr-model-view.component")
);
const Footer = React.lazy(() =>
  import("../../components/footer/footer.component")
);
const BackgroundWaves = React.lazy(() =>
  import("../../components/background-waves/background-waves.component")
);

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
      <Suspense fallback={<Loading />}>
        <Navbar title="Welcome to QR Generator" />
      </Suspense>
      <div className="options-container">
        <Suspense fallback={<Loading />}>
          <Input
            text="Paste your link in here.."
            value={url}
            onChange={handleChange}
          />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <GButton
            btnName="Generate QR Code"
            btnStatus={btnStatus}
            endIcon={
              <IconButton className="text-display-none">
                <SettingsSuggestIcon /> icon
              </IconButton>
            }
            onClick={GenerateQRCode}
          />
        </Suspense>
      </div>
      {qrcode && (
        <Suspense fallback={<Loading />}>
          <QRModelView qrcode={qrcode} />
        </Suspense>
      )}
      <Suspense fallback={<Loading />}>
        <BackgroundWaves />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;
