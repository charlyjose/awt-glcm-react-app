import { Basic } from 'react-dial-knob';

var GlcmProperties = (params) => {
  return (





    
    <div className="mt-3 m-sm-5 p-4 p-sm-5">

      
      <div className="row">
        <div className="col">
          <h2>GLCM Properties</h2>
        </div>
      </div>


      <div className="row">
        <div className='col-2'></div>


        <div className='col-4' align='center'>
          <div>
            <Basic diameter={100} min={0} max={135} step={45} value={params.degree}
              theme={{
                defaultColor: '#333',
                activeColor: '#f33'
              }}
              onValueChange={params.setDegree} ariaLabelledBy={'degree-label'}
            >
              <label id={'degree-label'}>Degree (Θ)</label>
            </Basic>
          </div>
        </div>

        <div className='col-4' align='center'>
          <div>
            <Basic diameter={100} min={2}
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
            </Basic>
          </div>
        </div>


      </div>
    </div>
  )
}

export default GlcmProperties;