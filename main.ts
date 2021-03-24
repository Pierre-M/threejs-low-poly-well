import useTick from "@/core";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import useEnvironment from "@/core/useEnvironment";

const tick = useTick();
const { add } = useEnvironment();
const loader = new GLTFLoader();

loader.load("/models/low_poly_well.glb", (e) => {
  e.scene.scale.set(0.06, 0.06, 0.06);
  e.scene.rotation.set(0, -Math.PI * 0.05, 0);
  add(e.scene);
});

tick((elapsedTime, deltaTime) => {});
