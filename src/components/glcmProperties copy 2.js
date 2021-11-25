import { Basic } from 'react-dial-knob';
import React, { useState } from 'react';

var GlcmProperties = (params) => {

  const degreeValHandleChange = (e) => {
    params.setDegree(parseInt(e.target.value))
  }

  const distanceValHandleChange = (e) => {
    params.setDistance(parseInt(e.target.value))
  }

  return (
    <div className="submit-form">
      <div className="container">
        <div className="row justify-content-md-center">

          <div className="col-md-12">
            <div className="mb-12">
              <br /><br />
              <h2>GLCM Properties</h2>

              <br /><br />
            </div>
          </div>
          <div className='col-6' align='center'>

            <div className="row justify-content-md-center">
              <form>
                {/* <input type="radio" value="0" id="degree-0"
                  onChange={degreeValHandleChange} name="degree" />
                <label >0</label>

                <input type="radio" value="45" id="degree-45"
                  onChange={degreeValHandleChange} name="degree" />
                <label>45</label>

                <input type="radio" value="90" id="degree-90"
                  onChange={degreeValHandleChange} name="degree" />
                <label>90</label>

                <input type="radio" value="135" id="degree-135"
                  onChange={degreeValHandleChange} name="degree" />
                <label>135</label> */}

                {/* <input type="radio" className="btn-check" value="0"
                  onChange={degreeValHandleChange} name="success-outlined" id="success-outlined" autocomplete="off" checked />
                <label className="btn btn-outline-success">Degree = 0</label>

                <input type="radio" className="btn-check" value="45"
                  onChange={degreeValHandleChange} name="success-outlined" id="success-outlined" autocomplete="off" />
                <label className="btn btn-outline-success">Degree = 45</label>

                <input type="radio" className="btn-check" value="90" 
                onChange={degreeValHandleChange} name="success-outlined" id="success-outlined" autocomplete="off" />
                <label className="btn btn-outline-success">Degree = 90</label>

                <input type="radio" className="btn-check" value="135"
                  onChange={degreeValHandleChange} name="success-outlined" id="success-outlined" autocomplete="off" />
                <label className="btn btn-outline-success">Degree = 135</label> */}


                {/* <input type="radio" class="btn-check" value="0" onChange={degreeValHandleChange} id="degree-0" name="degree"/>
                <label class="btn btn-outline-success" >Degree = 0</label>

                <input type="radio" class="btn-check" value="45" onChange={degreeValHandleChange} id="degree-45" name="degree"/>
                <label class="btn btn-outline-success" >Degree = 45</label>

                <input type="radio" class="btn-check" value="90" onChange={degreeValHandleChange} id="degree-90" name="degree"/>
                <label class="btn btn-outline-success" >Degree = 90</label>

                <input type="radio" class="btn-check" value="135" onChange={degreeValHandleChange} id="degree-135" name="degree"/>
                <label class="btn btn-outline-success" >Degree = 135</label> */}


                <input type="radio" class="btn-check" name="options-outlined" id="success-outlined1" value="0" onChange={degreeValHandleChange} autocomplete="off" />
                <label class="btn btn-outline-success" for="success-outlined1">Degree = 0</label>
                <br /><br />
                <input type="radio" class="btn-check" name="options-outlined" id="success-outlined2" value="45" onChange={degreeValHandleChange} autocomplete="off" />
                <label class="btn btn-outline-success" for="success-outlined2">Degree = 45</label>
                <br /><br />
                <input type="radio" class="btn-check" name="options-outlined" id="success-outlined3" value="90" onChange={degreeValHandleChange} autocomplete="off" />
                <label class="btn btn-outline-success" for="success-outlined3">Degree = 90</label>
                <br /><br />
                <input type="radio" class="btn-check" name="options-outlined" id="success-outlined4" value="135" onChange={degreeValHandleChange} autocomplete="off" />
                <label class="btn btn-outline-success" for="success-outlined4">Degree = 135</label>
              </form>
            </div>

            {/* <Basic diameter={100} min={0} max={135} step={45} value={params.degree}
              theme={{
                defaultColor: '#333',
                activeColor: '#f33'
              }}
              onValueChange={params.setDegree} ariaLabelledBy={'degree-label'}
            >
              <label id={'degree-label'}>Degree (Θ)</label>
            </Basic> */}

          </div>
          <div className='col-6' align='center'>
            
            
          <div className="row justify-content-md-center">
              <form>
              <input type="radio" class="btn-check" name="options-outlined" id="distance1" value="2" onChange={distanceValHandleChange} autocomplete="off" />
                <label class="btn btn-outline-primary" for="distance1">Distance = 1</label>
                <br /><br />
                <input type="radio" class="btn-check" name="options-outlined" id="distance2" value="3" onChange={distanceValHandleChange} autocomplete="off" />
                <label class="btn btn-outline-primary" for="distance2">Distance = 2</label>
                <br /><br />
                <input type="radio" class="btn-check" name="options-outlined" id="distance3" value="4" onChange={distanceValHandleChange} autocomplete="off" />
                <label class="btn btn-outline-primary" for="distance3">Distance = 3</label>
                <br /><br />
                <input type="radio" class="btn-check" name="options-outlined" id="distance4" value="5" onChange={distanceValHandleChange} autocomplete="off" />
                <label class="btn btn-outline-primary" for="distance4">Distance = 4</label>
              </form>
            </div>

            {/* <Basic diameter={100} min={2}
              max={
                params.degree === 0 ? params.cols :
                  params.degree === 90 ? params.rows :
                    params.rows > params.cols ? params.cols : params.rows
              }
              step={1} value={params.distance}
              theme={{
                defaultColor: '#333',
                activeColor: '#f33'
              }}
              onValueChange={params.setDistance} ariaLabelledBy={'distance-label'}
            >
              <label id={'distance-label'}>Distance (d)</label>
            </Basic> */}


          </div>
        </div>
      </div>
    </div>

  )
}

export default GlcmProperties;