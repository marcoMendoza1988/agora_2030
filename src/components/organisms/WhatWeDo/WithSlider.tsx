import Cards from "../Cards";
import { useTranslation } from "react-i18next";

const WithSlider = () => {
    const {t} = useTranslation();
    
    const cards2 = [
        {
            title: t("title4"),
            description: t("description4"),
            src:"https://agora2030.org/wp-content/uploads/2023/03/Juntas-Contamos-portada-1-jpg.webp",
            bgColorHover: "linear-gradient(90.27deg, #E2663A 2.26%, #EB9B1A 98.84%)",
            tag:t("CONVOCATORIA ABIERTA"),
            actionButton: '#',
            actionButtonText: t('CONOCER MAS')
        },
        {
            title: t("title5"),
            description: t("description5"),
            src:"https://agora2030.org/wp-content/uploads/2024/03/Francis-Castillo-scaled.webp",
            bgColorHover: "linear-gradient(90.27deg, #E2663A 2.26%, #EB9B1A 98.84%)",
            tag:t("BLOG"),
            actionButton: '#',
            actionButtonText: t('CONOCER MAS')
        },
        {
            title: t("title6"),
            description: t("description6"),
            src:"https://agora2030.org/wp-content/uploads/2024/03/Agora-Partnership-y-Change-Lab-jpg.webp",
            bgColorHover: "linear-gradient(90.27deg, #E2663A 2.26%, #EB9B1A 98.84%)",
            tag:t("SALA DE PRENSA"),
            actionButton: '#',
            actionButtonText: t('CONOCER MAS')
        },
    ]

    return (
        <>
            <div className="flex flex-col flex-1">
                <h2 className="text-[#19417f] text-[28px]">{t('¿Qué hacemos?')}</h2>
            </div>
            <Cards cards={cards2} activeTransition={false} />
        </>
    )
}

export default WithSlider;
