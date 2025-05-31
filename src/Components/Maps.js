import React, { useEffect } from 'react'
import '../Css/Maps.css'
import Footer from '../Components/Fotter'
function Maps() {
    useEffect(()=>{
document.title="KhWeather/Maps"
    },[])
  return (
    <div className='mapsmain'>
        <div className='container-fluid'>
            <div className='row mpasrow'>
            <iframe
                title="forcast map"
                src="https://embed.windy.com/embed2.html?lat=26.471&lon=76.816&detailLat=29.967&detailLon=76.836&width=650&height=450&zoom=5&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=true&metricWind=km%2Fh&metricTemp=%C2%B0C&radarRange=-1"
              >
                {" "}
              </iframe>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Maps