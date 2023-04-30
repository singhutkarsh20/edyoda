import './pricing.css'
import bg1 from '../Images/bg1.png'
import a from '../Images/a.png'
import b from '../Images/b.png'
import c from '../Images/c.png'
import d from '../Images/d.png'
import e from '../Images/e.png'
import r from '../Images/r.png'
import x from '../Images/x.png'
import { FaRupeeSign } from 'react-icons/fa';


const Pricing = () => {
  
  
  return (
    <div className='hero'>
      <img className='bg-img' src={bg1} alt="bg"/>
      <div className='hero-container'>
        <div className='left-container'>
          <div className='access-text'>
            {/* <p>Access curated courses worth <br/><span><FaRupeeSign/></span> 18,500 at just <span><FaRupeeSign/></span> <span>99</span> per year</p> */}
            <p>Access curated courses worth <br/><span><FaRupeeSign/></span> <span className="value">18,500</span>  at just <span><FaRupeeSign/></span> <span>99</span> per year</p>
            <div className='icon'>
            <div>
  <             img src={b} alt="b"/>
                <p><span>100+</span> job relevant courses</p>
              </div>
              <div>
                <img src={a} alt="b"/>
                <p><span>2000</span> hours of courses</p>
              </div>
              <div>
              <img src={c} alt="c"/>
              <p><span>Exclusive</span> webinar access</p>
              </div>
              <div>
              <img src={d} alt="e"/>
              <p>Scholarship worth <span><FaRupeeSign/></span> <span>94,500</span></p>
              </div>
              <div>
              <img src={e} alt="d"/>
              <p><span>Ad free</span> learning experience</p>
              </div>
              
              </div>
            </div>
          </div>

        <div className='right-container'>
  <div className="form-container">
  <div className="progress-bar">
      <button className='rounded-circle btn btn-primary btn-sm'>1</button>
   <button className='rounded-circle btn btn-primary btn-sm'>2</button>


    </div>
    <div className="progress-bar span">
      
        <div className='col-6 text-center'>Sign Up</div>
        <div className='col-6 text-center'>Subscribe</div>

      

    </div>
    <h2>Select Your Subscription Plan</h2>
     <form> 
      <div className="grid-container">
      <div className='input-container'>
      
    


  <div className='plan-1'>
  <div class="plan-block">
          <div class="plan-title">
            <p className='p1'>offer expired</p>
            <input type="radio" name="subscription-plan" />
           <p className='b'> 12 months subscription</p>
          </div>
          <div class="plan-details">
            <div class="total"><FaRupeeSign/>99</div>
            <div class="per-month"><FaRupeeSign/>8/mo</div>
          </div>
        </div>
        </div>
        <div  className='plan-2'>
        <div class="plan-block">
          <div class="plan-title">
          <p className='p2'>recommended</p>
            <input type="radio"   name="subscription-plan" />
            12 months subscription
          </div>
          <div class="plan-details">
            <div class="total"><FaRupeeSign/>179</div>
            <div class="per-month"><FaRupeeSign/>15/mo</div>
          </div>
        </div>
        </div>
        <div className='plan-3'>
        <div class="plan-block">
          <div class="plan-title">
            <input type="radio" name="subscription-plan" />
            6 months subscription
          </div>
          <div class="plan-details">
            <div class="total"><FaRupeeSign/>149 </div>
            <div class="per-month"><FaRupeeSign/>25/mo</div>
          </div>
        </div>
        
        <div class="plan-block">
          <div class="plan-title">
            <input type="radio" name="subscription-plan" />
            3 months subscription
          </div>
          <div class="plan-details">
            <div class="total"><FaRupeeSign/>99</div>
            <div class="per-month"><FaRupeeSign/>33/mo</div>
          </div>
        </div>
        </div>
  </div>
        <div className='why'>
          <div className="subscription-fee">
            Subscription Fee: <span className="price"><FaRupeeSign/>18,500</span>
          </div>
           {/* <div className="limited-time-offer-container">
  <div className="limited-time-offer">
    Limited Time Offer <span>-18,401</span> 
   
           
   

  </div>
</div>  */}

<div className="limited-time-offer-container">
  <div className="limited-time-offer">
    <p>
    Limited Time Offer <span className='r'><FaRupeeSign/>-18,401</span> </p>
    <div className="offer-details">
      <img src={x} alt="offer image" />
      <p>Offer valid till 23rd march 2023</p>
    </div> 
  </div>
</div>


          <div className="total-message">
            Total (Incl. of all taxes): <span className="total-price"><FaRupeeSign/>149</span>
          </div>
          <div className="buttons">
          <button type="button" class="btn btn-outline-danger m-2">Cancel</button>
            <button className="pay-button text-white m-2">Proceed to Pay</button>
          </div>
          <img src={r} alt="r" class="image" />

        </div>
        </div>
     </form> 
  </div>
</div>


        </div>
      </div>
    
  )
}

export default Pricing
