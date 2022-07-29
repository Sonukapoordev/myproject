import React from 'react'
const navbar = () => {
  return (
    <>
    <div className='container nav_bg position-sticky top-0 z-index-sticky'>
        <div className='row '>
            <div className='col-10 mx-auto'>
            <nav className="navbar navbar-expand-lg justify-content-end navbar-light bg-light ">
                <div className="container-fluid bg-secondary">
                    <a className="navbar-brand fs-3 text-primary" href="#"><b>Selfeey</b></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav nav ms-auto">
                        <li className="nav-item">
                        <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active text-white" aria-current="page" href="/users">GitHub Users</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-white" href="/alluser">All User</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-white" href="#">About</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-white" href="#">Contact</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-white" href="/registration">Registration</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-white" href="/login">Login</a>
                        </li>
                    </ul>
                    </div>
                </div>
             </nav>
            </div>
        </div>
    </div>
    </>
  )
}
export default navbar