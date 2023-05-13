import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { linearGradientDef } from "@nivo/core";
import { Props } from "./type";

const PieChart = ({ data }: Props) => {
  return (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      defs={[
        linearGradientDef("gradientA", [
          { offset: 0, color: "#38bcb2" },
          { offset: 100, color: "#38bcb2", opacity: 0 },
        ]),
        linearGradientDef("gradientB", [
          { offset: 0, color: "#ff0044" },
          { offset: 100, color: "#ff0044", opacity: 0 },
        ]),
      ]}
      fill={[
        { match: { id: "correct" }, id: "gradientA" },
        { match: { id: "wrong" }, id: "gradientB" },
      ]}
      borderColor={"#EEEEEE"}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          itemsSpacing: 0,
          itemWidth: 80,
          itemHeight: 8,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
};

export default PieChart;
