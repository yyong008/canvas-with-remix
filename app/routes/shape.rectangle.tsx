import { useEffect, useRef } from "react";
import Back from "~/components/Back";
import Box from "~/components/Box";

const RectangleComponentImpl = ({ x, y, width, height }: any) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    ctx.fillStyle = "blue";
    ctx.fillRect(x, y, width, height);
  }, [x, y, width, height]);

  return <canvas ref={canvasRef} width={200} height={200} />;
};

function RectangleComponent() {
  return (
    <Box title="rectangle">
      <RectangleComponentImpl x={10} y={10} width={150} height={100} />
      <Back />
    </Box>
  );
}

export default RectangleComponent;
