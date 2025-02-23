import { styled } from "@lib/stitches.config";

export const ButtonStyled = styled("button", {
  outline: "none",
  border: "none",
  cursor: "pointer",
  fontWeight: "600",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  whiteSpace: "nowrap",
  transition: "all 0.2s ease",

  variants: {
    size: {
      md: {
        fontSize: "16px",
        height: "36px",
        padding: "0 16px",
        borderRadius: "5px",
      },
      lg: {
        fontSize: "18px",
        height: "46px",
        padding: "0 22px",
        borderRadius: "6px",
      },
    },

    isDisabled: {
      true: {
        backgroundColor: "#D1D5DB",
        cursor: "no-drop",
      },
    },

    StyleType: {
      normal: {
        color: "$green",
        backgroundColor: "$white",
        border: "1px solid $green",
      },
      filled: {
        color: "white",
        backgroundColor: "$green",
      },
    },
  },

  defaultVariants: {
    size: "md",
    StyleType: "filled",
  },

  "&:disabled": {
    backgroundColor: "#D1D5DB",
    cursor: "not-allowed",
    opacity: 0.7,
    borderColor: "#D1D5DB",
    color: "white",

    "&:hover": {
      backgroundColor: "#D1D5DB",
    },
  },
});
