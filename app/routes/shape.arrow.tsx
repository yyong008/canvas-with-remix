import { useRef, useEffect } from "react";
import Back from "~/components/Back";
import Box from "~/components/Box";

const ArrowComponentImpl = ({ x, y, width, height }: any) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const drawArrow = () => {
      const arrowHeadSize = 10;

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + width, y);
      ctx.lineTo(x + width, y + height / 2 - arrowHeadSize / 2);
      ctx.lineTo(x + width + arrowHeadSize, y + height / 2);
      ctx.lineTo(x + width, y + height / 2 + arrowHeadSize / 2);
      ctx.lineTo(x + width, y + height);
      ctx.lineTo(x, y + height);
      ctx.closePath();
      ctx.fillStyle = "blue";
      ctx.fill();
    };

    drawArrow();
  }, [x, y, width, height]);

  return <canvas ref={canvasRef} width={200} height={200} />;
};

function ArrowComponent() {
  return (
    <Box title="arrow">
      <ArrowComponentImpl x={10} y={100} width={100} height={5} />
      <Back />
    </Box>
  );
}

export default ArrowComponent;
