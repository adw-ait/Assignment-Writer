import React, { useContext } from "react";
import { AppContext } from "./App";
function AxisManage() {
  const { settings, handleAxisChange } = useContext(AppContext);
  return (
    <div className="flex-container-Settings-Items">
      <div className="flex-container-axis-setting">
        <div className="x-axis">
          <h2>X - Axis</h2>
          <input
            type="range"
            max="50"
            value={settings.axis.x}
            name="x-axis"
            onChange={handleAxisChange}
          />
        </div>
        <div className="y-axis">
          <h2>Y - Axis</h2>
          <input
            type="range"
            max="50"
            value={settings.axis.y}
            name="y-axis"
            onChange={handleAxisChange}
          />
        </div>
      </div>
    </div>
  );
}

export default AxisManage;
