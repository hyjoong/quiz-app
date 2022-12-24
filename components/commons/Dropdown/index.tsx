import React, { useRef, useState } from "react";
import { DropdownnStyled } from "./style";
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
  };

  const handleSlideList = () => {
    if (!listRef || !listRef.current) {
      return;
    }
    const style = listRef.current.style;
    if (isOpen) {
      style.maxHeight = "0";
    } else if (!isOpen) {
      style.maxHeight = `${listRef.current.scrollHeight}px`;
    }
    setIsOpen(!isOpen);
  };

  const dropdownRef = useOutsideClick(handleMenu, isOpen);
  const listRef = useRef<HTMLUListElement>(null);

  return (
    <DropdownnStyled ref={dropdownRef} {...props}>
      <div className="selected-item" onClick={handleMenu}>
        <p> {selectedItem.content}</p>
        <div className="arrow-box">
          <ArrowBottom rotate={isOpen} />
        </div>
      </div>
      <ul className="select-list" ref={listRef}>
        {selectList.map(
          (item, index) =>
            item.content !== selectedItem.content && (
              <li
                className="select-item"
                key={index}
                onClick={() => handleSelectOption(item)}
              >
                {item.content}
              </li>
            )
        )}
      </ul>
    </DropdownnStyled>
  );
};

export default Dropdown;
