import useVulnerabilityStore from "@/app/_store/vulnerability-store";
import { useMemo } from "react";
import { groupVulnerabilitiesBySeverity } from "@/app/_utils/group-vulnerabilities-by-severity";

export function useContextualRiskChart() {
  const { vulnerabilities } = useVulnerabilityStore();

  const groupedVulnerabilities = useMemo(
    () => groupVulnerabilitiesBySeverity(vulnerabilities),
    [vulnerabilities],
  );

  return {
    groupedVulnerabilities,
    totalVulnerabilities: vulnerabilities.length,
  };
}
