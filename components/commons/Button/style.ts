import { styled } from "@lib/stitches.config";

export const ButtonStyled = styled("button", {
  color: "$white",
  backgroundColor: "$green",
  outLine: "none",
  border: "none",
  cursor: "pointer",

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
      filled: { color: "$white", backgroundColor: "$green" },
    },
  },
});
