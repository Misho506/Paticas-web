import { useMemo, useState } from 'react';
import { StepType } from '../../utils/types';
import { useNavigate } from 'react-router';

import "./BookingTour.css";
import { BookingEmail, BookingFirstForm, BookingSecondForm } from '../../components/createBooking';
import { useTranslation } from 'react-i18next';
import { useTour } from '../../context/TourContext';


const BookingTour = () => {
  const { i18n } = useTranslation();
  const { selectedTour, selectedCategory } = useTour();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const steps: Array<StepType> = [
    { number: 1, label: i18n.t("contact") },
    { number: 2, label: i18n.t("tour") },
    { number: 3, label: i18n.t("reserve") }, //TODO: Change for "Pago"/"Payment"
  ];

  const buttonBack = () => {
    if (currentStep === 1) {
      navigate(`/categories/${selectedCategory.id}/:${selectedTour.id}`);
    } else {
      setCurrentStep(currentStep - 1);
    }
  }

  const actionButtons =
    <article className='flex justify-between'>
      <button
        onClick={buttonBack}
        className="w-2/5 bg-[#1B2821] text-white py-3 px-6 mx-auto rounded-full hover:bg-[#2c3f33] transition-colors duration-300"
      >
        {i18n.t("goBack")}
      </button>
      <button
        type="submit"
        className="w-2/5 bg-[#1B2821] text-white py-3 px-6 rounded-full hover:bg-[#2c3f33] transition-colors duration-300"
      >
        {currentStep === 3 ? i18n.t("submit") : i18n.t("next")}
      </button>
    </article>;

  const showForm = useMemo(() => {
    switch (currentStep) {
      case 1:
        return <BookingFirstForm setStep={setCurrentStep} actions={actionButtons} />
      case 2:
        return <BookingSecondForm setStep={setCurrentStep} actions={actionButtons} />
      case 3:
        return <BookingEmail />
      default:
        break;
    }
  }, [currentStep]);

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Progress Steps */}
      <nav aria-label="Progress steps" className="mb-8">
        <ol className="flex items-center justify-center gap-4">
          {steps.map((step, index) => (
            <li key={step.number} className="flex items-center">
              <div className={`
                flex items-center justify-center w-8 h-8 rounded-full 
                ${step.number === currentStep ? 'bg-black text-white' : 'bg-zinc-200'}
                text-sm font-medium
              `}>
                {step.number}
              </div>
              <span className="ml-2 text-sm font-medium text-gray-600">
                {step.label}
              </span>
            </li>
          ))}
        </ol>
      </nav>
      <section>
        {showForm}
      </section >
    </div >
  );
};

export default BookingTour;
