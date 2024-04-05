import React from "react";
import Logo from "../../../assets/logo";
import Button from "../../atoms/Button";
import ToggleButton from "../../molecules/ToggleButton";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { TiSocialTwitter } from "react-icons/ti";
import { BsLinkedin } from "react-icons/bs";
import { FaSpotify } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
    const {t} = useTranslation();
    const handleClick = () => {
        console.log("le dio click en el footer")
    }

    return (
        <div className="flex container mx-auto justify-evenly items-center bg-white w-full pt-[70px] px-[0px] md:px-[50px] pb-[35px]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
                <div className="flex flex-col justify-between">
                    <Logo />
                    <span><small className="text-[10px]">Agora Partnerships® All Rights Reserved.Reg. U.S. Pat. and TM Off <Link className="text-[#c1285d]" target={"_blank"} to="https://agora2030.org/politica-de-privacidad-agora-partnerships/">Política de Privacidad</Link></small></span>
                </div>
                <div>
                    <ul className="list-none flex flex-col gap-2">
                        <li className="text-[14px]">{t('Quiénes somos')}</li>
                        <li className="text-[14px]">{t('Programas')}</li>
                        <li className="text-[14px]">{t('Impacto')}</li>
                        <li className="text-[14px]">{t('Súmate')}</li>
                        <li className="text-[14px]">{t('Blog')}</li>
                        <li className="text-[14px]">{t('Recursos')}</li>
                        <li className="text-[14px]">{t('Sedes')}</li>
                        <li className="text-[14px]">{t('Change Lab')}</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <Button maxWidth="max-w-[102px]" borderRadius="rounded-3xl" backgroundColor="bg-[#C1285D]" height="h-[23px]"><span className="text-white text-sm">{t('Donar')}</span></Button>
                    <span>{t('Suscribirme al newsletter')}</span>
                    <div>
                        <ToggleButton handleClick={handleClick} />
                    </div>
                </div>
                <div className="flex flex-col justify-between items-center">
                    <div className="grid grid-cols-3 gap-4 justify-items-center w-[165px]">
                        <BsFacebook style={{ fontSize: '18pt' }} />
                        <BsInstagram style={{ fontSize: '18pt' }} />
                        <TiSocialTwitter style={{ fontSize: '18pt' }} />
                        <BsLinkedin style={{ fontSize: '18pt' }} />
                        <FaSpotify style={{ fontSize: '18pt' }} />
                        <BsYoutube style={{ fontSize: '18pt' }} />
                    </div>
                    <span className="text-center"><small>nfo@agora2030.org</small></span>
                </div>
            </div>
        </div>
    )
}

export default Footer;