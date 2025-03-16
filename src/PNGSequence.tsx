import { useEffect, useRef } from "react";

interface PNGSequenceProps {
  images: string[];
  width?: number;
  height?: number;
  fps?: number;
}

const PNGSequence = ({ images, width = 800, height = 600, fps = 30 }: PNGSequenceProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameIndex = useRef(0);
  const loadedImages = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Preload images
    images.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedImages.current[index] = img;
      };
    });

    let animationFrameId: number;
    const interval = 1000 / fps;

    const drawFrame = () => {
      if (loadedImages.current[frameIndex.current]) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(loadedImages.current[frameIndex.current], 0, 0, canvas.width, canvas.height);
        frameIndex.current = (frameIndex.current + 1) % images.length;
      }
      animationFrameId = window.setTimeout(() => requestAnimationFrame(drawFrame), interval);
    };

    drawFrame();

    return () => {
      window.clearTimeout(animationFrameId);
    };
  }, [images, fps]);

  return (
    // @ts-ignore
    <canvas ref={canvasRef} width={width} height={height} style={{ backgroundColor: "transparent" }} />
  );
};

export default PNGSequence;