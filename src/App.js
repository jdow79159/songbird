import React from 'react';

function App() {
  return (
    <div className="container">
      <header className="row">
        <h1 className="col-sm-6 text-center">
          Songbird
          <span role="img" aria-label="bird">
            🐦
          </span>
        </h1>
        <div className="col-sm-6 text-center h1 text-primary">
          Score:
          <span> </span>
          <span className="badge badge-pill badge-primary score">10</span>
        </div>
      </header>
      <main>
        <section className="w-100">
          <ul className="list-group list-group-horizontal justify-content-center">
            <li className="list-group-item text-center">Разминка</li>
            <li className="list-group-item active text-center">Вопрос 1</li>
            <li className="list-group-item text-center">Вопрос 2</li>
            <li className="list-group-item text-center">Вопрос 3</li>
            <li className="list-group-item text-center">Вопрос 4</li>
          </ul>
        </section>
        <section className="py-2 row">
          <div className="col-sm-6 justify-content-center d-flex">
            <img
              src="https://via.placeholder.com/300x200"
              className="img-fluid"
              alt="bird"
            />
          </div>
          <div className="col-sm-6 justify-content-center d-flex flex-column p-3">
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
        </section>
        <div className="row py-3">
          <section className="col-sm-5">
          <div className="btn-group-vertical d-flex">
            <button type="button" className="btn btn-secondary my-1">Button</button>
            <button type="button" className="btn btn-secondary my-1">Button</button>
            <button type="button" className="btn btn-secondary my-1">Button</button>
            <button type="button" disabled className="btn btn-secondary my-1 disabled">Button</button>
            <button type="button" disabled className="btn btn-outline-danger my-1 disabled">Button</button>
            <button type="button" disabled className="btn btn-outline-success my-1 disabled">Button</button>
          </div>
          </section>
          <section className="col-7 row">
            <div className="col-sm-6 justify-content-center d-flex">
              <img
                src="https://via.placeholder.com/300x200"
                className="img-fluid"
                alt="bird"
              />
            </div>
            <div className="col-sm-6 justify-content-center d-flex flex-column p-3">
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
          </section>
        </div>
        <section>
          <button type="button" className="btn btn-primary btn-lg btn-block">Next song</button>
        </section>
      </main>
    </div>
  );
}

export default App;
