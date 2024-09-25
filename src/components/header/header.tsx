import { FaChevronDown } from "react-icons/fa";
import { Logo } from "./logo";
import { Profile } from "../profile";
import { UiButton } from "../uikit/ui-button";

export const Header = () => {
  return (
    <header className="flex items-center h-24 bg-white shadow-lg px-8">
      <Logo />
      <div className="bg-slate-200 h-8 mx-6 w-px"></div>
      <UiButton className="w-44" size="lg">
        Играть
      </UiButton>
      <button className="ml-auto flex items-center gap-2">
        <Profile profile={{ id: 1, name: "Dima", rating: 3100 }} />
        <FaChevronDown className="w-3 h-3 text-teal-600" />
      </button>
    </header>
  );
};
