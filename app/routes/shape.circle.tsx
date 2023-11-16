import { useRef, useEffect } from "react";
import Back from "~/components/Back";

import Box from "~/components/Box";

const CircleComponentImpl = ({ x, y, radius }: any) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
  }, [x, y, radius]);

  return <canvas ref={canvasRef} width={200} height={200} />;
};

function CircleComponent() {
  return (
    <Box title="circle">
      <CircleComponentImpl x={100} y={100} radius={50} />
      <CircleComponentImpl x={100} y={100} radius={50} />
      <Back />
    </Box>
  );
}

export default CircleComponent;
