import React, { createContext, useState, ReactNode, useContext, useEffect } from 'react';

import { BlogType, StoredDataTypeContextBlog } from '../utils/types';
import { useTranslation } from 'react-i18next';
import allBlogs from '../utils/hardCodedData/blogs';

interface TourContextType {
  selectedBlog: BlogType;
  setSelectedBlog: (blog: BlogType) => void;
  blogs: BlogType[];
}

const BlogContext = createContext<TourContextType | undefined>(undefined);

const selectBlogInitialValue: BlogType = {
  picture: "",
  title: "",
  date: "",
  readingTime: "",
  shortDescription: "",
  images: [""],
  listOfTexts: [""],
};

export const BlogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { i18n } = useTranslation();
  // Initialize state with data from localStorage or default values

  // Booking
  const [blogs] = useState(allBlogs(i18n.t));
  const [selectedBlog, setSelectedBlog] = useState<BlogType>(() => {
    const storedData = localStorage.getItem('storedData');
    if (storedData) {
      const parsedData: StoredDataTypeContextBlog = JSON.parse(storedData);
      return parsedData.selectedBlog || selectBlogInitialValue;
    }
    return selectBlogInitialValue;
  });

  // Update localStorage whenever selected values change
  useEffect(() => {
    const dataToStore: StoredDataTypeContextBlog = {
      selectedBlog
    };
    localStorage.setItem('storedData', JSON.stringify(dataToStore));
  }, [selectedBlog]);

  return (
    <BlogContext.Provider
      value={{
        selectedBlog,
        setSelectedBlog,
        blogs
      }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};