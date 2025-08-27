import axios from "axios";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [msg, setMsg] = useState("");
  useEffect(() => {
    axios
      .get("/api/health")
      .then(({ data }) => setMsg(data.msg))
      .catch((e) => {
        console.log(e);
        setMsg("Server is down!");
      });
  }, []);
  return (
    <div>
      <h1>Hello World!</h1>
      <p>{msg}</p>
    </div>
  );
}
