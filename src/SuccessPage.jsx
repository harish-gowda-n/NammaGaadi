import React from "react";

export default () => {
  return (
    <div
      style={{
        flex: 1,
        textAlign: "center",
        height: 360,
        width: "80%",
        margin: "0 auto 0 auto",
      }}
    >
      <h1 style={{ marginTop: 80, marginBottom: 25 }}>Booking Confirmed!!</h1>
      <h5>{"Thanks for doing business with us!!🙂"}</h5>
      <h5 style={{ marginBottom: 50 }}>
        {
          "Our team will contact you shortly and give you more details about your order."
        }
      </h5>
      <h6 style={{ marginBottom: 50 }}>
          Feel free to contact us at this number to get your queries cleared.
          <br />
          <u>+918792600639</u>
      </h6>
      <a
        href="/"
        className="footer-link"
        style={{ textDecorationLine: "underline", fontWeight: "600" }}
      >
        Click here to go to home page
      </a>
    </div>
  );
};
