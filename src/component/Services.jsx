import "./Styles.css"

export const Services = () =>{
    return <>
        <h1  className="service_heading">Our Services</h1>
    <div className="services-section">
    <div className="service">
      <img src="https://www.newswebzone.com/wp-content/uploads/2021/06/IoT-Product-Development.jpg" alt="IoT Development" />
      <p className="service-title">IoT Development</p>
    </div>
    <div className="service">
      <img src="https://th.bing.com/th/id/OIP.nil1yZ8W34Vsd38cH0a9NwHaE7?pid=ImgDet&rs=1" alt="Graphic Designing" />
      <p className="service-title">Graphic Designing</p>
    </div>
    <div className="service">
      <img src="https://th.bing.com/th/id/OIP._v_ejIAbrvRBzmjH8YE6ggHaEx?pid=ImgDet&rs=1" alt="Video Editing" />
      <p className="service-title">Video Editing</p>
    </div>
  </div>
  </> 
}