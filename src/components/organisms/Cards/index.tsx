import React from "react";
import ImageZoom from "./ImageZoom";
import Button from "../../atoms/Button";

type CardsProps = {
    cards: Array<any>;
    activeTransition?: boolean;
}

const Cards: React.FC<CardsProps> = ({cards, activeTransition = true}) => {

    return (
        <section className="">
            <div className="container mx-auto w-full">
                <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-col-3 gap-[30px]">
                    {cards.map((num) => <div key={num}>
                        <div className="bg-white rounded-2xl overflow-hidden mb-5">
                            <ImageZoom 
                                src={num.src} 
                                alt="agora" 
                                transition={activeTransition} 
                                tag={num?.tag} />
                            <div className="pt-1 sm:pt-4 md:pt-8 xl:pt-8 text-center">
                                <h3>
                                    <a
                                        href="javascript:void(0)"
                                        className="text-left font-semibold text-dark text-lg sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] mb-4 block hover:text-primary"
                                    >
                                    {num.title} {num?.tag}
                                    </a>
                                </h3>
                                <p className="text-[14px] sm:text-[11px] md:text-[11px] lg:text-[14px] text-left text-body-color leading-relaxed mb-7">
                                    {num.description}
                                </p>
                            </div>
                            <div>
                                {num?.actionButtonText && <Button width="w-auto" borderRadius="rounded-3xl py-1 px-6" backgroundColor="bg-[#c1285d]"><span className="text-white text-sm uppercase">{num?.actionButtonText}</span></Button>}
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </section>
    )
}

export default Cards;
