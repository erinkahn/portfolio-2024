import { useRef } from "react";
import type { AboutImageData } from "../../constants/data";
import useImageOnLoad from "../../hooks/useImageOnLoad";

interface AboutImageProps {
  aboutProp: AboutImageData;
}

export default function AboutImage({ aboutProp }: AboutImageProps) {
  const { handleImageOnLoad, imageStyles } = useImageOnLoad();
  const imageRef = useRef<HTMLDivElement>(null);

  return (
    <div className="img-wrapper" style={imageStyles.wrapper} ref={imageRef}>
      <img
        className="about-img"
        src={aboutProp.src}
        alt={aboutProp.alt}
        onLoad={handleImageOnLoad}
      />
    </div>
  );
}
