import { CCarousel, CCarouselItem } from '@coreui/react'
import Banner01 from '../../assets/banners/Banner-1.jpeg';
import Banner02 from '../../assets/banners/Banner-2.jpg';
import Banner03 from '../../assets/banners/Banner-3.jpeg';
import Banner04 from '../../assets/banners/Banner-4.jpg';
import Banner05 from '../../assets/banners/Banner-5.jpeg';
import { BannerType } from '../../utils/types';

import "./Carousel.css";

const CarouselBanners: Array<BannerType> = [
  {
    image: Banner01,
    title: 'Entre volcanes \ny naturaleza \nexhuberante',
    description: 'Descubra el impresionante\nvolcan Arenal y la enorme\nbiodiverdodad de Monteverde',
    goToLink: '/expedicion-fotografica',
  },
  {
    image: Banner02,
    title: 'Pesca deportiva\nen el Pacifico Sur\ny Costarricense',
    description: 'Explore la belleza\nmarina de Costa Rica',
    goToLink: '/expedicion-fotografica',
  },
  {
    image: Banner03,
    title: 'Descubra \nel Caribe Sur \nCostarricense',
    description: 'La riqueza cultural y\nla biodiversidad del\nCaribe le espera',
    goToLink: '/expedicion-fotografica',
  },
  {
    image: Banner04,
    title: 'Disfrute \nde Manuel Antonio y\nBahia Ballena',
    description: 'Playas paradisiacas\ny avistamiento\nde ballenas',
    goToLink: '/expedicion-fotografica',
  },
  {
    image: Banner05,
    title: 'Expedición Fotográfica:\nVida Silvestre \nen Corcovado',
    description: 'Capture la belleza\nnatural de nuestro pais',
    goToLink: '/expedicion-fotografica',
  },
];

const Carousel = () => (
  <CCarousel indicators transition="crossfade" interval={false}>
    {CarouselBanners.map((banner, index) => (
      <CCarouselItem key={index}>
        <section style={{ position: 'relative', textAlign: 'left', color: '#fff' }}>
          <img
            src={banner.image}
            alt={banner.title}
            className={`banner brightness-75 ${index === 2 && 'rotate-180'} ${index === 4 && 'scale-x-[-1]'} w-100`}
          />
          <section
            style={{
              position: 'absolute',
              top: '13rem',
              left: '10%',
              transform: 'translateY(-50%)',
            }}
          >
            <h1 style={{ fontSize: '2.5rem', whiteSpace: 'pre-wrap' }} className='bold'>
              {banner.title}
            </h1>
            <hr className='separator w-50' />
            <p style={{ fontSize: '1.25rem', margin: '1rem 0' }} className='whitespace-pre-wrap italic'>
              {banner.description}
            </p>
            <button className='explore-button' >
              Explorar más →
            </button>
          </section>
        </section>
      </CCarouselItem>
    ))}
  </CCarousel>
)

export default Carousel;