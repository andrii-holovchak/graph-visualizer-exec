import { Card } from "@/components/ui/card";
import { useContextualRiskChart } from "@/app/_components/vulnerabilities/contextual-risk/contextual-rist-chart/hooks/use-contextual-risk-chart";
import { useMemo } from "react";
import { type Severity } from "@/types/vulnerability";
import SimplePieChart from "@/components/ui/simple-pie-chart";
import ContextualRiskLegend from "@/app/_components/vulnerabilities/contextual-risk/contextual-risk-legend";

interface ChartData {
  severity: Severity;
  count: number;
  fill: string;
}

export function ContextualRiskChart() {
  const { groupedVulnerabilities, totalVulnerabilities } =
    useContextualRiskChart();

  const chartData = useMemo<ChartData[]>(
    () => [
      {
        severity: "low",
        count: groupedVulnerabilities.low.length,
        fill: "hsl(var(--severity-low))",
      },
      {
        severity: "medium",
        count: groupedVulnerabilities.medium.length,
        fill: "hsl(var(--severity-medium))",
      },
      {
        severity: "high",
        count: groupedVulnerabilities.high.length,
        fill: "hsl(var(--severity-high))",
      },
      {
        severity: "critical",
        count: groupedVulnerabilities.critical.length,
        fill: "hsl(var(--severity-critical))",
      },
    ],
    [groupedVulnerabilities],
  );

  return (
    <Card className="px-[30px] py-2.5">
      <span className="text-lg font-medium text-[#667085]">
        Contextual Risk
      </span>
      <div className="flex flex-1 items-center gap-[46px] pb-0">
        <ContextualRiskLegend vulnerabilities={groupedVulnerabilities} />
        <SimplePieChart
          config={{}}
          data={chartData}
          dataKey="count"
          nameKey="severity"
          label={totalVulnerabilities.toLocaleString()}
        />
      </div>
    </Card>
  );
}
