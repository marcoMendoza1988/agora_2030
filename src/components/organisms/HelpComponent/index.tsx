import React, { useState } from "react";
import { GrWheelchair } from "react-icons/gr";
import { FaSearchPlus } from "react-icons/fa";
import { FaSearchMinus } from "react-icons/fa";
import { GiMetalScales } from "react-icons/gi";
import { ImContrast } from "react-icons/im";
import { AiOutlineEye } from "react-icons/ai";
// import { FaRegLightbulb } from "react-icons/fa6";
import { AiOutlineLink } from "react-icons/ai";
import { AiOutlineReload } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { 
  adjustContrast, 
  adjustFontSize, 
  grayScale, 
  negativeContrast, 
  reset, 
  underlineLinks 
} from "../../../lib";

const HelpComponent: React.FC = () => {
  const [showDiv, setShowDiv] = useState(false);
  const [ turnOnScale, setTurnOnScale ] = useState(false);
  const [ turnOnContrast, setTurnOnContrast ] = useState(false);
  const [ turnOnNegativeContrast, setTurnOnNegativeContrast ] = useState(false);
  const [isUnderlineEnabled, setIsUnderlineEnabled] = useState(false);
  const [countSize, setCountSize] = useState(0);
  const {t} = useTranslation();
  const elementsFontSizeAdjust = ["li","span","p", "a", "button"];
  
  const handleButtonClick = () => {
    setShowDiv(!showDiv);
  };

  return (
    <div className={`sticky left-0 top-1/4 transform -translate-y-1/2 z-[9999]`}>
        <div>
            <button
                className={`${
                showDiv ? "left-44" : "left-0"
                } absolute top-1/6 transform -translate-y-1/6 bg-[#4054b2] hover:bg-blue-700 text-white font-bold py-4 px-4 rounded focus:outline-none transition duration-700 ease-in-out`}
                onClick={handleButtonClick}
            >
                <GrWheelchair  style={{ fontSize: '18pt' }} className="inline-block mr-2"  />
            </button>
        </div>
      {showDiv && (
        <div className="p-5 bg-gray-200 w-44 h-400 absolute left-0 top-1/6 transform -translate-y-1/6 transition duration-700 ease-in-out border-[#19417f] border-2">
            <div className="flex flex-col gap-6 overflow-auto h-[100%] max-h-[470px]">
                <span className="text-lg text-center">{t('Herramientas de accesibilidad')}</span>
                <ul className="text-sm flex flex-col gap-4">
                    <li className="flex gap-2 items-center cursor-pointer" onClick={() => {
                      if(countSize < 3){
                        setCountSize( countSize + 1);
                        adjustFontSize(elementsFontSizeAdjust, true)
                      }
                    }}><FaSearchPlus style={{ fontSize: '18pt' }} /> {t('Aumentar texto')}</li>
                    <li className="flex gap-2 items-center cursor-pointer" onClick={() => {
                      if(countSize !== 0){
                        setCountSize( countSize - 1);
                        adjustFontSize(elementsFontSizeAdjust, false)
                      }
                    }}><FaSearchMinus style={{ fontSize: '18pt' }} /> {t('Disminuir texto')}</li>
                    <li className="flex gap-2 items-center cursor-pointer" onClick={() => {
                      grayScale('root', !turnOnScale);
                      setTurnOnScale(!turnOnScale)
                    }}><GiMetalScales style={{ fontSize: '18pt' }} /> {t('Escala de grises')}</li>
                    <li className="flex gap-2 items-center cursor-pointer" onClick={() => {
                      if(!turnOnContrast){
                        adjustContrast('root', 1.6)
                      }else{
                        adjustContrast('root', 1)
                      }
                      setTurnOnContrast(!turnOnContrast)
                    }}><ImContrast style={{ fontSize: '18pt' }} /> {t('Alto contraste')}</li>
                    <li className="flex gap-2 items-center cursor-pointer" onClick={() => {
                      negativeContrast('root', !turnOnNegativeContrast);
                      
                      setTurnOnNegativeContrast(!turnOnNegativeContrast)
                    }}><AiOutlineEye style={{ fontSize: '18pt' }} /> {t('Contraste negativo')}</li>
                    {/* <li className="flex gap-2 items-center cursor-pointer"><FaRegLightbulb style={{ fontSize: '18pt' }} /> {t('Fondo claro')}</li> */}
                    <li className="flex gap-2 items-center cursor-pointer" onClick={() => {
                      underlineLinks('a', !isUnderlineEnabled);
                      setIsUnderlineEnabled(!isUnderlineEnabled);
                    }}><AiOutlineLink style={{ fontSize: '18pt' }} /> {t('Subrayar enlaces')}</li>
                    <li className="flex gap-2 items-center cursor-pointer" onClick={()=>{
                      reset(elementsFontSizeAdjust);
                      setTurnOnNegativeContrast(false)
                      negativeContrast('root', false);
                      adjustContrast('root', 1)
                      setTurnOnContrast(false);
                      grayScale('root', false);
                      setTurnOnScale(false)
                    }}><AiOutlineReload style={{ fontSize: '18pt' }} /> {t('Restablecer')}</li>
                </ul>
            </div>
        </div>
      )}
    </div>
  );
};

export default HelpComponent;
