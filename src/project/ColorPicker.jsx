import React, { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("#ff004d");
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="display" style={{ background: color }}>
          color
        </div>
        <label>Color Pick</label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />

        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default ColorPicker;
