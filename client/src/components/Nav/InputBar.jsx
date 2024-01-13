import { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';

const InputBar = () => {
  const [isOpen, setIsOpen] = useState(false); // To control dropdown visibility
  const [inputValue, setInputValue] = useState(''); // To store the input value
  const [selectedOption, setSelectedOption] = useState('All Category'); // To store the selected option

  // Sample dropdown options
  const options = ['All Category', 'Option 2', 'Option 3', 'Option 4'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="flex  cust-break:w-[660px] items-center text-left border-t-[2.5px] border-l-[2.5px] text-sm  rounded-md border-b-[2.5px] border-[#127FFF]">
      {/* Input bar */}
      <input
        className="rounded-md rounded-r-none  border-r-[2px] cust-break:w-[420px]     px-2 h-[32px] focus:outline-none border-[#127FFF]"
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={toggleDropdown}
        className="bg-white relative  flex items-center h-[32px] gap-3 px-2 border-r-[2px] border-[#127FFF] "
      >
        <span className="text-xs cust-break:text-base">{`${selectedOption && selectedOption}`}</span>{' '}
        <RiArrowDropDownLine size={24} />
        {/* Dropdown box */}
        {isOpen && (
          <div className="absolute top-8 left-1 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
            {options.map((option, index) => (
              <div
                key={index}
                className="px-4 py-2 cursor-pointer text-sm  hover:bg-gray-100"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </button>

      {/* search button  */}
      <button className="bg-[#127FFF] h-[32px] px-2 text-white flex items-center justify-center rounded rounded-l-none cust-break:w-auto w-20 cust-break:flex-grow ">
        Search
      </button>
    </div>
  );
};

export default InputBar;
