import { ReactNode } from "react";

type BannerType = {
  image: string;
  title: string;
  description: string;
  goToLink: string;
}
type SubCategorie = {
  img: string;
  title: string;
  place: string;
  link: string;
  itinerary: string;
  description: string;
}

type ReviewType = {
  userName: string;
  details: string;
  date: Date;
  from: string;
}

type BlogsType = {
  picture: string;
  title: string;
  date: string;
  readingTime: string;
  description: string;
}

type PostCarrouselProps = {
  postList: Array<ReactNode>;
}


export type {
  BannerType,
  SubCategorie,
  ReviewType,
  BlogsType,
  PostCarrouselProps,
}