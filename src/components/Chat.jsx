import React, { useState, useEffect } from "react";
import axios from "axios";
import AllChat from "./AllChat";

const Chat = (props) => {
  const [data, getData] = useState([]);
  let [update, setUpdate] = useState(false);
  const fetch = () => {
    console.log("test");
    axios
      .get("http://127.0.0.1:3000/talk")
      .then((res) => {
        getData(res.data, "checking for invokation");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch();
    props.fetchAgain(fetch);
  }, []);

  return data
    .filter((e) => e.room === props.RoomNumber * 1 && e.message !== undefined)
    .map((element) => {
      return (
        <AllChat
          key={element._id}
          element={element}
          user={props.user}
          length={data.length}
        />
      );
    });
};
//   })

//   // return data.map((e) => {
//   //   return <AllChat key={e._id} element={e} />;
//   // });
// };

export default Chat;
