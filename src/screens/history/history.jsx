import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { API_URL } from "../../constant/constant";
import Loader from "../../component/loader";

function History() {
  const Navigate = useNavigate();
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchHistory = async () => {
    setLoading(true);
    var ambId = localStorage.getItem("ambId");
    await axios
      .get(`${API_URL}/history/${ambId.toString()}`)
      .then((res) => {
        setHistory(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchHistory();
  }, []);
  return (
    <>
      {/* {loader}&& <Loader /> x */}

      {loading && <Loader />}
      <div style={{ width: "90%", margin: "auto", marginTop: "6rem" }}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Account</th>
              <th scope="col">Price</th>
              <th scope="col">View</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item, index) => {
              return (
                <tr key={index + 1}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.accNo.toString()}</td>
                  <td>{item.totalAmount.toString()}</td>
                  <td>
                    <Link to={"/history/details"} state={item}>
                      click here
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default History;
