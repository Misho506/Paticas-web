import { CCarousel, CCarouselItem } from '@coreui/react'
import { BannerType } from '../../utils/types';
import { NavLink } from "react-router";
import { useTranslation } from 'react-i18next';

import "./Carousel.css";

const Carousel = () => {
  const { i18n } = useTranslation();

  const CarouselBanners: Array<BannerType> = [
    {
      image: "https://res.cloudinary.com/drbdst7hg/image/upload/v1737010424/Banner-1_kqbwsj.jpg",
      title: i18n.t("principalBanners.betweenVolcanoes.title"),
      description: i18n.t("principalBanners.betweenVolcanoes.description"),
    },
    {
      image: "https://res.cloudinary.com/drbdst7hg/image/upload/v1737010423/Banner-2_vmvmgr.jpg",
      title: i18n.t("principalBanners.fishingSport.title"),
      description: i18n.t("principalBanners.fishingSport.description"),
    },
    {
      image: "https://res.cloudinary.com/drbdst7hg/image/upload/v1737010425/Banner-3_v9jjjz.jpg",
      title: i18n.t("principalBanners.caribeanSouthCaribean.title"),
      description: i18n.t("principalBanners.caribeanSouthCaribean.description"),
    },
    {
      image: "https://res.cloudinary.com/drbdst7hg/image/upload/v1737004885/9._Tortugas_y_ballenas_PORTADA_afkrf3.jpg",
      title: i18n.t("principalBanners.manuelAntonio.title"),
      description: i18n.t("principalBanners.manuelAntonio.description"),
    },
    {
      image: "https://res.cloudinary.com/drbdst7hg/image/upload/v1737042454/16._Playa_montan%CC%83a_y_sol_vl6yqm.jpg",
      title: i18n.t("principalBanners.wildLife.title"),
      description: i18n.t("principalBanners.wildLife.description"),
    },
  ];

  return (
    <CCarousel indicators transition="crossfade" interval={1000}>
      {CarouselBanners.map((banner, index) => (
        <CCarouselItem key={index}>
          <section style={{ position: 'relative', textAlign: 'left', color: '#fff' }}>
            <img
              src={banner.image}
              alt={banner.title}
              className={`banner brightness-75 ${index === 2 && 'rotate-180'} w-100 ${index === 4 ? 'object-s' : 'object-center'}`}
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
              <NavLink to="/categories" className='explore-button'>
                {i18n.t("exploreMore")} →
              </NavLink>
            </section>
          </section>
        </CCarouselItem>
      ))}
    </CCarousel >
  )
}

export default Carousel;