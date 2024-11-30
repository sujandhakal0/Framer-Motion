import BasicTranscation from "./components/BasicTranscation";
import BouncingCircle from "./components/BouncingCircle";
import CombinedTransformations from "./components/CombinedTransformations";
import RotationAminatoin from "./components/RotationAminatoin";
import SequentialTransformation from "./components/SequentialTransformation";
import SkewedTransition from "./components/SkewedTransition";

const App = () => {
  return (
    <div className="flex items-center flex-col ">
      <BasicTranscation />
      <BouncingCircle />
      <RotationAminatoin />
      <SkewedTransition />
      {/* <CombinedTransformations /> */}
      <SequentialTransformation />
    </div>
  );
};
export default App;
