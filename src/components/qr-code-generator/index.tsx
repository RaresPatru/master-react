import { useState } from "react";
import QRCode from "react-qr-code";
import "./styles.css";

export default function QrCodeGenerator({
  type,
  name,
}: {
  type: any;
  name: any;
}) {
  const [qrCode, setQrCode] = useState<any>("");
  const [input, setInput] = useState<any>("");

  function handleGenerateQrCode(): void {
    setQrCode(input);
    setInput("");
  }

  function handleKeyDownQrCode(event: any): void {
    if (event.key === "Enter") {
      event.preventDefault();
      handleGenerateQrCode();
    }
  }

  return (
    <div className="qr-code-container">
      <h1>QR Code Generator</h1>
      <div className="qr-code-input-container">
        <input
          className="qr-input-field"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDownQrCode}
          type={type}
          name={name}
          value={input}
          placeholder="Enter your value here"
        />
        <button
          className="qr-button"
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generate
        </button>
      </div>
      <div className="generated-qr">
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
}
