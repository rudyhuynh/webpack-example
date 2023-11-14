import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import "./Landing.css";
import { Card, CardContent } from "@mui/material";

const navigate = (to: string) => {
  location.href = to;
};

export function Landing() {
  return (
    <div className="landing">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Multi Entry App
          </Typography>
          <Button color="inherit" onClick={() => (location.href = "/")}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <div className="landing-body">
        <Card className="card" onClick={() => navigate("/app1")}>
          <CardContent>
            <Typography variant="h5" component="div">
              App 1
            </Typography>
          </CardContent>
        </Card>
        <Card className="card" onClick={() => navigate("/app2")}>
          <CardContent>
            <Typography variant="h5" component="div">
              App 2
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
