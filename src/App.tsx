import React from "react";
import { Container, Typography, Box } from "@mui/material";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          할 일 관리
        </Typography>
        <TodoList />
      </Box>
    </Container>
  );
}

export default App;
