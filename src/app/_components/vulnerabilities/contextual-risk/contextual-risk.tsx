import { ContextualRiskList } from "@/app/_components/vulnerabilities/contextual-risk/contextual-risk-list";
import { ContextualRiskChart } from "@/app/_components/vulnerabilities/contextual-risk/contextual-risk-chart";
import { Section } from "@/components/ui/section";

export function ContextualRisk() {
  // todo: add mock data
  return (
    <Section title="Lorem ipsum dolor sit">
      <div className="flex gap-5 [&>*]:flex-1">
        <ContextualRiskList />
        <ContextualRiskChart />
      </div>
    </Section>
  );
}
