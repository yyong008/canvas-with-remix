import { useRef, useEffect } from "react";
import Back from "~/components/Back";
import Box from "~/components/Box";

const StarComponentImpl = ({ x, y, radius, spikes }: any) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const drawStar = () => {
      let rotation = (Math.PI / 2) * 3;
      let xPoint = x;
      let yPoint = y;
      let step = Math.PI / spikes;

      ctx.beginPath();
      ctx.moveTo(x, y - radius);

      for (let i = 0; i < spikes; i++) {
        xPoint = x + Math.cos(rotation) * radius;
        yPoint = y + Math.sin(rotation) * radius;
        ctx.lineTo(xPoint, yPoint);
        rotation += step;

        xPoint = x + Math.cos(rotation) * (radius * 0.5);
        yPoint = y + Math.sin(rotation) * (radius * 0.5);
        ctx.lineTo(xPoint, yPoint);
        rotation += step;
      }

      ctx.lineTo(x, y - radius);
      ctx.closePath();
      ctx.fillStyle = "purple";
      ctx.fill();
    };

    drawStar();
  }, [x, y, radius, spikes]);

  return <canvas ref={canvasRef} width={200} height={200} />;
};

function StarComponent() {
  return (
    <Box title="star">
      <StarComponentImpl x={100} y={100} radius={50} spikes={5} />
      <StarComponentImpl x={100} y={100} radius={50} spikes={5} />
      <Back />
    </Box>
  );
}

export default StarComponent;
