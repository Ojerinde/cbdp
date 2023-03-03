import { ImSpinner10 } from "react-icons/im";
import "./LoadingSpinner.css";
import Card from "../Card/Card";

const LoadingSpinner = () => {
  return (
    <Card className="spinner__box">
      <ImSpinner10 className="spinner" />
    </Card>
  );
};
export default LoadingSpinner;
