import { Card } from "@/components/ui/card";
import { VulnerabilityGraph } from "@/app/_components/vulnerabilities/vulnerability-graph";
import { Section } from "@/components/ui/section";
import { ContextualRisk } from "@/app/_components/vulnerabilities/contextual-risk/contextual-risk";

export function Vulnerabilities() {
  return (
    <Card className="flex h-fit flex-1 flex-col gap-5">
      <Section title="Lorem Lorem Lorem">
        <VulnerabilityGraph />
      </Section>
      <ContextualRisk />
    </Card>
  );
}
