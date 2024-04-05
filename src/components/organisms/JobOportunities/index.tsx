import React, { useEffect } from "react";
import Button from "../../atoms/Button";
import Cards from "../Cards";
import { useTranslation } from "react-i18next";

const JobOportunities:React.FC = () => {
    const {t} = useTranslation();
    const cards2 = [
        {
            title: "Diseñador Gráfico Freelance",
            description: "Buscamos un/a Diseñador/a Gráfico con al menos 3 años de experiencia en diseño de presentaciones, materiales educativos, brochures, y otros materiales asociados a productos educativos digitales.",
            src:"https://agora2030.org/wp-content/uploads/2024/02/Disenador-freelance-1024x716.webp",
            bgColorHover: "linear-gradient(90.27deg, #E2663A 2.26%, #EB9B1A 98.84%)",
            tag:t("OPORTUNIDAD LABORAL"),
            actionButton: '#',
            actionButtonText: t('CONOCER MAS') 
        },
        {
            title: "Data Engineer (Ingeniero/a de Datos)",
            description: "Buscamos un/a Data Engineer (Ingeniero de Datos) que contribuya al desarrollo, implementación y mantenimiento de un sistema de gestión de datos eficiente, eficaz y robusto",
            src:"https://agora2030.org/wp-content/uploads/2024/02/Data-engineer-1024x684.webp",
            bgColorHover: "linear-gradient(90.27deg, #E2663A 2.26%, #EB9B1A 98.84%)",
            tag:t("OPORTUNIDAD LABORAL"),
            actionButton: '#',
            actionButtonText: t('CONOCER MAS')
        },
        {
            title: "Gerente de Alianzas",
            description: "Buscamos un/una profesional con experiencia y habilidades en la construcción y gestión de alianzas comerciales y estratégicas con múltiples tipos de organizaciones",
            src:"https://agora2030.org/wp-content/uploads/2024/02/Gerente-de-Alianzas-1024x684.webp",
            bgColorHover: "linear-gradient(90.27deg, #E2663A 2.26%, #EB9B1A 98.84%)",
            tag:t("OPORTUNIDAD LABORAL"),
            actionButton: '#',
            actionButtonText: t('CONOCER MAS')
        },
    ]

    useEffect(() => {
        // fetch('https://250e4bfeeb7e4aada88a5a79baddca08.api.mockbin.io/').then(res => res.json()).then(res => console.log(res));
    }, []);

    return (
        <div className="container mx-auto w-full pt-[70px] px-[0px] md:px-[50px] pb-[35px] flex flex-col gap-9">
            <div className="flex flex-col md:flex-row flex-1 w-full gap-4 md:gap-0">
                <h2 className="text-[#19417f] text-[28px] w-full md:w-1/2 flex justify-center md:justify-start">{t('Oportunidades Laborales')}</h2>
                <Button backgroundColor="bg-[#c1285d] w-1/2 mx-auto md:mx-[inherit]" borderRadius="rounded-3xl"><span className="text-[15px]">Conoce todas nuestras vacantes</span></Button>
            </div>
            <Cards cards={cards2} activeTransition={false} />
        </div>
    )
}

export default JobOportunities;

