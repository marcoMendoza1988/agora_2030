import React from "react";
import WhatWeDo from "../../organisms/WhatWeDo";
import Cards from "../../organisms/Cards";
import OurAllies from "../../organisms/OurAllies";
import WithSlider from "../../organisms/WhatWeDo/WithSlider";
import CarouselComponent from "../../organisms/Carousel";
import ImpactComponent from "../../organisms/ImpactComponent";
import JobOportunities from "../../organisms/JobOportunities";
import ContactForm from "../../organisms/ContactForm";
import { useTranslation } from "react-i18next";
// import { adjustContrast } from "../../../lib";

const Home: React.FC = () => {
    const { i18n, t } = useTranslation();
    const cards = [
        {
            title: t("title1"),
            description: t("description1"),
            src:"https://agora2030.org/wp-content/uploads/2023/07/Mujer-emprendedora.png",
            bgColorHover: "linear-gradient(90.27deg, #E2663A 2.26%, #EB9B1A 98.84%)"
        },
        {
            title: t("title2"),
            description: t("description2"),
            src:"https://agora2030.org/wp-content/uploads/2023/07/planeacion.png",
            bgColorHover: "linear-gradient(90.27deg, #E2663A 2.26%, #EB9B1A 98.84%)"
        },
        {
            title: t("title3"),
            description: t("description3"),
            src:"https://agora2030.org/wp-content/uploads/2023/07/empresario-levantando-la-mano-e1689204118270.png",
            bgColorHover: "linear-gradient(90.27deg, #E2663A 2.26%, #EB9B1A 98.84%)"
        },
    ]

    const images = [
        "https://agora2030.org/wp-content/uploads/2023/01/Athena-Fundation.jpg",
        "https://agora2030.org/wp-content/uploads/2023/01/Arguidius.jpg",
        "https://agora2030.org/wp-content/uploads/2022/12/BID-Lab-Color_SPA.png", 
        "https://agora2030.org/wp-content/uploads/2022/12/Target-Foundation.jpeg", 
        "https://agora2030.org/wp-content/uploads/2022/12/New-Venture-Fund.png", 
        "https://agora2030.org/wp-content/uploads/2022/12/HIP.png", 
        "https://agora2030.org/wp-content/uploads/2022/12/cenpromype-e1669933554814.jpg", 
        "https://agora2030.org/wp-content/uploads/2023/01/MEDA.jpg", 
        "https://agora2030.org/wp-content/uploads/2023/01/INBIA.jpg", 
        "https://agora2030.org/wp-content/uploads/2023/01/EYElliance.jpg", 
        "https://agora2030.org/wp-content/uploads/2023/01/citibanamex.jpg", 
        "https://agora2030.org/wp-content/uploads/2023/01/Yunus.jpg",
        "https://agora2030.org/wp-content/uploads/2023/01/Holland-Embassy.jpg",
        "https://agora2030.org/wp-content/uploads/2023/01/IREX.jpg",
        "https://agora2030.org/wp-content/uploads/2023/01/Palladium.jpg", 
        "https://agora2030.org/wp-content/uploads/2023/01/Tawingo-fund.jpg", 
        "https://agora2030.org/wp-content/uploads/2023/01/World-Economic-Forum.jpg", 
        "https://agora2030.org/wp-content/uploads/2023/01/Embajada-EEUU-en-mexico.jpg",
        "https://agora2030.org/wp-content/uploads/2023/01/Athena-Fundation.jpg",
        "https://agora2030.org/wp-content/uploads/2023/01/Arguidius.jpg", 
        "https://agora2030.org/wp-content/uploads/2022/12/BID-Lab-Color_SPA.png", 
        "https://agora2030.org/wp-content/uploads/2022/12/Target-Foundation.jpeg"
    ];

    return (
        <div id="home">
            <div className="2xl:container w-full bg-[#ad2c53]">
                {i18n.language === 'en' ?
                    <div className="w-full flex pt-6" style={{ backgroundImage: "url(https://agora2030.org/en/wp-content/uploads/2022/11/Background-2.jpg)" }}>
                        <div className="w-1/2 flex flex-col gap-6 justify-center p-12">
                            <span className="text-white text-3xl leading-[1.37em]">We build inclusive prosperity through <b className="leading-[1.37em]">sustainable entrepreneurs</b></span>
                            <span className="text-white text-lg leading-[1.37em]">We strive for a world in which social and environmental sustainability becomes the true business engine.</span>
                        </div>
                        <div className="w-1/2">
                            <img id="image1" className="w-full max-w-[550px]" src={"https://agora2030.org/en/wp-content/uploads/2022/11/woman-3.png"} alt="juntos contamos" />
                        </div>
                    </div>
                    :
                    <img className="w-full" id="image2" src={"https://agora2030.org/wp-content/uploads/2024/01/Banner-sitio-web-1-jpg.webp"} alt="juntos contamos" />
                }
            </div>
            <div className="flex flex-col container mx-auto w-full pt-[70px] px-[0px] md:px-[50px] pb-[35px] gap-16">
                <WhatWeDo />
                <Cards cards={cards} />
                <WithSlider />
                <OurAllies />
                <div className="flex flex-col gap-8">
                    <div className="flex">
                        <div className="flex flex-col flex-1">
                            <h2 className="text-[#19417f] text-[28px]">{t('Nuestros Financiadores')}</h2>
                        </div>
                    </div>
                    <CarouselComponent images={images}/>
                </div>
            </div>
            <ImpactComponent />
            <JobOportunities />
            <div className="rounded-2xl 2xl:container w-full bg-[#333333]">
                <div className="container w-full my-16 mx-auto py-[80px] flex flex-col px-[0px] md:px-[60px] gap-9">
                    <div className="flex flex-col sm:w-1/2 md:w-1/4 gap-4">
                        <h2 className="text-white text-[28px]">{t('Suscríbete a nuestro newsletter')}</h2>
                    </div>
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;