
import React from "react";

interface ImageZoomProps {
  src: string;
  alt: string;
  transition: boolean;
  tag?: string;
}

const ImageZoom: React.FC<ImageZoomProps> = ({ src, alt, transition, tag }) => {
  return (
    <div className="relative w-full h-auto overflow-hidden rounded-lg">
      {tag && <span className="uppercase rounded-3xl absolute bg-[#333333] text-white py-[5px] px-[12px] text-[8pt] z-[1] top-3 left-3">{tag}</span>}
      <img
        src={src}
        alt={alt}
        className={`rounded-lg w-full h-full object-cover transition-transform duration-300 transform-gpu ${transition && 'hover:scale-110'}`}
      />
    </div>
  );
};

export default ImageZoom;