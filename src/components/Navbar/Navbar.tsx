import TemperatureUnitChanger from "../TemperatureUnitChanger/TemperatureUnitChanger";
import SearchBar from "../ui/Searchbar";

const Navbar = () => {
  return (
    <>
      <div className="w-[90%] my-3 mx-auto">
        <div className="flex items-center justify-between w-full">
          <SearchBar />
          <TemperatureUnitChanger />
        </div>
      </div>
    </>
  );
};

export default Navbar;
