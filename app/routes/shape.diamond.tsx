import { useRef, useEffect } from "react";
import Back from "~/components/Back";
import Box from "~/components/Box";

const DiamondComponentImpl = ({ x, y, size }: any) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const drawDiamond = () => {
      ctx.beginPath();
      ctx.moveTo(x, y - size / 2); // 上
      ctx.lineTo(x + size / 2, y); // 右
      ctx.lineTo(x, y + size / 2); // 下
      ctx.lineTo(x - size / 2, y); // 左
      ctx.closePath();
      ctx.fillStyle = "orange";
      ctx.fill();
    };

    drawDiamond();
  }, [x, y, size]);

  return <canvas ref={canvasRef} width={200} height={200} />;
};

function DiamondComponent() {
  return (
    <Box title="diamond">
      <DiamondComponentImpl x={100} y={100} size={50} />
      <DiamondComponentImpl x={100} y={100} size={50} />
      <Back />
    </Box>
  );
}

export default DiamondComponent;
