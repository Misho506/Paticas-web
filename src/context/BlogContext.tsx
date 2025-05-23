import React, { createContext, useState, ReactNode, useContext, useEffect } from 'react';

import { BlogType, StoredDataTypeContextBlog } from '../utils/types';
import { useTranslation } from 'react-i18next';
import allBlogs from '../utils/hardCodedData/blogs';

interface BlogContextType {
  selectedBlog: BlogType;
  setSelectedBlog: (blog: BlogType) => void;
  blogs: BlogType[];
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

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
    const blogStoreData = localStorage.getItem('blogStoreData');
    if (blogStoreData) {
      const parsedData: StoredDataTypeContextBlog = JSON.parse(blogStoreData);
      return parsedData.selectedBlog || selectBlogInitialValue;
    }
    return selectBlogInitialValue;
  });

  // Update localStorage whenever selected values change
  useEffect(() => {
    const blogStoreData: StoredDataTypeContextBlog = {
      selectedBlog,
      blogs
    };
    localStorage.setItem('blogStoreData', JSON.stringify(blogStoreData));
  }, [selectedBlog, blogs]);

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