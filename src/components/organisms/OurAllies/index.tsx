import React from "react";
import CarouselComponent from "../Carousel";
import { useTranslation } from "react-i18next";

const OurAllies:React.FC = () => {
    const {t} = useTranslation();

    const images = [
        "https://agora2030.org/wp-content/uploads/2022/12/cenpromype-e1669933554814.jpg",
        "https://agora2030.org/wp-content/uploads/2023/01/Center-for-inclusive-growth.jpg",
        "https://agora2030.org/wp-content/uploads/2022/10/logo.png",
        "https://agora2030.org/wp-content/uploads/2022/10/logo-1.png",
        "https://agora2030.org/wp-content/uploads/2022/10/logo-2.png",
        "https://agora2030.org/wp-content/uploads/2022/10/logo-3.png",
        "https://agora2030.org/wp-content/uploads/2022/12/Walmart-e1677101327960.jpg",
        "https://agora2030.org/wp-content/uploads/2022/12/pricesmart-e1669933319823.jpg",
        "https://agora2030.org/wp-content/uploads/2022/12/pretmex-e1669933344816.jpg",
        "https://agora2030.org/wp-content/uploads/2022/12/mercado-libre-e1677101404816.jpg",
        "https://agora2030.org/wp-content/uploads/2022/12/DRIP-capital-e1669933431319.jpg",
        "https://agora2030.org/wp-content/uploads/2022/12/kUESKI-e1669933253233.jpg",
        "https://agora2030.org/wp-content/uploads/2022/10/logo-1.png",
        "https://agora2030.org/wp-content/uploads/2022/12/Lendera-e1669933467143.jpg",
        "https://agora2030.org/wp-content/uploads/2022/10/logo.png",
        "https://agora2030.org/wp-content/uploads/2022/12/cenpromype-e1669933554814.jpg",
        "https://agora2030.org/wp-content/uploads/2023/01/Center-for-inclusive-growth.jpg"
    ];

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-0">
                <div className="flex flex-col flex-1">
                    <h2 className="text-[#19417f] text-[28px]">{t('Nuestros aliados')}</h2>
                    <span className="text-lg">
                        <p>{t('Conoce a las organizaciones que nos acompañan por una sociedad más inclusiva y en sintonía con el ambiente.')}</p>
                        <p>{t('Contáctate para conocer más sobre cómo colaborar con Agora Partnerships.')}</p>
                    </span>
                </div>
                <span className="text-[#19417f] flex-1 text-end text-base flex gap-2 justify-end">{t('Súmate como aliado')}<img className="h-[fit-content] w-[18px]" src="https://agora2030.org/wp-content/uploads/2022/10/arrow.up_.forward.circle.svg" alt="forward"/></span>
            </div>
            <CarouselComponent images={images}/>
        </div>
    )
}

export default OurAllies;
