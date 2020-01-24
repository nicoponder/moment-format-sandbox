import React, { useState } from "react";
import moment from "moment";
import useTime from "./useTime";
import "./styles.css";

export default function App() {
  const time = useTime();
  const [formatString, setFormatString] = useState("MMM. DD YYYY, h:mm:ss A");

  return (
    <div className="App">
      <h2>Moment format tester</h2>
      <div class="tester">
        <div class="row">
          <div>
            <h4>Format string:</h4>
            <input
              onChange={evt => setFormatString(evt.target.value)}
              value={formatString}
            />
          </div>
          <div>
            <h4>Formatted time:</h4>
            {moment(time).format(formatString)}
          </div>
        </div>
      </div>
      <div class="docs">
        <iframe
          title="moment-docs"
          src="https://momentjs.com/docs/#/displaying/format/"
        />
      </div>
    </div>
  );
}
