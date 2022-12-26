import React, { useRef, useState } from "react";
import { DropdownnStyled, SelectedItem } from "./style";
import { DropdownProps } from "./type";
import useOutsideClick from "@hooks/useOutsideClick";
import ArrowBottom from "../Icons/ArrowBottom";
import { OptionProps } from "@type/option";

const Dropdown = ({
  selectedItem,
  selectList,
  setSelectOption,
  ...props
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    handleSlideList();
  };

  const handleSelectOption = (option: OptionProps) => {
    setSelectOption(option);
    handleSlideList();
  };

  const handleSlideList = () => {
    if (!listRef || !listRef.current) {
      return;
    }
    const style = listRef.current.style;
    if (isOpen) {
      style.maxHeight = "0";
    } else if (!isOpen) {
      const calcHeight =
        listRef.current.scrollHeight < 300 ? listRef.current.scrollHeight : 300;
      style.maxHeight = `${calcHeight}px`;
      style.overflowY = "auto";
    }
    setIsOpen(!isOpen);
  };

  const dropdownRef = useOutsideClick(handleMenu, isOpen);
  const listRef = useRef<HTMLUListElement>(null);

  return (
    <DropdownnStyled ref={dropdownRef} {...props}>
      <SelectedItem isOpen={isOpen} onClick={handleMenu}>
        <p> {selectedItem.content}</p>
        <div className="arrow-box">
          <ArrowBottom rotate={isOpen} />
        </div>
      </SelectedItem>
      <ul className="select-list" ref={listRef}>
        {selectList.map((item, index) => (
          <li
            className="select-item"
            key={item.value}
            onClick={() => handleSelectOption(item)}
          >
            {item.content}
          </li>
        ))}
      </ul>
    </DropdownnStyled>
  );
};

export default Dropdown;
