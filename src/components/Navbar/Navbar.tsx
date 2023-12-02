import TemperatureUnitChanger from "../TemperatureUnitChanger/TemperatureUnitChanger";
import { ModeToggle } from "../mode-toggle";
import SearchBar from "../ui/Searchbar";

const Navbar = () => {
  return (
    <>
      <div className="w-[90%] my-3 mx-auto">
        <div className="flex items-center justify-between w-full">
          <SearchBar />
          <div className="flex items-center justify-center space-x-5">
            <ModeToggle />
            <TemperatureUnitChanger />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
