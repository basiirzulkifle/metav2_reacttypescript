import { useRef, useState } from "react";

import { Stack } from "@mui/material";

import {
  Circle,
  DirectionalLight,
  Dummy,
  Cylinder,
  Torus,
  Find,
  Group,
  HTML,
  Model,
  Setup,
  Stats,
  ThirdPersonCamera,
  Trigger,
  LingoEditor,
  useWindowSize,
  World,
} from "lingo3d-react";

import LightArea from "../component/World/LightArea";
import { panelObj } from "../../public/dummy/dummy";


const Game = () => {
  const { width } = useWindowSize();
  const dummyRef = useRef(null);
  const [running, setRunning] = useState(false);
  const [arrowPosition, setArrowPosition] = useState({ x: 0, y: 0, z: 0 });

  //player movement
  const handleClick = (e) => {
    const dummy = dummyRef.current;
    if (!dummy) return;

    setArrowPosition(e.point);
    dummy.lookTo(e.point.x, undefined, e.point.z, 0.1);
    dummy.moveTo(e.point.x, undefined, e.point.z, 14);
    setRunning(true);

    dummy.onMoveToEnd = () => {
      setRunning(false);
    };
  };

  return (
    <>
      <World>
        {/* <LingoEditor /> */}
        {/* <Library /> */}
        {/* <Toolbar /> */}
        {/* <Editor /> */}
        <Stats />
        <Setup
          defaultLightScale={false}
          pixelRatio={5}
        />

        <LightArea />

        <Model
          physics="map"
          width={245.36}
          depth={245.36}
          scaleX={20}
          scaleY={20}
          scaleZ={20}
          // y={2516.33}
          x={0}
          y={0}
          z={0}
          scale={70}
          src="maps/tunnel_baked.glb"
          animation="Object_48Action.002"
          onClick={handleClick}
        >

          {panelObj?.map((item, idTv) => {
            return (
              <>
                <Find
                  key={idTv}
                  name={item?.name}
                  bloom={item?.bloom}
                  // texture={item?.texture}
                  // texture={`${viteBaseUrl}/${item?.texture}`}
                  textureFlipY={item?.textureFlipY}
                  textureRotation={
                    item?.textureRotation
                  }
                  videoTexture={`/${item?.videoTexture}`}
                  color={item?.color}
                  emissiveColor="#626262"
                  emissiveIntensity={0.3}
                  onClick={(e) => {
                    movePlayer(e)
                  }}
                ></Find>
              </>
            )
          })}



          <Find bloom name="Line001" color="#ffffff" />
          <Find bloom name="Box050" color="#ffffff" />
          <Find bloom name="Box057" color="#ffffff" />
          <Find bloom name="ceilinglight" color="#ffffff" />
          <Find bloom name="Box050" color="#ffffff" />
          <Find bloom name="Box057" color="#ffffff" />
          <Find bloom name="Box058" color="#ffffff" />

        </Model>

        <ThirdPersonCamera
          mouseControl={"drag"}
          active={true}
          lockTargetRotation={false}
          fov={width < 640 ? 110 : 90}
          enableDamping
          innerY={90}
          innerZ={150}
          innerX={70}
          y={100}
          // near={0.01}
          zoom={1}
        >
          <Dummy
            id="player"
            name="player"
            ref={dummyRef}
            scale={3.8}
            src="3dCharacter/new/character.fbx"
            physics="character"
            animations={{
              idle: "3dCharacter/new/BreathingIdle.fbx",
              running: "3dCharacter/new/Running.fbx",
            }}
            animation={running ? "running" : "idle"}
            width={50}
            depth={50}
            rotationY={69.74}

            x={0}
            y={0}
            z={0}
          />
          {/* <DirectionalLight intensity={0.4} color="white"></DirectionalLight> */}
        </ThirdPersonCamera>
        {running && (
          <>
            <Group>
              <Torus
                x={arrowPosition.x}
                y={arrowPosition.y + 10}
                z={arrowPosition.z}
                height={100}
                depth={100}
                width={72.99}
                emissiveColor="#ff0000"
                color="#ff4e4e"
                rotationX={90}
                animation={{
                  scale: [0, 1, 1, 0],
                }}
                scaleX={0.21}
                scaleY={0.24}
                scaleZ={0.13}
                normalScale={{ x: 1, y: 1 }}
              />
              <Torus
                x={arrowPosition.x}
                y={arrowPosition.y + 10}
                z={arrowPosition.z}
                height={100}
                depth={100}
                width={72.99}
                emissiveColor="#ff0000"
                color="#ff4e4e"
                rotationX={90}
                animation={{
                  scale: [0, 1, 1, 0],
                }}
                scaleX={0.5}
                scaleY={0.5}
                scaleZ={1.64}
                normalScale={{ x: 1, y: 1 }}
              />
              <Cylinder
                bloom
                x={arrowPosition.x}
                y={arrowPosition.y + 10}
                z={arrowPosition.z}
                height={200}
                width={72.99}
                depth={100}
                emissiveColor="#ff0000"
                color="#ff4e4e"
                animation={{
                  scale: [0, 0.09, 0.05, 0],
                }}
                scaleX={0.02}
                scaleY={0.46}
                scaleZ={0.03}
                normalScale={{ x: 1, y: 1 }}
              />
            </Group>
          </>
        )}


      </World>
    </>
  );
};

export default Game;
