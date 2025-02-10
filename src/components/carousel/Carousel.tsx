import { CCarousel, CCarouselItem } from '@coreui/react'
import { BannerType } from '../../utils/types';
import { NavLink } from "react-router";

import "./Carousel.css";

const CarouselBanners: Array<BannerType> = [
  {
    image: "https://res.cloudinary.com/drbdst7hg/image/upload/v1737010424/Banner-1_kqbwsj.jpg",
    title: 'Entre volcanes y naturaleza exhuberante',
    description: 'Descubra el impresionante volcan Arenal y la enorme biodiverdodad de Monteverde',
  },
  {
    image: "https://res.cloudinary.com/drbdst7hg/image/upload/v1737010423/Banner-2_vmvmgr.jpg",
    title: 'Pesca deportiva en el Pacífico Sur y Costarricense',
    description: 'Explore la belleza marina de Costa Rica',
  },
  {
    image: "https://res.cloudinary.com/drbdst7hg/image/upload/v1737010425/Banner-3_v9jjjz.jpg",
    title: 'Descubra el Caribe Sur Costarricense',
    description: 'La riqueza cultural y la biodiversidad del Caribe le espera',
  },
  {
    image: "https://res.cloudinary.com/drbdst7hg/image/upload/v1737004885/9._Tortugas_y_ballenas_PORTADA_afkrf3.jpg",
    title: 'Disfrute de Manuel Antonio y Bahia Ballena',
    description: 'Playas paradisiacas y avistamiento de ballenas',
  },
  {
    image: "https://res.cloudinary.com/drbdst7hg/image/upload/v1737042454/16._Playa_montan%CC%83a_y_sol_vl6yqm.jpg",
    title: 'Expedición Fotográfica: Vida Silvestre en Corcovado',
    description: 'Capture la belleza natural de nuestro pais',
  },
];

const Carousel = () => (
  <CCarousel indicators transition="crossfade" interval={500} dark>
    {CarouselBanners.map((banner, index) => (
      <CCarouselItem key={index}>
        <section style={{ position: 'relative', textAlign: 'left', color: '#fff' }}>
          <img
            src={banner.image}
            alt={banner.title}
            className={`banner brightness-75 ${index === 2 && 'rotate-180'} w-100`}
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
              Explorar más →
            </NavLink>
          </section>
        </section>
      </CCarouselItem>
    ))}
  </CCarousel >
)

export default Carousel;