import { type Severity, type Vulnerability } from "@/types/vulnerability";

export type VulnerabilitiesBySeverity = Record<Severity, Vulnerability[]>;

export function groupVulnerabilitiesBySeverity(
  vulnerabilities: Vulnerability[],
): VulnerabilitiesBySeverity {
  return vulnerabilities.reduce(
    (acc, vulnerability) => {
      const { severity } = vulnerability;

      if (!severity) return acc;

      acc[severity].push(vulnerability);
      return acc;
    },
    {
      low: [],
      medium: [],
      high: [],
      critical: [],
    } as VulnerabilitiesBySeverity,
  );
}
