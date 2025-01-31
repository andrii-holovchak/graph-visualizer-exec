import { ContextualRiskList } from "@/app/_components/vulnerabilities/contextual-risk/contextual-risk-list";
import { ContextualRiskChart } from "@/app/_components/vulnerabilities/contextual-risk/contextual-rist-chart/contextual-risk-chart";

export function ContextualRisk() {
  return (
    <div className="flex gap-5 [&>*]:flex-1">
      <ContextualRiskList />
      <ContextualRiskChart />
    </div>
  );
}
