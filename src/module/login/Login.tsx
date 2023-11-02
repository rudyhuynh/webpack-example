import { Button, Container, TextField } from "@mui/material";
import "./Login.css";
import { renderHaha } from "../../utils/renderExp";

export const Login = () => {
  const onClickLogin = () => {
    location.href = "/landing.html";
  };

  return (
    <div className="login">
      {renderHaha()}
      <Container fixed>
        <TextField fullWidth label="Email" required />
        <TextField fullWidth label="Password" required />
        <div style={{ height: 20 }} />
        <div className="text-center">
          <Button variant="contained" fullWidth onClick={onClickLogin}>
            Log In
          </Button>
        </div>
      </Container>
    </div>
  );
};
