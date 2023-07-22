import { WhaleDetails } from "./WhaleDetails";
import { WhaleProvider } from "../context/WhaleContext";
import { WhalesPedigrees } from "./WhalesPedigrees";

const PedigreePage = () => {
  return (
    <WhaleProvider>
      <WhaleDetails />
    </WhaleProvider>
  );
};
export default PedigreePage;
