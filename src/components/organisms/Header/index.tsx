import React from "react";
import Menu from "../../molecules/Menu";
import Button from "../../atoms/Button";
import ToggleButton from "../../molecules/ToggleButton";
import Logo from "../../../assets/logo";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
    const { t } = useTranslation();
    const handleClick = () => {
        console.log("Button clicked!");
    };
    
    return (
        <header className="flex h-[85px] sticky z-[999999] w-full top-0">
            <div className="flex gap-4 2xl:container mx-auto p-3 justify-between md:justify-evenly items-center absolute bg-white w-full shadow-lg shadow-gray-500/50">
                <Logo />
                <Menu />
                <div className="flex gap-4 flex-col md:flex-row">
                    <Button maxWidth="max-w-[102px]" borderRadius="rounded-3xl" backgroundColor="bg-[#C1285D]" height="h-[23px]"><span className="text-white text-sm">{t('Donar')}</span></Button>
                    <div>
                        <ToggleButton handleClick={handleClick} />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;