import { ReactNode } from "react";

interface CustomInputWithErrorMessageProps {
  whiteText?: boolean;
  inputTitle: string;
  input: ReactNode;
  required?: boolean;
  error?: ReactNode;
  key?: any;
}

const CustomInputWithErrorMessage = ({
  whiteText = false,
  inputTitle,
  input,
  required,
  error,
  key,
}: CustomInputWithErrorMessageProps) => (
  <article key={key}>
    <label
      htmlFor="nombre"
      className={`block text-sm font-medium mb-1 ${whiteText ? "text-white" : "text-gray-700"}`}
    >
      {inputTitle} {required && <span className="text-amber-500">*</span>}
    </label>
    {input}
    {error}
  </article>
);

export default CustomInputWithErrorMessage;