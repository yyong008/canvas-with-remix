import { useRef, useEffect } from "react";
import Back from "~/components/Back";
import Box from "~/components/Box";

const VideoComponentImpl = ({ videoUrl }: any) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handePlay = () => {
    const video = document.querySelector(".video")! as HTMLVideoElement;
    video?.play();
  };

  const handlePause = () => {
    const video = document.querySelector(".video")! as HTMLVideoElement;
    video?.pause();
  };

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const video = document.createElement("video");

    video.className = "video";
    video.style.width = "320px";
    video.style.height = "176px";
    video.style.visibility = "hidden";

    const loadVideo = () => {
      video.src = videoUrl;
      video.autoplay = false;

      video.onloadedmetadata = () => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        drawVideo();
      };
    };

    loadVideo();

    const drawVideo = () => {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      requestAnimationFrame(drawVideo);
    };

    if (!document.querySelector(".video")) {
      document.body.appendChild(video);
    }

    return () => {
      video.pause();
      document.body.removeChild(video);
    };
  }, [videoUrl]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <canvas ref={canvasRef} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "10px 0px",
        }}
      >
        <button onClick={handePlay} style={{ margin: "0px 10px 0px 0px" }}>
          play
        </button>
        <button onClick={handlePause}>pause</button>
      </div>
    </div>
  );
};

function VideoComponent() {
  return (
    <Box title="video">
      <VideoComponentImpl videoUrl="https://www.w3schools.com/html/mov_bbb.mp4" />
      <Back />
    </Box>
  );
}

export default VideoComponent;
