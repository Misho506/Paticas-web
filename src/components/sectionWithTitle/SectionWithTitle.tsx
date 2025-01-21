import { IoIosStar } from "react-icons/io";

const SectionWithTitle = ({ title, body, bgColor }: { title: string; body: string; bgColor?: string }) => {
  const insertStars = body.includes('*STARS*');
  const secondString =
    <div className="flex items-baseline">
      <br />
      <IoIosStar className="color-yellow" />
      <IoIosStar className="color-yellow" />
      <IoIosStar className="color-yellow" />
      <IoIosStar className="color-yellow" />
      <IoIosStar className="color-yellow mr-1" />
      5.0 rating de 250 reviews
    </div>
  return (
    <article className={`py-11 max-width-500 flex flex-col justify-self-center ${bgColor}`}>
      <h2 className="text-4xl pb-3 text-center">{title}</h2>
      <p className="text-gray-500 italic text-lg text-center">
        {insertStars ? body.split('*STARS*') : body}
        {insertStars && secondString}
      </p>
    </article>
  )
};

export default SectionWithTitle;
