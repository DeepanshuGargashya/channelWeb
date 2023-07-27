import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ChannelCard from "../../component/channelCard/channelCard";

function Recharge() {
  const Navigate = useNavigate();
  const [channels, setChannels] = useState([]);
  const [selectedChannels, setSelectedChannels] = useState([]);
  const [totalChannelsPrice, setTotalChannelsPrice] = useState(0);

  const performActionOnItem = (action, item) => {
    console.log(action, item);
    if (action === "add") {
      setSelectedChannels([...selectedChannels, item.CHANNEL_NAME]);
      setTotalChannelsPrice(parseInt(totalChannelsPrice) + parseInt(item.PMRP));
    } else {
      var index = selectedChannels.indexOf(item.CHANNEL_NAME);
      if (index > -1) {
        selectedChannels.splice(index, 1);
      }
      //   ["hungama", "plus", "star", 6, 8];
    }
    console.log(selectedChannels);
  };

  const fetchChannelList = async () => {
    await axios
      .get("http://192.168.218.197:4000/channelList/")
      .then((res) => {
        if (res.data.status === 200) {
          setChannels(res.data.data);
        } else {
          Navigate(-1);
        }
      })
      .catch((err) => {
        Navigate(-1);
      });
  };

  useEffect(() => {
    fetchChannelList();
  });

  return (
    <>
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
          }}
        >
          {channels.map((item) => {
            return (
              <ChannelCard
                item={item}
                performActionOnItem={performActionOnItem}
              />
            );
          })}
        </div>
      </div>

      <div
        style={{
          backgroundColor: "darkgray",
          width: "100%",
          padding: "1rem",
          color: "white",
          position: "fixed",
          bottom: 0,
          left: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p>Total Channels</p>
          <p>{selectedChannels.length.toString()}</p>
        </div>

        <hr />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p>Total Amount</p>
          <p>{totalChannelsPrice.toString()}</p>
        </div>
      </div>
    </>
  );
}

export default Recharge;
