import { useState, useEffect } from 'react';

export interface DropDownViewModelProps {
  selectedValue: string;
  updateSelectedValue: (value: string) => void;
  dropdownOptions: string[];
  isLoading: boolean;
}

const useDropDownViewModel = (): DropDownViewModelProps => {
  const [selectedValue, setSelectedValue] = useState<string>('EN');
  const [dropdownOptions, setDropdownOptions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    import('../constants/language_options.json')
      .then((data) => {
        setDropdownOptions(data.default);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error loading dropdown options:', error);
        setIsLoading(false);
      });
  }, []);

  const updateSelectedValue = (value: string) => {
    setSelectedValue(value);
  };

  return {
    selectedValue,
    updateSelectedValue,
    dropdownOptions,
    isLoading,
  };
};

export default useDropDownViewModel;
