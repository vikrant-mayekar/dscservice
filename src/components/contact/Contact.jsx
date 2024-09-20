import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  
  
  const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.48370875!2d73.75508529999999!3d18.552219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bea5cae2e6b9%3A0x87bef897f33eabdd!2sSukhwani%20Boulevard%20Commerz!5e0!3m2!1sen!2sin!4v1726678714793!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"'
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p></p>

            <div className='items grid2'>
              <div className='box'>
                <h4>OFFICE ADDRESS:</h4>
                <p>
                Office number 406, 4th floor, Sukhwani Boulevard Commerz,
                Survey No. 85, 1, Pashan - Sus Rd, above Domino's, Sus, Pune, Maharashtra 411021</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> contact@dscservice.in</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> +91 9082386654</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
