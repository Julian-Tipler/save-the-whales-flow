import { WhaleDetails } from "./WhaleDetails";
import { WhaleProvider } from "../context/WhaleContext";
import { WhalesPedigrees } from "./WhalesPedigrees";

const PedigreePage = () => {
  return (
    <WhaleProvider>
      <WhaleDetails />
      <WhalesPedigrees />
    </WhaleProvider>
  );
};
export default PedigreePage;
