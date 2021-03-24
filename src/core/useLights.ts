import { Color, DirectionalLight, Light, SpotLight } from "three";
import useDebugUI from "./useDebugUI";
import { GUI } from "dat.gui";

const gui = useDebugUI();
const lightGui = gui.addFolder("Lights");

const addLightDebugUI = (
  light: Light,
  params: { color: any },
  gui: GUI,
  prefix: string
) => {
  gui
    .add(light, "intensity")
    .min(0)
    .max(1)
    .step(0.01)
    .name(`${prefix}Intensity`);
  gui.add(light.position, "x").min(-20).max(20).step(0.1).name(`${prefix}X`);
  gui.add(light.position, "y").min(-20).max(20).step(0.1).name(`${prefix}Y`);
  gui.add(light.position, "z").min(-20).max(20).step(0.1).name(`${prefix}Z`);
  gui
    .addColor(params, "color")
    .name(`${prefix}Color`)
    .onChange((c) => {
      light.color = new Color(c);
    });
};

export default () => {
  const moonLightParams = {
    color: 0xadcfff,
  };

  const bulbLightParams = {
    color: 0xe8cfa3,
  };

  const wellLightParams = {
    color: 0xe8cfa3,
  };

  const moonLight = new DirectionalLight(moonLightParams.color, 1);
  moonLight.position.set(5, 5, 5);

  const bulbLight = new DirectionalLight(bulbLightParams.color, 0.38);
  bulbLight.position.set(-5, 3, -5);

  const wellLight = new SpotLight(0xff0000, 1);
  wellLight.position.set(0, -0.4, 0);

  addLightDebugUI(moonLight, moonLightParams, lightGui, "moon");
  addLightDebugUI(bulbLight, bulbLightParams, lightGui, "bulb");
  addLightDebugUI(wellLight, wellLightParams, lightGui, "well");

  return [moonLight, bulbLight, wellLight];
};
