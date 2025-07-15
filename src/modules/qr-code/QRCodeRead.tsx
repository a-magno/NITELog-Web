import { useState } from "react";
import QRCode from "react-qr-code";

const QRCodeRead = () => {
  const [token] = useState<string>("reuniao");

  return (
    <div className="flex-col">
      <QRCode value={token?.toString() || "link-para-reuniao"} id="qr-code" />
      <span id="instructions">
        Escaneie o QR Code acima para marcar presença{" "}
      </span>
    </div>
  );
};

export default QRCodeRead;
