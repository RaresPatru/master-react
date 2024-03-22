/* eslint-disable no-template-curly-in-string */
import { useState } from "react";

export default function RandomColor(): JSX.Element {
  const [typeOfColor, setTypeOfColor] = useState<boolean>(true);
  const [color, setColor] = useState<string>("#000000");

  function randomColorUtility(length: number): number {
    return Math.floor(Math.random() * length);
  }
  function handleCreateRandomHexColor(): void {
    let hexColor: string = "#";
    for (let i: number = 0; i < 6; i++) {
      hexColor += randomColorUtility(16).toString(16);
    }
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor(): void {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  function hexToRgb(hex: string): string {
    hex = hex.replace(/^#/, "");
    if (!/^[0-9A-Fa-f]{6}$/i.test(hex)) {
      return color;
    }
    const r: number = parseInt(hex.substring(0, 2), 16);
    const g: number = parseInt(hex.substring(2, 4), 16);
    const b: number = parseInt(hex.substring(4, 6), 16);
    return `rgb(${r}, ${g}, ${b})`;
  }

  function rgbToHex(rgb: string): string {
    rgb = rgb.replace(/^rgb\(|\)$/g, "");
    const rgbArray: number[] = rgb
      .split(",")
      .map((value: string) => parseInt(value.trim()));
    if (rgbArray.some((value) => isNaN(value) || value < 0 || value > 255)) {
      return color;
    }
    const hexR: string = rgbArray[0].toString(16).padStart(2, "0");
    const hexG: string = rgbArray[1].toString(16).padStart(2, "0");
    const hexB: string = rgbArray[2].toString(16).padStart(2, "0");
    return `#${hexR}${hexG}${hexB}`;
  }

  function checkColorBrightness(color: string): boolean {
    const rgb = hexToRgb(color).replace(/^rgb\(|\)$/g, "");
    const rgbArray = rgb
      .split(",")
      .map((value: string) => parseInt(value.trim()));
    const brightness =
      (rgbArray[0] * 299 + rgbArray[1] * 587 + rgbArray[2] * 114) / 1000;
    console.log(brightness);

    return brightness < 128;
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button
        onClick={() => {
          setColor(rgbToHex(color));
          setTypeOfColor(true);
        }}
      >
        Create HEX Color
      </button>
      <button
        onClick={() => {
          setColor(hexToRgb(color));
          setTypeOfColor(false);
        }}
      >
        Create RGB Color
      </button>
      <button
        onClick={
          typeOfColor === true
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "60px",
          color: checkColorBrightness(color) ? "#fff" : "#000",
          marginTop: "50px",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h3>{typeOfColor === false ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
