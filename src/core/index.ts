import "./style.css";
import useEnvironment from "./useEnvironment";
import useLights from "./useLights";
import useCamera from "./useCamera";
import useWindow from "./useWindow";
import useRenderer from "./useRenderer";

export default () => {
  const { sizes } = useWindow();
  const { scene, add } = useEnvironment();
  const camera = useCamera(sizes.width / sizes.height);
  const tick = useRenderer(scene, camera);
  const lights = useLights();

  add(...lights);

  return tick;
};
