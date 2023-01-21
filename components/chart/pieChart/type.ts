type key = "id" | "value" | "color";

export type Pie = Record<key, number | string>;

export interface Props {
  data: Pie[];
}
