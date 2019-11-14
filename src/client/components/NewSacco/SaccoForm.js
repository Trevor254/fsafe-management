import React from 'react';



class NewSacco extends React.Component {
   
    render(){
        return (
            <div className="main">
              {/* <div className="container"> */}
              <div className="register">
                  <h3 className = "Header3">New Sacco</h3>
                     <div className="form-container">
                   <h3 className="Sacco-Header">Sacco Info</h3>
                      
                    <form className="New-Sacco">
                         <div className="row">
                             <div className= "col-sm-12 col-md-6 col-lg-6">
                             <label className = "New-Sacco-Field">Sacco Name</label>
                             <input type="text" className="saccoinput" id="Sacco Name"/>
                             </div>

                             <div className ="col-sm-12 col-md-6 col-lg-6">
                             <label className = "New-Sacco-Field">Sacco code</label>
                             <input type="text" className="saccoinput" id="Sacco code"/>
                             </div>

                         </div>

                         <div className="row">
                            <div className="col-sm-12 col-md-4 col-lg-4"  >
                               <label className = "New-Sacco-Field">Registration No.</label>
                               <input type="text" className="saccoinput" id="Registration No."/>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4"  >
                               <label className = "New-Sacco-Field">Address</label>
                               <input type="text" className="saccoinput" id="Address"/>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4"  >
                               <label className = "New-Sacco-Field"> Postal code</label>
                               <input type="text" className="saccoinput" id="Postal code"/>
                            </div>
                          </div>

                        <div className="row">
                          <div className="col-sm-12 col-md-4 col-lg-4">
                              <label className = "New-Sacco-Field">Phone</label>
                              <input type="text" className="saccoinput" id="Phone"/>
                          </div>
                          <div className="col-sm-12 col-md-4 col-lg-4">
                              <label className = "New-Sacco-Field">Email</label>
                              <input type="email" className="saccoinput" id="Email"/>
                          </div>
                          <div className="col-sm-12 col-md-4 col-lg-4">
                              <label className = "New-Sacco-Field">Password</label>
                              <input type="password" className="saccoinput" id="Password"/>
                          </div>

                          <div className="col-md-4">
                              <label className = "New-Sacco-Field">Year Created</label>
                              <input type="text" className="saccoinput" id="Year Created"/>
                          </div>
                        </div>
                       
                    </form>

                    <h3 className="Admin-Header">Admin Info</h3>
                    <form className="New-Manager">
                        <div className="row">
                          <div className="col-sm-12 col-md-4 col-lg-4">
                             <label className = "New-Manager-Field">Manager First Name</label>
                             <input type="text" className="saccoinput" id="Manager First Name"/>
                          </div>
                          <div className="col-sm-12 col-md-4 col-lg-4">
                             <label className = "New-Manager-Field">Last name</label>
                             <input type="text" className="saccoinput" id="Last Name"/>
                          </div>
                          <div className="col-sm-12 col-md-4 col-lg-4">
                             <label className = "New-Manager-Field">Phone</label>
                             <input type="text" className="saccoinput" id="Phone"/>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-12 col-md-5 col-lg-5">
                             <label className = "New-Manager-Field">About</label>
                             <textarea className="col-sm-12 col-md-12 col-lg-12" id="message"></textarea>
                          </div>
                          </div>
                          <div className="row">
                          <div className="col-md-6 offset-md-9">
                          
                          <button className="btn btn-primary" type="submit">Cancel</button>{"      "}
                          <button className="btn btn-success" type="submit">Submit</button>
                          </div>
                          {/* <div className="col-md-6">
                             <button className="Register" type="submit">Submit</button>
                          </div> */}
                        </div>
                      
                    </form>
                   
                       </div>
                   </div>
 
                   
               </div>
        )
    }
}

export default NewSacco;