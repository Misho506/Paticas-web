import { ReactNode } from "react";

const CircularContainerWithInfo = (icon: ReactNode, children: ReactNode) => (
  <div className="border-black circular-container bg-white rounded-full border-2 flex flex-col items-center justify-center shadow-sm">
    <article className="w-10 h-10 bg-yellow rounded-full flex flex-col items-center justify-center">
      {icon}
    </article>
    <article className="mt-2 text-center">
      {children}
    </article>
  </div>
);

export default CircularContainerWithInfo;