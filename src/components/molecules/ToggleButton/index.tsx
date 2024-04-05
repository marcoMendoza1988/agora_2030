import React, { useEffect, useState } from "react";
import Button from "../../atoms/Button";
import { useTranslation } from "react-i18next";

interface ToggleButtonProps {
  handleClick?: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ handleClick }) => {
  const [selectedButton, setSelectedButton] = useState(1);
  const { i18n } = useTranslation();
  const lang = localStorage.getItem('language');

  const handleButtonClick = (buttonIndex: number, lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang)

    if (buttonIndex !== selectedButton) {
      setSelectedButton(buttonIndex);
      if (handleClick) {
        handleClick();
      }
    }
  };

  useEffect(() => {
    if(lang){
      handleButtonClick(lang === "es" ? 1 : 2, lang)
    }
  }, [i18n.language]);

  return (
    <div className="flex max-w-fit">
      <Button
        handleClick={() => handleButtonClick(1, 'es')}
        backgroundColor={selectedButton === 1 ? "bg-black" : "bg-white"}
        color={selectedButton === 1 ? "text-white" : "text-black"}
        borderRadius={selectedButton === 1 ? "rounded-l" : ""}
        maxWidth="max-w-[102px]" 
        height="h-[23px]"
      >
        <span>ES</span>
      </Button>
      <Button
        handleClick={() => handleButtonClick(2, 'en')}
        backgroundColor={selectedButton === 2 ? "bg-black" : "bg-white"}
        color={selectedButton === 2 ? "text-white" : "text-black"}
        borderRadius={selectedButton === 2 ? "rounded-r" : ""}
        maxWidth="max-w-[102px]" 
        height="h-[23px]"
      >
        <span>EN</span>
      </Button>
    </div>
  );
};

export default ToggleButton;
