import { styled } from "@lib/stitches.config";

export const DropdownnStyled = styled("div", {
  width: "150px",
  height: "40px",
  color: "#6B7280",
  cursor: "pointer",
  margin: "0 auto",

  ".arrow-box": {
    position: "absolute",
    right: "10px",
    top: "9px",
  },
  ".select-list": {
    width: "150px",
    maxHeight: 0,
    overflow: "hidden",
    borderWidth: "0 1px 1px 1px",
    borderStyle: "solid",
    borderColor: "#D1D5DB",
    transition: "max-height 0.3s ease",

    "&::-webkit-scrollbar": {
      width: "5px",
      backgroundColor: "#E9E9E9",
    },

    "&::-webkit-scrollbar-thumb ": {
      backgroundColor: "#C5C2C2",
    },

    li: {
      width: "150px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "40px",
      listStyle: "none",
      userSelect: "none",
      "&:not(:last-child)": {
        borderBottom: "1px solid #D1D5DB",
      },
    },
  },
});

export const SelectedItem = styled("div", {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderWidth: "1px 1px 0px 1px",
  borderStyle: "solid",
  borderColor: "#D1D5DB",
  width: "150px",
  height: "40px",

  variants: {
    isOpen: {
      true: {
        borderWidth: "1px",
      },
    },
  },
});
