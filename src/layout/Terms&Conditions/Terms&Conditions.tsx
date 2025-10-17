import { useTranslation } from "react-i18next";

const TermsConditions = () => {
  const { i18n } = useTranslation();

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-gray-800 leading-relaxed">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold mb-4">
          {i18n.t("terms&ConditionsView.title")}
        </h1>
        <p className="text-lg text-gray-600 mb-2">
          {i18n.t("terms&ConditionsView.intro.paragraph")}
        </p>
      </header>


      <article className="space-y-10">
        {/* 1. Reservations and Payments */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {i18n.t("terms&ConditionsView.sections.reservations.title")}
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <p className="italic">{i18n.t("terms&ConditionsView.sections.reservations.info")}</p>

            <strong>
              {i18n.t("terms&ConditionsView.sections.reservations.paymentTitle")}
            </strong>
            <ul className="list-disc italic pl-6 mt-2 space-y-1">
              <li>{i18n.t("terms&ConditionsView.sections.reservations.paymentItems.0")}</li>
              <li>{i18n.t("terms&ConditionsView.sections.reservations.paymentItems.1")}</li>
              <li>{i18n.t("terms&ConditionsView.sections.reservations.paymentItems.2")}</li>
            </ul>
            <p className="font-bold">
              {i18n.t("terms&ConditionsView.sections.reservations.currencyTitle")}
              <span className="italic pl-2">
                {i18n.t("terms&ConditionsView.sections.reservations.currencyInfo")}
              </span>
            </p>
            <p className="font-bold">
              {i18n.t("terms&ConditionsView.sections.reservations.paymentConfirmationTitle")}
              <span className="italic pl-2">
                {i18n.t("terms&ConditionsView.sections.reservations.paymentConfirmationInfo")}
              </span>
            </p>
          </ul>
        </section>


        {/* 2. Cancellation Policy */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {i18n.t("terms&ConditionsView.sections.cancellation.title")}
          </h2>
          <p className="mb-4 italic">
            {i18n.t("terms&ConditionsView.sections.cancellation.intro")}{" "}
            <a
              href={`mailto:${i18n.t("terms&ConditionsView.sections.cancellation.email")}`}
              className="text-blue-600 underline"
            >
              {i18n.t("terms&ConditionsView.sections.cancellation.email")}
            </a>
            .
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li className="font-bold">
              {i18n.t("terms&ConditionsView.sections.cancellation.items.0.title")}
              <span className="italic pl-2">
                {i18n.t("terms&ConditionsView.sections.cancellation.items.0.info")}
              </span>
            </li>
            <li className="font-bold">
              {i18n.t("terms&ConditionsView.sections.cancellation.items.1.title")}
              <span className="italic pl-2">
                {i18n.t("terms&ConditionsView.sections.cancellation.items.1.info")}
              </span>
            </li>
            <li className="font-bold">
              {i18n.t("terms&ConditionsView.sections.cancellation.items.2.title")}
              <span className="italic pl-2">
                {i18n.t("terms&ConditionsView.sections.cancellation.items.2.info")}
              </span>
            </li>
            <li className="font-bold">
              {i18n.t("terms&ConditionsView.sections.cancellation.items.3.title")}
              <span className="italic pl-2">
                {i18n.t("terms&ConditionsView.sections.cancellation.items.3.info")}
              </span>
            </li>
            <li className="italic">
              {i18n.t("terms&ConditionsView.sections.cancellation.items.4.info")}
            </li>
            <li className="font-bold">
              {i18n.t("terms&ConditionsView.sections.cancellation.items.5.title")}
              <span className="italic pl-2">
                {i18n.t("terms&ConditionsView.sections.cancellation.items.5.info")}
              </span>
            </li>
            <li className="font-bold">
              {i18n.t("terms&ConditionsView.sections.cancellation.items.6.title")}
              <span className="italic pl-2">
                {i18n.t("terms&ConditionsView.sections.cancellation.items.6.info")}
              </span>
            </li>
          </ul>
        </section>

        {/* 3. Modifications and Liability */}
        <hr />
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {i18n.t("terms&ConditionsView.sections.liability.title")}
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li className="font-bold">
              {i18n.t("terms&ConditionsView.sections.liability.items.0.title")}
              <span className="italic pl-2">
                {i18n.t("terms&ConditionsView.sections.liability.items.0.info")}
              </span>
            </li>
            <li className="font-bold">
              {i18n.t("terms&ConditionsView.sections.liability.items.1.title")}
              <span className="italic pl-2">
                {i18n.t("terms&ConditionsView.sections.liability.items.1.info")}
              </span>
            </li>
            <li className="font-bold">
              {i18n.t("terms&ConditionsView.sections.liability.items.2.title")}
              <span className="italic pl-2">
                {i18n.t("terms&ConditionsView.sections.liability.items.2.info")}
              </span>
            </li>
            <li className="font-bold">
              {i18n.t("terms&ConditionsView.sections.liability.items.3.title")}
              <span className="italic pl-2">
                {i18n.t("terms&ConditionsView.sections.liability.items.3.info")}
              </span>
              <ul className="list-disc pl-6 space-y-2">
                <li className="italic pl-2">
                  {i18n.t("terms&ConditionsView.sections.liability.subItems.0")}
                </li>
                <li className="italic pl-2">
                  {i18n.t("terms&ConditionsView.sections.liability.subItems.1")}
                </li>
                <li className="italic pl-2">
                  {i18n.t("terms&ConditionsView.sections.liability.subItems.2")}
                </li>
                <li className="italic pl-2">
                  {i18n.t("terms&ConditionsView.sections.liability.subItems.3")}
                </li>
                <li className="italic pl-2">
                  {i18n.t("terms&ConditionsView.sections.liability.subItems.4")}
                </li>
                <li className="italic pl-2">
                  {i18n.t("terms&ConditionsView.sections.liability.subItems.5")}
                </li>
              </ul>
            </li>
            <li className="italic pl-2">
              {i18n.t("terms&ConditionsView.sections.liability.subItems.6")}
            </li>
          </ul>
        </section>

        {/* 4. Privacy Policy */}
        <section className=" italic">
          <h2 className="text-2xl font-semibold mb-4">
            {i18n.t("terms&ConditionsView.sections.privacy.title")}
          </h2>
          <p className="mb-4">
            {i18n.t("terms&ConditionsView.sections.privacy.paragraph1")}
          </p>
          <p>
            {i18n.t("terms&ConditionsView.sections.privacy.paragraph2")}{" "}
            <a
              href={`mailto:${i18n.t("terms&ConditionsView.sections.privacy.email")}`}
              className="text-blue-600 underline"
            >
              {i18n.t("terms&ConditionsView.sections.privacy.email")}
            </a>
            . {i18n.t("terms&ConditionsView.sections.privacy.closing")}
          </p>
        </section>
      </article >
    </main >
  );
};

export default TermsConditions;