import { WhaleDetails } from "./WhaleDetails";
import { WhaleProvider } from "../context/WhaleContext";

const PedigreePage = () => {
  return (
    <WhaleProvider>
      <WhaleDetails />
    </WhaleProvider>
  );
};
export default PedigreePage;
