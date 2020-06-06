import React, { useState } from "react";
// onSubmit={onSubmit}
const Container = ({
  viewfund,
  joinFund,
  contribute,
  getWinner,
  releaseFund,
  bidForProject,
}) => {
  const [bidding, SetBidding] = useState("");

  const onChange = (e) => {
    SetBidding(e.target.value);
  };

  const onsubmit = (e) => {
    e.preventDefault();
    bidForProject(window.web3.utils.toWei(bidding.toString(), "Ether"));
  };

  return (
    <div>
      <h6>
        funding name: {viewfund[0]} <br></br>
        jackpot: {window.web3.utils.fromWei(viewfund[1], "ether")} eth <br></br>
        No of Installments : {viewfund[2]} <br></br>
        No of Investors : {viewfund[3]} <br></br>
        No of Investors Joined : {viewfund[6]} <br></br>
        Installment Amount : {window.web3.utils.fromWei(
          viewfund[5],
          "ether"
        )}{" "}
        eth <br></br>
        Fund Balance : {window.web3.utils.fromWei(viewfund[4], "ether")} eth
        <br></br>
        <b>YOUR DETAILS:</b>
        <br></br>
        <button onClick={joinFund} className="btn btn-primary">
          join fund
        </button>
        <br></br>
        <br></br>
        <button onClick={contribute} className="btn btn-primary">
          contribute
        </button>
        <br></br>
        <br></br>
        <button onClick={getWinner} className="btn btn-primary">
          getWinner
        </button>
        <br></br>
        <br></br>
        <form onSubmit={onsubmit}>
          <div className="form-group">
            <input
              id="bidding"
              type="text"
              className="form-control"
              placeholder="bidding price"
              name="bidding"
              value={bidding}
              onChange={onChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Bid For Jackpot
          </button>
        </form>
        <br></br>
        <br></br>
        <b>Only manager can release the fund</b>
        <br></br>
        <button onClick={releaseFund} className="btn btn-primary">
          release fund
        </button>
      </h6>
    </div>
  );
};

export default Container;
