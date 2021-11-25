import React, { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Glcm from './components/glcm';
import MakeRandomMatrix from './components/makeRandomMatrix';
import GlcmProperties from './components/glcmProperties';
import SetMatrix from './components/setMatrix';

function App() {
  var [rows, setRows] = useState(6);
  var [cols, setCols] = useState(5);
  var [degree, setDegree] = useState(0)
  var [distance, setDistance] = useState(2)

  let colourGlcm = []
  for (var ii = 0; ii < 8; ii++) {
    let innerColourGlcm = []
    for (var jj = 0; jj < 8; jj++)
      innerColourGlcm.push(`#FFFFFF`)
    colourGlcm.push(innerColourGlcm);
  }
  var [GlcmColour, setGlcmColour] = useState(colourGlcm);


  var [randomMatrix, setRandomMatrix] = useState(MakeRandomMatrix(6, 5));

  var setMatrix = () => {
    setDegree(0);
    setDistance(2);
    setRandomMatrix(MakeRandomMatrix(rows, cols));
  };

  const customRows = (event) => {
    var num = parseInt(event.target.value);
    setRows(isNaN(num) ? 3 : num < 3 ? 3 : num);
  }
  const customCols = (event) => {
    var num = parseInt(event.target.value);
    setCols(isNaN(num) ? 3 : num < 3 ? 3 : num);
  }

  var initialInputColour = []
  for (ii = 0; ii < rows; ii++) {
    let innerInputColour = []
    for (jj = 0; jj < cols; jj++) {
      innerInputColour.push("#FFFFFF");
    }
    initialInputColour.push(innerInputColour);
  }
  var [inputColour, setInputColour] = useState(initialInputColour)


  return (
    <div className="App">
      <div>

      <h1 className='row justify-content-md-center p-5'>GLCM</h1>



        <SetMatrix cols={cols} rows={rows} customCols={customCols} customRows={customRows} setMatrix={setMatrix} />
        <GlcmProperties degree={degree} setDegree={setDegree} distance={distance} setDistance={setDistance} rows={rows} cols={cols} />
        <div className='container'>
          <div className='row'>
            <div className="col-12">
              <div className="form-outline">
                <Glcm randomMatrix={randomMatrix} degree={degree} distance={distance} GlcmColour={GlcmColour} setGlcmColour={setGlcmColour} inputColour={inputColour} setInputColour={setInputColour} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
