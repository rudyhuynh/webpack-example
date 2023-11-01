import { renderExp } from "../../utils/renderExp";

export const ExponentiationPage = () => {
  return (
    <div>
      <p> {renderExp(2, 5)}</p>
    </div>
  );
};
