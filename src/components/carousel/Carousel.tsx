import { CCarousel, CCarouselItem } from '@coreui/react'
import { BannerType } from '../../utils/types';
import { NavLink } from "react-router";
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import Banners from '../../assets/banners';

import "./Carousel.css";

const Carousel = () => {
  const { i18n } = useTranslation();
  const carouselRef = useRef(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  const CarouselBanners: Array<BannerType> = [
    {
      image: Banners.Banner1,
      title: i18n.t("principalBanners.betweenVolcanoes.title"),
      description: i18n.t("principalBanners.betweenVolcanoes.description"),
    },
    {
      image: Banners.Banner2,
      title: i18n.t("principalBanners.fishingSport.title"),
      description: i18n.t("principalBanners.fishingSport.description"),
    },
    {
      image: Banners.Banner3,
      title: i18n.t("principalBanners.caribeanSouthCaribean.title"),
      description: i18n.t("principalBanners.caribeanSouthCaribean.description"),
    },
    {
      image: Banners.Banner4,
      title: i18n.t("principalBanners.manuelAntonio.title"),
      description: i18n.t("principalBanners.manuelAntonio.description"),
    },
    {
      image: Banners.Banner5,
      title: i18n.t("principalBanners.wildLife.title"),
      description: i18n.t("principalBanners.wildLife.description"),
    },
  ];

  // Manejar la interacción del usuario para pausar/reanudar el autoplay
  const handleUserInteraction = () => {
    setIsUserInteracting(true);

    // Reanudar el autoplay después de 5 segundos de inactividad
    setTimeout(() => {
      setIsUserInteracting(false);
    }, 1000);
  };

  return (
    <CCarousel
      ref={carouselRef}
      indicators
      transition="crossfade"
      interval={isUserInteracting ? false : 2000} // 2 segundos cuando está en autoplay, pausado cuando el usuario interactúa
      wrap={true} // Permite que el carousel sea infinito
      touch={true} // Habilita gestos táctiles
      onSlid={handleUserInteraction} // Se ejecuta cuando el usuario cambia de slide manualmente
    >
      {CarouselBanners.map((banner, index) => (
        <CCarouselItem key={`carousel-item-${index}`}>
          <section style={{ position: 'relative', textAlign: 'left', color: '#fff' }}>
            <img
              src={banner.image}
              alt={banner.title}
              className={`banner brightness-75 ${index === 2 && 'rotate-180'} w-100 ${index === 4 ? 'object-right' : 'object-center'}`}
              loading={index === 0 ? 'eager' : 'lazy'} // Carga inmediata para la primera imagen
            />
            <section
              style={{
                position: 'absolute',
                top: '13rem',
                left: '10%',
                transform: 'translateY(-50%)',
              }}
            >
              <h1 style={{ fontSize: '2.5rem' }} className='bold max-w-lg'>
                {banner.title}
              </h1>
              <hr className='separator w-50' />
              <p className='italic max-w-lg text-xl my-4'>
                {banner.description}
              </p>
              <NavLink
                to="/categories"
                className='explore-button'
                onClick={handleUserInteraction} // Pausa el carousel cuando se hace click en el enlace
              >
                {i18n.t("exploreMore")} →
              </NavLink>
            </section>
          </section>
        </CCarouselItem>
      ))}
    </CCarousel>
  )
}

export default Carousel;