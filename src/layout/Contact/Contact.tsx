import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import CustomInputWithErrorMessage from "../../components/customInputWithErrorMessage/CustomInputWithErrorMessage";
import CircularContainerWithInfo from "../../components/circularContainerWithInfo/CircularContainerWithInfo";
import SectionWithTitle from "../../components/sectionWithTitle/SectionWithTitle";
import { sectionContact } from "../../utils/hardCodedData/sections";
import { useTranslation } from "react-i18next";
import { ChangeEvent, FormEvent, useState } from "react";
import { z } from "zod";
import { MessageFormField } from "../../utils/types";

const initValues = {
  userName: null,
  email: null,
  description: null
}

const Contact = ({ showForm = false }: { showForm?: boolean }) => {
  const { i18n } = useTranslation();
  const [wasSubmitted, setWasSubmitted] = useState<boolean>(false);
  // Zod validation schema
  const userInfoValidation = z.object({
    userName: z.string({
    }).min(1, { message: i18n.t("formErrors.userName.required") }),
    email: z.string()
      .min(1, { message: i18n.t("formErrors.email.required") })
      .email({ message: i18n.t("formErrors.email.invalidType") }),
    description: z.string({
      invalid_type_error: i18n.t("formErrors.description.required"),
    }).min(1, { message: i18n.t("formErrors.description.required") })
  });
  const [messageInfo, setMessageInfo] = useState<typeof initValues>(initValues);
  const [errors, setErrors] = useState<Record<keyof (typeof initValues), string | null>>(initValues);


  const formFields: Array<MessageFormField> = [
    {
      name: 'userName',
      type: 'text',
      title: i18n.t("name"),
    },
    {
      name: 'email',
      type: 'email',
      title: i18n.t("email"),
    },
    {
      name: 'description',
      type: 'textArea',
      title: i18n.t("description"),
    },
  ];

  const updateFormValues = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const fieldName = name as MessageFormField['name'];
    setMessageInfo({ ...messageInfo, [fieldName]: value });
    if (wasSubmitted) {
      const fieldError = validateField(fieldName, value);
      setErrors({ ...errors, [fieldName]: fieldError });
    }
  }

  const createFormFields = (field: MessageFormField, index: number) => {
    const { type, name, title } = field;
    const formField = messageInfo[name];
    const fieldError = wasSubmitted ? errors[name] : null;
    const hasError = Boolean(fieldError);
    const input = type === 'textArea' ? <textarea
      name={name}
      className={`${hasError ? "border-error" : "border-[2px] border-gray-300"} w-full h-36 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500`}
      value={formField ?? ""}
      onChange={updateFormValues}
      placeholder={title}
      onBlur={() => {
        const fieldError = validateField(name, formField as unknown as string);
        setErrors({ ...errors, [name]: fieldError });
      }}
    /> : <input
      type={type}
      name={name}
      className={`${hasError ? "border-error" : "border-[2px] border-gray-300"} w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500`}
      value={formField ?? ""}
      onChange={updateFormValues}
      placeholder={title}
      onBlur={() => {
        const fieldError = validateField(name, formField as unknown as string);
        setErrors({ ...errors, [name]: fieldError });
      }}
    />
    return (
      <CustomInputWithErrorMessage
        inputTitle={title}
        input={input}
        required
        error={hasError && <label className="text-red-600">{fieldError}</label>}
        key={index}
      />
    )
  }

  const validateField = (name: MessageFormField['name'], value: string) => {
    const fieldSchema = userInfoValidation.shape[name];
    const result = fieldSchema.safeParse(value);
    if (!result.success) {
      return result.error.errors[0]?.message || `${name} is invalid`;
    }
    return null;
  };

  const validateForm = () => {
    const result = userInfoValidation.safeParse(messageInfo);
    if (!result.success) {
      const formattedErrors: Record<MessageFormField['name'], string | null> = initValues;
      result.error.errors.forEach((err) => {
        const field = err.path[0] as MessageFormField['name'];
        formattedErrors[field] = err.message;
      });
      setErrors(formattedErrors);
      return false;
    }
    setErrors(initValues);
    return true;
  };

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    setWasSubmitted(true);
    if (validateForm()) {
      console.log("Form submitted successfully", messageInfo);
    }
  }

  const sendEmailWithFormspree = async () => {
    try {
      // Replace 'your-form-id' with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/mwpqgyqz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: messageInfo.userName,
          email: messageInfo.email,
          message: messageInfo.description
        })
      });

      if (!response.ok) {
        console.log("Failed to send email");
        throw new Error('Failed to send email');
      }
      if (response.ok) {
        console.log("Email sent successfully");
      }

      return { success: true };

    } catch (error) {
      console.error('Formspree Error:', error);
      return { success: false, error: error instanceof Error ? error.message : String(error) };
    }
  };

  // Removed unused phoneNumberChange function as phoneNumber is not part of the schema or form fields.
  return (
    <section className="mt-2">
      <SectionWithTitle title={sectionContact(i18n.t).title} body={sectionContact(i18n.t).body} />
      {showForm && <div className="grid grid-cols-1 md:grid-cols-2">
        <form onSubmit={submitForm} className="space-y-6 justify-center flex flex-col p-6 sm:w-9/12 w-full h-5/6 max-w-lg m-auto">
          {formFields.map((field, index) => createFormFields(field, index))}
          <button type="submit" onClick={sendEmailWithFormspree} className="bg-[#F0B500] border-0 w-full text-white py-3 rounded-lg hover:bg-[#d99a00] transition-colors">
            {i18n.t("submit")}
          </button>
        </form>
        <img src="https://misoinfodata.wordpress.com/wp-content/uploads/2025/08/carribean-tour00004.jpg" alt="family" className="object-fill w-11/12 h-[85%] m-auto rounded" />      </div>}
      {/* <div className="flex items-center justify-center gap-8 px-6 p-8 max-sm:flex-col">
        {CircularContainerWithInfo(
          <FaWhatsapp className="text-black text-xl" />,
          <>
            <h5 className="font-light text-md">Whatsapp</h5>
            <a
              href={`https://api.whatsapp.com/send?phone=+50687758884&text=${i18n.t("whatsappMessage")}`}

              className="text-gray-600 text-xs hover:text-gray-800 transition-colors"
            >
              +506 8775 8884
            </a>
          </>
        )}
        <div className="h-14 w-px bg-neutral-900 mx-2 max-sm:hidden" />
        {CircularContainerWithInfo(
          <MdOutlineEmail className="text-black text-xl" />,
          <>
            <h5 className="font-light text-md">E-mail</h5>
            <a
              href={`mailto:info@paticastravel.com?subject=${encodeURIComponent(i18n.t("generalEmail.subject"))}&body=${encodeURIComponent(i18n.t("generalEmail.body"))}`}
              className="text-gray-600 text-xs hover:text-gray-800 transition-colors"
            >
              info@paticastravel.com
            </a>
          </>
        )}
      </div> */}
    </section>
  )
};

export default Contact;
