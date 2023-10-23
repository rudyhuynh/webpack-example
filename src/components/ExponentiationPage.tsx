import { renderExp } from "../utils/renderExp";
import _ from "lodash";

export const ExponentiationPage = () => {
  return (
    <div>
      <p> {renderExp(2, 5)}</p>
      <p> 2 &times; 5 = {_.multiply(2, 5)}</p>
    </div>
  );
};
