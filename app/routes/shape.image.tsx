import { useRef, useEffect } from "react";
import Box from "~/components/Box";
import { Toaster } from 'sonner'
import Back from "~/components/Back";

const ImageComponentImpl = ({ imageUrl }: any) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const loadImage = () => {
      const image = new Image();
      import('sonner').then((s) => {
        s.toast.info('image loading')
      })
      image.onload = () => {
        ctx.drawImage(image, 0, 0);
      };
      image.src = imageUrl;
    };

    loadImage();
  }, [imageUrl]);

  return <canvas ref={canvasRef} width={500} height={500} />;
};

function ImageComponent() {
  return (
    <Box title="image">
      <Toaster />
      <ImageComponentImpl imageUrl="https://picsum.photos/500/500" />
      <Back />
    </Box>
  );
}

export default ImageComponent;
