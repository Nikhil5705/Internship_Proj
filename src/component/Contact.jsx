import "./Contact.css"
export const Contact = () =>{
    return(
        <>
        <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <div className="contact-details">
          <h2>Our Office</h2>
          <p>
            Address: 123 Main Street, Cityville, Country
            <br />
            Phone: (123) 456-7890
            <br />
            Email: info@example.com
          </p>
          </div>
        <div className="contact-map">
          <img src="https://uploads-ssl.webflow.com/60c3beda7155dc67cec88f6d/60d397be63b0896d72317f04_Map_ContactUs_website.png" alt="Map" />
        </div>
      </div>
    </div>
        </>
    )
}