import { useState } from "react";
import { Founder } from "../../utils/types";

const FounderProfile = ({ name, title, bio, imageSrc }: Founder) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="flex flex-col md:flex-row items-center md:items-start gap-6 py-6 border-b border-gray-200">
      <article className="w-36 h-36">
        <img
          src={imageSrc}
          alt={`Pic of ${name}`}
          className="w-full h-full object-cover"
        />
      </article>
      <article className="flex-1">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <h3 className="text-xl  text-gray-700 mb-2">{title}</h3>

        <span className={`${!expanded && 'line-clamp-3'} italic w`}>
          {bio}
        </span>
        <span
          onClick={() => setExpanded(!expanded)}
          className="ml-2 text-green-700 font-medium hover:text-green-800 focus:outline-none"
        >
          {expanded ? 'Leer menos' : 'Leer más'}
        </span>
      </article>
    </section>
  );
};

export default FounderProfile;