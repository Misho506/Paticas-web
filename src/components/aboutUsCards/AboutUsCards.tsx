import { ReactNode } from "react";
import TextTruncator from "../TextTruncator/TextTruncator";

type CardProps = {
  img: string;
  title: string;
  icon: ReactNode;
  description: string;
}

const AboutUsCards = ({ img, title, icon, description }: CardProps) => (
  <div className="relative rounded-2xl overflow-hidden shadow-xl mt-5">
    < div className="w-full h-64 overflow-hidden" >
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover brightness-50"
      />
      < div className="w-54 h-54 absolute top-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2" >
        {icon}
      </div >
    </div >
    < article className="bg-white p-6 rounded-b-2xl whitespace-pre-line" >
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
      <TextTruncator text={description} />
    </article >
  </div >)

export default AboutUsCards;