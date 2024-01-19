import thankIcon from "../assets/images/icon-thank-you.svg";

export default function ThankPage() {
  return (
    <div className="flex flex-col items-center text-center">
      <img src={thankIcon} alt="Icon 'thank you'" />
      <h2 className="text-[1.5rem] desktop:text-heading font-bold mt-6 desktop:mt-8 mb-2 desktop:mb-[0.875rem]">
        Lorem ipsum
      </h2>
      <p className="text-gray">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, hic.
        Ullam modi officia beatae ipsam nobis quia sint provident. At libero
        sint et, aperiam quasi autem repudiandae fuga? Dolorum, aliquam.
      </p>
    </div>
  );
}
