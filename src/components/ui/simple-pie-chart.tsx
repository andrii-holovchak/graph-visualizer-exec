import { type ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Label, Pie, PieChart } from "recharts";

interface Props {
  data: unknown[];
  label: string;
  config: ChartConfig;
  dataKey: string;
  nameKey: string;
}

const SimplePieChart = ({ data, label, config, dataKey, nameKey }: Props) => {
  return (
    <ChartContainer config={config} className="aspect-square h-[169px]">
      <PieChart>
        <Pie data={data} dataKey={dataKey} nameKey={nameKey} innerRadius={55}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-foreground text-4xl font-semibold text-[#656575]"
                    >
                      {label}
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  );
};

export default SimplePieChart;
