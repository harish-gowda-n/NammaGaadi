import React from "react";

export default  function Output(props) {
  const summary = props.verify;
  return (
    <div>
      <Table style={{ textAlign: "center", marginTop: "20px", borderTopStyle: "none" }}>
        <tbody >
          <tr><td><h6>Name :</h6></td>
            <td><h6>{summary.name === "" ? "Not Entered" : summary.name}</h6></td></tr>

          <tr><td><h6>Vehicle Selected :</h6></td>
            <td><h6>{summary.vehicle === "" ? "Not Entered" : summary.vehicle}</h6></td></tr>

          <tr><td><h6>Pickup Location :</h6></td>
            <td><h6>{summary.pickup === "" ? "Not Entered" : summary.pickup}</h6></td></tr>

          <tr><td><h6>Drop Location :</h6></td>
            <td><h6>{summary.pickup === "" ? "Not Entered" : summary.drop}</h6></td></tr>

          <tr><td><h6>Total fare :</h6></td>
            <td><h6>{distance * 15 * 0.001}</h6></td></tr>
        </tbody>
      </Table>
      <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
        <Form.Check type="checkbox" name="checked" label={<a href="/agreement" >I have read and agreed to the terms and conditions</a>}
          checked={state.checked} onChange={handleChange} style={{ marginBottom: "20px" }} />
        <Button name="pay" variant="success" type="submit" onClick={handleClick} style={{ fontSize: "0.8rem" }}>
          Proceed to pay <i className="fas fa-chevron-circle-right"></i></Button>
      </div>
    </div>
  )
}