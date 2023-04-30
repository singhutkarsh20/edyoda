// import { FaSearch } from "react-icons/fa";
// import { FaChevronDown } from 'react-icons/fa';
// import React from 'react'
// import './Navbar.css'
// import logo from "../Images/EDYODA.png";

// const Navbar = () => {
//   return (
//     <div className='navbar'>
//       <div className='navbar-container'>
//         <div className='left-container'>
//         <img className="imglogo" src={logo} alt="/" />
//           < div className="text">
//           <p className='Dropd'>
//             courses <FaChevronDown/>
//           </p>
//           <p className='Dropd'>
//             programs <FaChevronDown/>
//           </p>
//          </div>
//         </div>
//         <div className='right-container'>
          
        
//       <FaSearch />
    
              
//           <div className='auth-container'>
//             <p className='auth-btn'>Login</p>
//             <button className='auth-btn'>JOIN NOW</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar

import { FaSearch } from "react-icons/fa";
import { FaChevronDown } from 'react-icons/fa';
import React from 'react'
import './Navbar.css'
import logo from "../Images/EDYODA.png";

const Navbar = () => {
  return (
    <div className='navbar container-fluid'>
      <div className='container  navbar-container'>
        <div className='lft-container'>
          <img className="imglogo" src={logo} alt="/" />
          < div className="text">
            <p className='Dropd'>
              Courses <FaChevronDown />
            </p>
            <p className='Dropd'>
              Programs <FaChevronDown />
            </p>
          </div>
        </div>
        <div className='right-container'>
        <div className='auth-container'>


            <FaSearch />


          
            <p className='auth-btn'>Login</p>
            <button className='auth-btn px-5'>JOIN NOW</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar