import React, { useEffect, useState } from "react";
import "./makePayment.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function MakePayment() {
  const Navigate = useNavigate();
  const [selectedChannels, setSelectedChannels] = useState([]);
  const [accountNumber, setAccountNumber] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  const getData = () => {
    if (JSON.parse(localStorage.getItem("selectedChannels")).length > 0) {
      setSelectedChannels(JSON.parse(localStorage.getItem("selectedChannels")));

      setTotalPrice(localStorage.getItem("totalPrice"));
    } else {
      Navigate(-1);
    }
  };
  const makePayment = async () => {
    var payload = {
      ambId: localStorage.getItem("ambId"),
      accountNumber: accountNumber.toString(),
      totalAmount: parseFloat(totalPrice.toString()),
      channelList: selectedChannels,
    };
    await axios
      .post("http://localhost:4000/makePayment/", payload)
      .then((res) => {
        if (res.data.status === 200) {
          alert(res.data.data);
          Navigate("/recharge");
        } else {
          alert(res.data.data);
        }
      })
      .catch((err) => {
        alert("Something went wrong, Please try again");
      });
    console.log(payload);
  };
  const handleChange = (e) => {
    setAccountNumber(e.target.value);
    console.log(accountNumber);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div
        style={{
          marginTop: "5rem",
          width: "100%",
          // backgroundColor: "green",
          height: "88.3vh",

          // overflowY: "scroll",
        }}
      >
        <div
          style={{
            width: "60%",
            margin: "auto",
            backgroundColor: "lightgray",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
            borderRadius: 10,
          }}
        >
          <h6>For Ambassador : </h6>
          <p
            style={{
              textAlign: "center",
              color: "#0F5193",
              // alignItems: "center",
              // display: "flex",
              // justifyContent: "center",
            }}
          >
            Please take &#x20B9; {totalPrice} from the user then click on make
            payment, this ammount will be debit from your account after make
            payment, so be carefull
          </p>
        </div>
        {/* create form and total price */}
        <div
          style={{
            // backgroundColor: "red",
            width: "30%",
            margin: "auto",
            marginTop: "1rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Account Number
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputEmail1"
              value={accountNumber}
              onChange={handleChange}
              aria-describedby="emailHelp"
            />
          </div>
          <div
            style={{
              display: "flex",
              backgroundColor: "#EDB07A",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              padding: 10,
            }}
          >
            <div>Total Amount : </div>
            <div>&nbsp;&#x20B9; {totalPrice}</div>
          </div>
          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              type="button"
              onClick={makePayment}
              className="btn btn-success"
            >
              Make Payment
            </button>
          </div>
        </div>

        {/* create table of channel list  */}
        <div style={{ width: "90%", margin: "auto", paddingBottom: "1rem" }}>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">channels Name</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {selectedChannels.map((item, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item["CHANNEL_NAME"]}</td>
                    <td>{item["PMRP"]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default MakePayment;
