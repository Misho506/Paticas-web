import { ReactNode } from "react";

const CustomInputWithErrorMessage = (inputTitle: string, input: ReactNode, required?: boolean, error?: ReactNode) => (
  <article>
    <label
      htmlFor="nombre"
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {inputTitle} {required && <span className="text-amber-500">*</span>}
    </label>
    {input}
    {error}
  </article>
);

export default CustomInputWithErrorMessage;