import React, { Component } from 'react';
import aa from "./lespaulcita.jpg"
export default class Screen extends Component {

render(){
  return(
  <div className="container">

  <div className="row">
  <div className="col-md-2"></div>
  <div className="col-md-8">
    <div className="text-center">
    <img src={aa}  className="rounded" style={{marginBottom:"15px",width: "100%"}}/>
    </div>
<div className="row">
<div className="col-md-3"></div>
<div className="col-md-6">

  <div className="input-group mb-3">
    <input type="text" className="form-control" placeholder="Write here and press enter..."/>
  </div>


</div>
<div className="col-md-3"></div>
</div>

  </div>
  <div className="col-md-2"></div>
  </div>
  </div>
)}

}
