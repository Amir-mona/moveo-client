import { useEffect, useState } from "react";

import { Button, TextField, Box, Container } from "@mui/material";

import { io } from "socket.io-client";

// import Header from "./components/Header";

function App() {
  const [socket, setSocket] = useState(null);
  const [code, setCode] = useState("");

  useEffect(() => {
    setSocket(io("http://localhost:4000"));
  }, []);

  useEffect(() => {
    if (!socket) return;
    socket.on("code-from-server", (data) => {
      console.log("code recieved", data);
    });
  }, [socket]);

  function handleForm(e) {
    e.preventDefault();
    socket.emit("send-code", { code });
    setCode("");
  }

  return (
    <div>
      <Box component="form" onSubmit={handleForm}>
        <TextField
          size="small"
          label="Write your Code"
          variant="outlined"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <Button variant="text" type="submit">
          send
        </Button>
      </Box>
    </div>
  );
}

export default App;
