import { styled } from "@lib/stitches.config";

export const DropdownnStyled = styled("div", {
  width: "100px",
  height: "40px",
  color: "#6B7280",
  cursor: "pointer",
  margin: "0 auto",

  ".selected-item": {
    position: "relative",
    padding: "0 15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #d1d5db",
    width: "70px",
    height: "40px",
  },
  ".arrow-box": {
    position: "absolute",
    right: "10px",
    top: "9px",
  },
  ".select-list": {
    width: "100px",
    maxHeight: 0,
    overflow: "hidden",
    borderWidth: "0 1px 0 1px",
    borderStyle: "solid",
    borderColor: "#d1d5db",
    transition: "max-height 0.3s ease",

    li: {
      width: "100px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "40px",
      listStyle: "none",
      userSelect: "none",
      borderBottom: "1px solid #d1d5db",
    },
  },
  ".select-item": {},
});
