import React, { createContext, useState, ReactNode, useContext, useEffect } from 'react';

import { BookingTourType, CategoryType, StoredDataTypeContextTour, TourType } from '../utils/types';
import { allTours } from "../utils/hardCodedData/categories/tours";
import { getCategoriesData } from '../utils/hardCodedData/categories';
import { useTranslation } from 'react-i18next';
import { allOneDayTours } from '../utils/hardCodedData/categories/oneDayTours';

interface TourContextType {
  selectedCategory: CategoryType;
  setSelectedCategory: (tour: CategoryType) => void;
  categories: CategoryType[];
  // Tours
  selectedTour: TourType;
  setSelectedTour: (tour: TourType) => void;
  tours: Array<TourType>;
  oneDayTours: Array<TourType>;
  // Booking
  booking: BookingTourType;
  setBooking: (booking: BookingTourType) => void;
}

const TourContext = createContext<TourContextType | undefined>(undefined);

const categoryInitialValue = {
  title: "",
  image: "",
  description: "",
  tours: [],
};
const tourInitialValue = {
  id: "",
  peekLink: "",
  img: "",
  title: "",
  places: [],
  description: "",
  daysAndNights: "",
  days: 0,
  about: "",
  photos: [""],
  activities: [""],
  includes: [""],
  itinerary: [{ title: "", description: "", hotelName: "", hotelLink: "" }],
  prices: [{ price: 0, numberOfPeople: 0 }],
  childsPrice: 0
}

const bookingInitialValue = {
  passengers: [],
  kids: [],
  startDate: new Date(),
  endDate: new Date(),
  price: 0,
  pricePerPerson: 0,
  pricePerKid: 0,
  user: {
    userName: "",
    lastName: "",
    email: "",
    phone: "",
  }
}

export const TourProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { i18n } = useTranslation();
  // Initialize state with data from localStorage or default values
  // CATEGORY
  const categoriesData = getCategoriesData(i18n.t);
  const [categories] = useState(categoriesData);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(() => {
    const contextBlogsStoreData = localStorage.getItem('contextBlogsStoreData');
    if (contextBlogsStoreData) {
      const parsedData: StoredDataTypeContextTour = JSON.parse(contextBlogsStoreData);
      return parsedData.selectedCategory || categoryInitialValue;
    }
    return categoryInitialValue;
  });

  // TOUR
  const [tours] = useState(allTours(i18n.t));
  const [oneDayTours] = useState(allOneDayTours(i18n.t));
  const [selectedTour, setSelectedTour] = useState<TourType>(() => {
    const contextBlogsStoreData = localStorage.getItem('contextBlogsStoreData');
    if (contextBlogsStoreData) {
      const parsedData: StoredDataTypeContextTour = JSON.parse(contextBlogsStoreData);
      return parsedData.selectedTour || tourInitialValue;
    }
    return tourInitialValue;
  });

  // Booking
  const [booking, setBooking] = useState<BookingTourType>(() => {
    const contextBlogsStoreData = localStorage.getItem('contextBlogsStoreData');
    if (contextBlogsStoreData) {
      const parsedData: StoredDataTypeContextTour = JSON.parse(contextBlogsStoreData);
      return parsedData.booking || bookingInitialValue;
    }
    return bookingInitialValue;
  });

  // Update localStorage whenever selected values change
  useEffect(() => {
    const dataToStore: StoredDataTypeContextTour = {
      selectedCategory,
      categories,
      selectedTour,
      tours,
      booking,
    };
    localStorage.setItem('contextBlogsStoreData', JSON.stringify(dataToStore));
  }, [selectedCategory, selectedTour, booking, oneDayTours]);

  return (
    <TourContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        categories,
        selectedTour,
        setSelectedTour,
        tours,
        oneDayTours,
        booking,
        setBooking
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