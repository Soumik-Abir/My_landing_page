// Dropdown.tsx
import { useEffect, useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import useDropDownViewModel from "../../Models/DropDownViewModel";

const Dropdown = () => {
  const { selectedValue, updateSelectedValue, dropdownOptions, isLoading } =
    useDropDownViewModel();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    setIsDropdownOpen(false);
  }, [dropdownOptions, isLoading]);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevIsDropdownOpen) => !prevIsDropdownOpen);
  };

  const handleOptionClick = (option: string) => {
    updateSelectedValue(option);
    toggleDropdown();
  };

  return (
    <div className="relative" style={{ zIndex: 2 }}>
      <div className="relative">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <div
              className="flex gap-1.5 justify-between px-4 py-3.5 text-sm leading-5 bg-white rounded-xl text-neutral-700 cursor-pointer"
              onClick={toggleDropdown}
            >
              <div>{selectedValue}</div>
              {isDropdownOpen ? (
                <RiArrowDropUpLine className="my-auto w-4 h-4" />
              ) : (
                <RiArrowDropDownLine className="my-auto w-4 h-4" />
              )}
            </div>

            {isDropdownOpen && (
              <div className="absolute mt-2 w-32 border rounded-md shadow-lg cursor-pointer" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                {dropdownOptions.map((option) => (
                  <div
                    key={option}
                    className="p-2"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
