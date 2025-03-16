export const generateFileNames = (basePath: string, totalFrames: number): string[] => {
  return Array.from({ length: totalFrames }, (_, i) =>
    `${basePath}/${String(i + 1).padStart(4, '0')}.png`
  );
};