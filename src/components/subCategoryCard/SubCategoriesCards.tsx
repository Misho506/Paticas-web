import { useState } from "react";

import SubCategoryCard from "./SubCategoryCard";
import { SubCategoryType } from "../../utils/types";
import "./SubCategoryCard.css";

const SubCategoriesCards = ({ subCategories, showDescription }: { subCategories: Array<SubCategoryType>; showDescription?: boolean }) => {
  const [showAll, setShowAll] = useState<boolean>(false);
  return (
    <>
      <section className={`flex flex-wrap mx-10 justify-center ${showDescription && 'mb-9'}`}>
        {
          (showDescription || showAll ? subCategories : subCategories.slice(0, 4)).map((subCategory, index) => {
            return (
              <SubCategoryCard
                key={index}
                showDescription={showDescription}
                img={subCategory.img}
                title={subCategory.title}
                places={subCategory.places}
                itinerary={subCategory.itinerary}
                description={subCategory.description}
              />
            )
          })
        }
      </section>
      {!showDescription &&
        <button
          onClick={() => setShowAll(!showAll)}
          className="show-all-button flex justify-self-center my-5 px-3 py-2 text-xl rounded-full border-1 border-black"
        >
          {showAll ? "Ver menos" : "Ver todas las giras"}
        </button>}
    </>
  )
}

export default SubCategoriesCards;
