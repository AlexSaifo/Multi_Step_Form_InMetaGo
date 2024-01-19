import Addon from "../components/Addon";
import FormHeader from "../components/FormHeader";
import { addOns } from "../data/data";

export default function FormAddons() {
  const addonSelects = addOns.map((addon, index) => (
    <Addon key={index} item={addon} />
  ));

  return (
    <div className="flex flex-col">
      <FormHeader
        title="Pick add-ons"
        text="Add-ons help enhance your gaming experience."
      />
      {addonSelects}
    </div>
  );
}
