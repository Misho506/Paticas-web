import { useState } from "react";
import { subCategories } from "../../assets/subCategories";
import SubCategoryCard from "./SubCategoryCard";

import "./SubCategoryCard.css";

const SubCategoriesCards = () => {
  const [showAll, setShowAll] = useState<boolean>(false);

  return (
    <>
      <section className="flex flex-wrap mx-10 justify-center">
        {
          (showAll ? subCategories : subCategories.slice(0, 4)).map((subCategory, index) => {
            return (
              <SubCategoryCard
                key={index}
                img={subCategory.img}
                title={subCategory.title}
                places={subCategory.places}
                link={subCategory.link}
                itinerary={subCategory.itinerary}
                description={subCategory.description}
              />
            )
          })
        }
      </section>
      <button
        onClick={() => setShowAll(!showAll)}
        className="show-all-button flex justify-self-center my-5 px-3 py-2 text-xl rounded-full border-1 border-black"
      >
        {showAll ? "Ver menos" : "Ver todas las giras"}
      </button>
    </>
  )
}

export default SubCategoriesCards;
