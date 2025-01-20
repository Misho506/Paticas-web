import React, { createContext, useState, ReactNode, useContext } from 'react';

import { TourType, SubCategoryType } from '../utils/types';
import ToursData from "../utils/hardCodedData/tours";
import { allSubCategories } from "../utils/hardCodedData/tours/subCategories";

interface TourContextType {
  selectedTour: TourType;
  setSelectedTour: (tour: TourType) => void;
  tours: TourType[];
  // SubCategories
  selectedSubCategory: SubCategoryType;
  setSelectedSubCategory: (tour: SubCategoryType) => void;
  subCategories: Array<SubCategoryType>;
}

const TourContext = createContext<TourContextType | undefined>(undefined);

const tourInitialValue = {
  title: "",
  image: "",
  description: "",
  subCategories: [],
};
const subCategoryInitialValue = {
  img: "",
  title: "",
  places: [],
  itinerary: "",
  description: "",
}

export const TourProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedTour, setSelectedTour] = useState<TourType>(tourInitialValue);
  const [tours] = useState<TourType[]>(ToursData);
  // SubCategories
  const [selectedSubCategory, setSelectedSubCategory] = useState<SubCategoryType>(subCategoryInitialValue);
  const [subCategories] = useState<Array<SubCategoryType>>(allSubCategories);

  return (
    <TourContext.Provider
      value={{
        selectedTour,
        setSelectedTour,
        tours,
        selectedSubCategory,
        setSelectedSubCategory,
        subCategories,
      }}>
      {children}
    </TourContext.Provider>
  );
};

export const useTour = () => {
  const context = useContext(TourContext);
  if (context === undefined) {
    throw new Error('useTour must be used within a TourProvider');
  }
  return context;
};