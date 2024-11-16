import React from 'react'

const CounterSection = () => {
  return (
    <>
  <section className="counter-section pt-130 pb-130">
    <div className="container">
      <div className="row gy-lg-0 gy-4">
        <div className="col-lg-3 col-md-6">
          <div className="counter-item">
            <h3 className="title">
              <span className="odometer" data-count={10}>
                0
              </span>
            </h3>
            <p>
              Years of <br />
              Experience
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="counter-item">
            <h3 className="title">
              <span className="odometer" data-count={18}>
                0
              </span>
            </h3>
            <p>
              Sillded <br /> Perforamce
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="counter-item">
            <h3 className="title">
              <span className="odometer" data-count={32}>
                0
              </span>
            </h3>
            <p>
              Visited <br /> Conference
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="counter-item">
            <h3 className="title">
              <span className="odometer" data-count={1}>
                0
              </span>
              k
            </h3>
            <p>
              Years of <br />
              Experience
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ./ counter-section */}
</>

  )
}

export default CounterSection