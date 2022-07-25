import React from 'react'
import './CatSidebar.css'
function CatSidebar() {
  return (
    // <div>CatSidebar</div>
    <>
      {/* <div>CatSidebar</div> */}
      <div className='container bootstrap snippets bootdey'>
        <h1 className='textPrimary'>Your Profile</h1>
        <hr />
        <div className='row'>
          <div className='col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12'>
          {/* col-md-3 */}
            <div className='text-center'>
              <img src="https://bootdey.com/img/Content/avatar/avatar7.png" className='avatar img-circle img-thumbnail' alt="avatar" />
              <h6>Upload a different photo...</h6>
              <input type="file" className='form-control' />
            </div>
          </div>
          <div className='col-md-9 personal-info'>
            <div className='alert alert-info alert-dismissable'>
              <a className='panel-close close' data-dismiss="alert">×</a>
              <i className='fa fa-coffee' />
              Your profile <strong>Updated </strong>successfully
            </div>
            <h3>Personal Info</h3>

            <form className='form-horizontal' role="form">
              <div className='form-group'>
                <label className='col-lg-3 control-label'>First Name:</label>
                <div className='col-lg-8'>
                  <input className='form-control' type="text" value="Ahmad" />
                </div>
              </div>

              <div className='form-group'>
                <label className='col-lg-3 control-label'>Last Name:</label>
                <div className='col-lg-8'>
                  <input className='form-control' type="text" value="Ahmad" />
                </div>
              </div>

              <div className='form-group'>
                <label className='col-lg-3 control-label'>Password:</label>
                <div className='col-lg-8'>
                  <input className='form-control' type="password" value="" />
                </div>
              </div>

              <div className='form-group'>
                <label className='col-lg-3 control-label'>Confirm Password:</label>
                <div className='col-lg-8'>
                  <input className='form-control' type="password" value="" />
                </div>
              </div>

            </form>
          </div>

        </div>

      </div><hr /></>
      
  )
}

export default CatSidebar