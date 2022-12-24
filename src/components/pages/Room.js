import { useEffect, useState } from "react";

import {
  OutlinedInput,
  Box,
  Typography,
  InputAdornment,
  IconButton,
  Card,
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";

import { io } from "socket.io-client";

import "./Styles/room.css";

const Room = () => {
  const [socket, setSocket] = useState(null);
  const [code, setCode] = useState("");
  const [showCode, setShowCode] = useState([]);

  useEffect(() => {
    setSocket(io("http://localhost:4000"));
  }, []);

  useEffect(() => {
    if (!socket) return;
    socket.on("code-from-server", (data) => {
      setShowCode((prev) => [...prev, data.code]);
    });
  }, [socket]);

  function handleForm(e) {
    e.preventDefault();
    socket.emit("send-code", { code });
    setCode("");
  }

  return (
    <Card>
      <Box className="roomContainer" sx={{ marginBottom: 5 }}>
        {showCode.map((code, index) => {
          return <Typography key={index}>{code}</Typography>;
        })}
      </Box>
      <Box component="form" onSubmit={handleForm}>
        <OutlinedInput
          size="small"
          placeholder="Write your Code here"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton type="submit" edge="end">
                <SendIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </Box>
    </Card>
  );
};

export default Room;
