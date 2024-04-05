import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

type CarouselProps = {
  images: string[]
}

const CarouselComponent:React.FC<CarouselProps> = ({images}) => {

  return (
  <Carousel 
    responsive={responsive} 
    autoPlay={true}
    infinite={true}
    autoPlaySpeed={3000}
    removeArrowOnDeviceType={["tablet", "mobile"]}
  >
    {images.map(img => <div><img src={img} className='max-w-[150px]' alt='aliances' /></div>)}
  </Carousel>
  )
}

export default CarouselComponent;
