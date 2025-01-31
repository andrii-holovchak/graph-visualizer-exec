"use client";

import { Card } from "@/components/ui/card";
import { VulnerabilityGraph } from "@/app/_components/vulnerabilities/vulnerability-graph";
import { Section } from "@/components/ui/section";
import { VulnerabilityStatistic } from "@/app/_components/vulnerabilities/vulnerability-statistic/vulnerability-statistic";

export function Vulnerabilities() {
  return (
    <Card className="flex h-fit flex-1 flex-col gap-5">
      <Section title="Lorem Lorem Lorem">
        <VulnerabilityGraph />
      </Section>
      <Section title="Lorem ipsum dolor sit" className="flex-[0.49]">
        <VulnerabilityStatistic />
      </Section>
    </Card>
  );
}
