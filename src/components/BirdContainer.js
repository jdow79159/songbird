import React, { useState } from 'react';

export default () => (
  <>
    <div className="col-sm-5 text-center">
      <div className="d-flex flex-grow-1 justify-content-center align-items-center">
        <img
          src="https://via.placeholder.com/300x200"
          className="img-fluid"
          alt="bird"
        />
      </div>
    </div>
    <div className="col-sm-7 col-12 justify-content-center d-flex flex-column p-3">
      <div>
        <h2 className="text-center">Bird name*****</h2>
      </div>
      <form className="justify-content-center d-flex flex-column">
        <div className="d-flex justify-content-between">
          <span>00:01</span>
          {/* <i className="fa fa-pause" aria-hidden="true"></i> */}
          <button type="button" className="btn btn-outline-primary ">
            <i className="fa fa-play" aria-hidden="true" />
          </button>
          <span>00:12</span>
        </div>
        <input type="range" className="custom-range" id="customRange1" />
      </form>
    </div>
  </>
);
