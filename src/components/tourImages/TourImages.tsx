import { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";

import { useTour } from "../../context/TourContext";
import "./TourImages.css";
const TourImages = () => {
  const { selectedTour } = useTour();
  const [showsAll, setShowsAll] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="tour-images-container py-6 ">
      <article className="px-3 grid grid-rows-3 grid-cols-3 gap-3">
        {
          selectedTour.photos.map((photo, index) =>
            (showsAll || index < 9) &&
            <img onClick={() => setSelectedImage(photo)} className="tour-image border-black border rounded-2xl" alt={`#${index}`} key={index} src={photo} />
          )
        }
      </article>
      <button
        onClick={() => setShowsAll(!showsAll)}
        className="show-all-button flex justify-self-center my-5 px-3 py-2 text-xl rounded-full border-1 border-black"
      >
        {showsAll ? "Ocultar todos" : "Descrubrir más"}
      </button>
      {selectedImage && (
        <div
          className="fixed inset-0 img-modal bg-black z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white z-10"
          >
            <MdOutlineCancel size={24} />
          </button>

          <img
            src={selectedImage}
            alt="img selected"
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
};

export default TourImages;