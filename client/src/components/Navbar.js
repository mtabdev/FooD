import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
//import toast from 'react-hot-toast'
export default function Navbar() {

  const navigator = useNavigate()
  const logoutuser = () => {
    localStorage.removeItem("authToken")
    //toast.error("Logged out sccuessfully")
    navigator("/login")
  }


  return (
    <>
      <div className='row d-flex justify-content-evenly'>

        <div className='col-lg-12 justify-content-evenly'>
          <div className=" navbar-light bg-light shadow p-3 mb-5 bg-white rounded">
            <Link className="navbar-brand fs-1" to="/">Food Go</Link>
            
            <div >
              <div className="navbar-nav me-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home </Link>
                </li>
                {(localStorage.getItem("authToken")) ?
                  <li className="nav-item ">
                    <Link className="nav-link" to="/cart">My Orders </Link>
                  </li>
                  : ""
                }

              </div>
            </div>
          </div>

        </div>


        <div className='col-lg-3'>
          <div className='d-flex justify-content-evenly navbar-light bg-light shadow p-3 mb-5 bg-white rounded'>

            {(!(localStorage.getItem("authToken"))) ?
              <div >
                <Link className="nav-link mx-1 " to="/login">Login</Link>
                <Link className="nav-link mx-1 " to="/createUser">Sign Up</Link>
              </div>
              : <div className='d-flex justify-content-center'>
                <Link className='nav nav-link mx-2 p-1' to="/cart">Cart
                </Link>
                <div className='nav-link btn btn-danger mx-2 p-1' onClick={logoutuser}>
                  Logout
                </div>

              </div>
            }
          </div>


        </div>


      </div>






    </>
  )
}
