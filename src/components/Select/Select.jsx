import { useState } from "react";
import { SelectC, SelectOption, SelectW, Title } from "./SelectStyles";

const Select = ({ title, options }) => {
  const [selectedOption, setSelectedOption] = useState(
    "R. Antonio Braune, 222"
  );

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <SelectW>
      <Title>{title}</Title>
      <SelectC value={selectedOption} onChange={handleSelectChange}>
        <SelectOption value={selectedOption}>{selectedOption}</SelectOption>
        {options.map((option) => (
          <SelectOption key={option.value} value={option.value}>
            {option.label}
          </SelectOption>
        ))}
      </SelectC>
    </SelectW>
  );
};

export default Select;
