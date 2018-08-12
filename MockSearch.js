import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 import Navigation from './Navigation';
class MockSearch extends Component {
  render() {
    return (
       <div>
       <Navigation/>
           <div className="container-fluid card mockform">
               <div className="row">
                   <div className="col-sm">
                       <p>Mock Search / Name Search</p>
                       <form>
                           <div className="form-row">
                               <div className="form-group col-md-6">
                                   {/*<label for="inputEmail4">Mock #</label>*/}
                                   <input type="email" className="form-control form-control-sm" id="inputEmail4" placeholder="Mock #"/>
                               </div>
                               <div className="form-group col-md-6">
                                   {/*<label for="inputPassword4">Password</label>*/}
                                   <input type="text" className="form-control form-control-sm" id="inputPassword4" placeholder="Offer code"/>
                               </div>
                           </div>
                           <div className="form-row">
                               {/*<label for="inputAddress">Loan account #</label>*/}
                               <div className="form-group col-md-6">
                                   {/*<label for="inputEmail4">Mock #</label>*/}
                                   <input type="text" className="form-control form-control-sm" id="inputAddress" placeholder="Loan account #"/>
                               </div>

                           </div>
                           <div className="form-row">
                               <div className="form-group col-md-6">
                                   {/*<label for="inputCity">City</label>*/}
                                   <input type="text" className="form-control form-control-sm" id="inputCity" placeholder="First name"/>
                               </div>
                               <div className="form-group col-md-6">
                                   {/*<label for="inputState">State</label>*/}
                                   <input type="text" className="form-control form-control-sm" id="inputPassword4" placeholder="Last name"/>
                               </div>

                           </div>
                           <div className="form-row">
                               <div className="form-group col-md-4">
                                   {/*<label for="inputState">State</label>*/}
                                   <input type="text" className="form-control form-control-sm" id="inputPassword4" placeholder="Zip"/>
                               </div><p>_</p>
                               <div className="form-group col-md-4">
                                   {/*<label for="inputZip">Zip</label>*/}
                                   <input type="text" className="form-control form-control-sm" placeholder="zip" id="inputZip"/>
                               </div>
                           </div>

                           <button type="submit" className="btn btn-primary btn-sm">Search</button>&nbsp;
                           <button type="submit" className="btn btn-primary btn-sm">Clear</button>
                       </form>
                   </div>
                   <div className="col-sm"></div>
                   <div className="col-sm">
                       <p style={{color:'red'}}>**ERROR MESSAGES</p>
                   </div>
               </div>
           </div>
           <div style={{margin:'10px'}}>
               <table className="table table-hover table-bordered table-sm">
                   <thead>
                   <tr>
                       <th scope="col">#</th>
                       <th scope="col">First</th>
                       <th scope="col">Last</th>
                       <th scope="col">Handle</th>
                   </tr>
                   </thead>
                   <tbody>
                   <tr>
                       <th scope="row">1</th>
                       <td>Mark</td>
                       <td>Otto</td>
                       <td>@mdo</td>
                   </tr>
                   <tr>
                       <th scope="row">2</th>
                       <td>Jacob</td>
                       <td>Thornton</td>
                       <td>@fat</td>
                   </tr>

                   </tbody>
               </table>
           </div>
           <div className="footer container-fluid card">
               <div className="row">
               <div className="col-sm">
                   <div className="form-row">
                       <div className="form-group col-md-6">
                           <select className="form-control form-control-sm">
                               <option>Small select</option>
                           </select>
                       </div>
                       <div className="form-group col-md-6">
                           {/*<label for="inputPassword4">Password</label>*/}
                           <input type="button" className="btn btn-danger btn-sm" value="Unsolicited application"/>
                       </div>
                   </div>
               </div>
               <div className="col-sm"></div>
               <div className="col-sm"></div>
               </div>
           </div>
       </div>
    );
  }
}
export default MockSearch;