import { useRef, useEffect } from "react";
import Back from "~/components/Back";
import Box from "~/components/Box";

const SquareComponentImpl = ({ x, y, size }: any) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    ctx.fillStyle = "red";
    ctx.fillRect(x, y, size, size);
  }, [x, y, size]);

  return <canvas ref={canvasRef} width={200} height={200} />;
};

function SquareComponent() {
  return (
    <Box title="rectangle">
      <SquareComponentImpl x={0} y={0} size={50} />
      <Back />
    </Box>
  );
}

export default SquareComponent;
