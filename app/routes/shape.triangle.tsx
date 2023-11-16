import { useRef, useEffect } from "react";
import Back from "~/components/Back";
import Box from "~/components/Box";

const TriangleComponentImpl = ({ x1, y1, x2, y2, x3, y3 }: any) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const drawTriangle = () => {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.lineTo(x3, y3);
      ctx.closePath();
      ctx.fillStyle = "orange";
      ctx.fill();
    };

    drawTriangle();
  }, [x1, y1, x2, y2, x3, y3]);

  return <canvas ref={canvasRef} width={200} height={200} />;
};

function TriangleComponent() {
  return (
    <Box title="triangle">
      <TriangleComponentImpl x1={0} y1={0} x2={100} y2={100} x3={200} y3={0} />
      <Back />
    </Box>
  );
}

export default TriangleComponent;
