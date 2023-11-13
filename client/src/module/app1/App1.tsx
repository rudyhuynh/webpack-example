import { Typography } from "@mui/material";
import { renderExp } from "../../utils/renderExp";

export const App1 = () => {
  return (
    <div className="text-center">
      <div style={{ height: 20 }} />
      <Typography variant="h5" component="div">
        This is App No. 1 ({renderExp(2, 5)})
      </Typography>
    </div>
  );
};
