import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const LoaderIcon:React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-spin">
        <AiOutlineLoading3Quarters className="text-lg" />
      </div>
    </div>
  );
};

export default LoaderIcon;
