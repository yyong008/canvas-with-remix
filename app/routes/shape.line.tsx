import { useRef, useEffect } from "react";
import Back from "~/components/Back";

import Box from "~/components/Box";

const LineComponentImpl = ({ x1, y1, x2, y2 }: any) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const drawLine = () => {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = "blue";
      ctx.stroke();
    };

    drawLine();
  }, [x1, y1, x2, y2]);

  return <canvas ref={canvasRef} width={200} height={200} />;
};

function LineComponent() {
  return (
    <Box title="line">
      <LineComponentImpl x1={50} y1={100} x2={150} y2={100} />
      <LineComponentImpl x1={50} y1={150} x2={150} y2={150} />
      <Back />
    </Box>
  );
}

export default LineComponent;
