import React from "react";
import Counter from "../../atoms/Counter";
import { useTranslation } from "react-i18next";

const ImpactComponent:React.FC = () => {
    const {t} = useTranslation();

    return (
        <div className="rounded-2xl 2xl:container w-full bg-[#19417f]">
            <div className="container w-full my-16 mx-auto py-[80px] flex flex-col px-[10px] md:px-[60px] gap-9">
                <span className="text-white text-[16px] flex w-full gap-2 justify-end">{t('Ver más')} <img className="h-[fit-content] w-[18px]" src="https://agora2030.org/wp-content/uploads/2022/10/arrow.up_.forward.circle-1.svg" alt="forward"/></span>
                <div className="flex w-full flex-col md:flex-row gap-6 md:gap-0">
                    <div className="flex flex-col flex-1 w-full md:w-1/3 gap-4">
                        <h2 className="text-white text-[28px]">{t('Impacto')}</h2>
                        <span className="text-white text-sm">{t('Nos comprometemos a la transparencia con los emprendedores y el ecosistema emprendedor en Latinoamérica alineándonos con los Objetivos de Desarrollo Sostenible de las Naciones Unidas.')}</span>
                    </div>
                    <div className="w-full md:w-2/3 flex flex-col md:flex-row gap-6 justify-end">
                        <div className="bg-white py-6 px-2 flex flex-col w-full md:w-[148px] text-center gap-2 rounded-2xl transition-transform duration-300 transform-gpu hover:scale-110">
                            <Counter counter={2300}/>
                            <span className="text-[#19417f] text-[14px]">{t('Emprendedores atendidos')}</span>
                        </div>
                        <div className="bg-white py-6 px-4 flex flex-col w-full md:w-[148px] text-center gap-2 rounded-2xl transition-transform duration-300 transform-gpu hover:scale-110">
                            <Counter counter={329}/>
                            <span className="text-[#19417f] text-[14px]">{t('Catalizadores capacitados')}</span>
                        </div>
                        <div className="bg-white py-6 px-4 flex flex-col w-full md:w-[148px] text-center gap-2 rounded-2xl transition-transform duration-300 transform-gpu hover:scale-110">
                            <Counter counter={23}/>
                            <span className="text-[#19417f] text-[14px]">{t('Países que tenemos incidencia')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImpactComponent;
