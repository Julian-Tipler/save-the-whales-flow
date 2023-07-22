import { Whale } from "./Whale";
import { WhaleProvider } from "./context/WhaleContext";

const PedigreePage = () => {
  return (
    <WhaleProvider>
      <Whale />
    </WhaleProvider>
  );
};
export default PedigreePage;
