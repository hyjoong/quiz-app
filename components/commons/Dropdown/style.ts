import { styled } from "@lib/stitches.config";

export const DropdownnStyled = styled("div", {
  width: "150px",
  height: "40px",
  color: "#6B7280",
  cursor: "pointer",
  margin: "0 auto",
  position: "relative",

  "@md": {
    width: "100%",
  },

  ".arrow-box": {
    position: "absolute",
    right: "10px",
    top: "9px",
  },
  ".select-list": {
    width: "100%",
    maxHeight: 0,
    overflow: "hidden",
    position: "absolute",
    top: "45px",
    left: "0",
    backgroundColor: "white",
    borderRadius: "5px",
    transition: "all 0.2s ease",
    zIndex: 10,

    variants: {
      isOpen: {
        true: {
          maxHeight: "200px",
          border: "1px solid #D1D5DB",
        },
      },
    },

    "&::-webkit-scrollbar": {
      width: "5px",
      backgroundColor: "#E9E9E9",
    },

    "&::-webkit-scrollbar-thumb ": {
      backgroundColor: "#C5C2C2",
    },

    li: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "40px",
      listStyle: "none",
      userSelect: "none",
      "&:not(:last-child)": {
        borderBottom: "1px solid #D1D5DB",
      },

      "&:active": {
        backgroundColor: "#F3F4F6",
      },
    },
  },
});

export const SelectedItem = styled("div", {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "#D1D5DB",
  width: "100%",
  height: "40px",
  backgroundColor: "white",

  variants: {
    isOpen: {
      true: {
        borderWidth: "1px",
      },
    },
  },
});
