import React from "react";
import { useTranslation } from "react-i18next";

const WhatWeDo = () => {
    const {t} = useTranslation();

    return (
        <div className="flex flex-col gap-4 md:flex-row md:gap-0">
            <div className="flex flex-col flex-1">
                <h2 className="text-[#19417f] text-[28px]">{t('¿Qué hacemos?')}</h2>
                <span className="text-lg">{t('Calibramos el ecosistema emprendedor de América Latina para crear prosperidad inclusiva para el individuo, la empresa, la comunidad y el medio ambiente.')}</span>
            </div>
            <span className="text-[#19417f] flex-1 text-end text-base flex gap-2 justify-end">{t('Conocer más sobre nuestros programas')} <img className="h-[fit-content] w-[18px]" src="https://agora2030.org/wp-content/uploads/2022/10/arrow.up_.forward.circle.svg" alt="forward"/></span>
        </div>
    )
}

export default WhatWeDo;
