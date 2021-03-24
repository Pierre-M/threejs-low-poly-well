import { Color, Fog, Object3D, Scene } from "three";
import useDebugUI from "./useDebugUI";

const gui = useDebugUI();
const sceneDebug = gui.addFolder("Scene");

const sceneParams = {
  envColor: 0x666565,
};

const scene = new Scene();
scene.background = new Color(sceneParams.envColor);

const fog = new Fog(sceneParams.envColor, 2, 3.6);

scene.fog = fog;

sceneDebug.addColor(sceneParams, "envColor").onChange((c) => {
  const color = new Color(c);
  scene.background = color;
  fog.color = color;
});

sceneDebug.add(fog, "near").min(0).max(20).name("fogNear");
sceneDebug.add(fog, "far").min(0).max(20).step(0.001).name("fogFar");

export default () => {
  return {
    scene,
    add: (...obj: Object3D[]) => scene.add(...obj),
  };
};
