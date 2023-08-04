import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ChannelCard from "../../component/channelCard/channelCard";
import { API_URL } from "../../constant/constant";
import Loader from "../../component/loader";
function Recharge() {
  const Navigate = useNavigate();
  const [exploreFooter, setExploreFooter] = useState(false);
  const [channels, setChannels] = useState([]);
  const [loader, setLoader] = useState(false);
  const [selectedChannels, setSelectedChannels] = useState([]);
  const [totalChannelsPrice, setTotalChannelsPrice] = useState(0);

  const performActionOnItem = (action, item) => {
    console.log(action, item);
    var payload = [...selectedChannels, item];
    if (action === "add") {
      localStorage.setItem("selectedChannels", JSON.stringify(payload));
      localStorage.setItem(
        "totalPrice",
        parseFloat(totalChannelsPrice) + parseFloat(item.PMRP)
      );
      setSelectedChannels([...selectedChannels, item]);
      setTotalChannelsPrice(
        parseFloat(totalChannelsPrice) + parseFloat(item.PMRP)
      );
      console.log(parseFloat(totalChannelsPrice));
      console.log(parseFloat(item.PMRP));
    } else {
      var index = selectedChannels.indexOf(item);
      if (index > -1) {
        selectedChannels.splice(index, 1);
        localStorage.setItem(
          "selectedChannels",
          JSON.stringify(selectedChannels)
        );
        localStorage.setItem(
          "totalPrice",
          parseFloat(localStorage.getItem("totalPrice") - parseFloat(item.PMRP))
        );
        setTotalChannelsPrice(totalChannelsPrice - parseFloat(item.PMRP));
      }
      //   ["hungama", "plus", "star", 6, 8];
    }
    console.log(selectedChannels);
  };

  const fetchChannelList = async () => {
    setLoader(true);
    localStorage.setItem("selectedChannels", []);
    await axios
      .get(`${API_URL}/channelList/`)
      .then((res) => {
        if (res.data.status === 200) {
          setChannels(res.data.data);
          setTimeout(function () {
            setLoader(false);
          }, 3000);
        } else {
          Navigate(-1);
          setLoader(false);
        }
      })
      .catch((err) => {
        Navigate(-1);
        setLoader(false);
      });
  };

  useEffect(() => {
    fetchChannelList();
  }, []);

  return (
    <>
      {loader && <Loader />}

      <div
        style={{
          marginTop: "5.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3
          className="heading"
          style={{
            color: "darkkhaki",
            fontFamily: "serif",
            fontWeight: "bold",
          }}
        >
          Select channels in your package
        </h3>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem",
            marginBottom: "5rem",
          }}
        >
          {channels.map((item) => {
            return (
              <ChannelCard
                key={item.PID}
                item={item}
                performActionOnItem={performActionOnItem}
              />
            );
          })}
        </div>
      </div>
      {/* footer  */}
      <div
        style={{
          backgroundColor: "darkgray",

          width: "100%",
          padding: "0.3rem 1rem",
          paddingTop: "1rem",
          color: "white",
          position: "fixed",
          bottom: 0,
          left: 0,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
      >
        {/* total channels  */}
        {exploreFooter ? (
          <>
            <div
              style={{
                display: "flex",
                position: "relative",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: "1rem",
                paddingRight: "1rem",
              }}
            >
              <p>Total Channels</p>
              <p>{selectedChannels.length.toString()}</p>
            </div>

            <hr style={{ margin: "0.3rem" }} />

            {/* total amount  */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: "1rem",
                paddingRight: "1rem",
              }}
            >
              <p>Total Amount</p>
              <p>{totalChannelsPrice.toString()}</p>
            </div>
            <div
              onClick={() => setExploreFooter(false)}
              style={{ position: "absolute", top: 0, right: 10 }}
            >
              <i
                // style={{ color: "white" }}
                className="bi bi-arrow-down-square-fill"
              ></i>
            </div>
          </>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                position: "relative",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p>explore for price,amount</p>
            </div>
            <div
              onClick={() => setExploreFooter(true)}
              style={{ position: "absolute", top: 0, right: 10 }}
            >
              <i className="bi bi-arrow-up-square-fill"></i>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Recharge;
