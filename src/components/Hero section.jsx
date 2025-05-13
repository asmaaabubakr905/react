import React from 'react'
import image from '../assets/R.jpeg'
import image2 from '../assets/1.png'

function section1() {
  return (
   <div className="row m-0">
  <div
    className="col-12 col-md-6 p-0 d-flex align-items-stretch"
    style={{ height: "80vh" }}
  >
    <img
      src={image2}
      className="img-fluid w-100"
      style={{ objectFit: "cover" }}
    />
  </div>
  <div
    className="col-12 col-md-6 p-0 d-flex align-items-stretch"
    style={{ backgroundColor: "#F9F5EA" }}
  >
    <div
      className="d-flex align-items-center w-100"
      style={{ padding: "40px 20px" }}
    >
      <div>
        <p
          style={{
            color: "#555659",
            textTransform: "uppercase",
            letterSpacing: 1
          }}
        >
          PRODUCT
        </p>
        <h1 style={{ fontWeight: 700, marginBottom: 30 }}>
          Choosing the right candle
          <br /> with the atmosphere
        </h1>
        <p>
          Light the candle, using a long match or a lighter, and let it burn
          <br /> for a few hours to allow the wax to melt and the fragrance to
          be <br /> released into the air. Make sure to never leave a lit candle{" "}
          <br /> unattended.
        </p>
        <div className="d-flex align-items-center mt-4">
          <div
            style={{
              width: 50,
              height: 50,
              overflow: "hidden",
              borderRadius: "50%",
              marginRight: 15
            }}
          >
            <img
              src={image}
              alt="Tiffany Sunny"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div>
            <p style={{ fontWeight: 600, marginBottom: 0 }}>Tiffany Sunny</p>
            <p style={{ fontSize: 14, color: "#777", marginBottom: 0 }}>
              Jun 12, 2022
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default section1
