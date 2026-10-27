// seoreading.uk merged into sunnypatel.co.uk on 27 Oct 2026: the build outputs only 301 redirects.
import { mkdirSync, writeFileSync } from "node:fs";

const T = "https://sunnypatel.co.uk";
const map = [
  ["/", "/services/seo-consultant-reading/"],
  ["/services", "/services/seo-consultant-reading/"],
  ["/technical-seo-reading", "/services/technical-seo-services/"],
  ["/seo-audit-reading", "/services/technical-seo-audit/"],
  ["/free-seo-audit-reading", "/services/seo-consultant-reading/"],
  ["/seo-pricing-reading", "/services/seo-consultant-reading/"],
  ["/ai-search-optimisation-reading", "/services/ai-search-optimisation/"],
  ["/areas", "/services/seo-berkshire/"],
  ["/industries", "/services/seo-consultant-reading/"],
  ["/case-studies", "/portfolio/"],
  ["/about", "/about/"],
  ["/contact", "/contact/"],
  ["/privacy", "/privacy-policy/"],
  ["/tools/schema-generator", "/tools/schema-generator/"],
  ["/tools/seo-roi-calculator", "/tools/seo-roi-calculator/"],
  ["/tools/local-seo-checklist", "/tools/local-seo-audit/"],
  ["/tools", "/tools/"],
];

const lines = [];
for (const [from, to] of map) {
  if (from === "/") {
    lines.push(`/ ${T}${to} 301`);
    continue;
  }
  lines.push(`${from} ${T}${to} 301`, `${from}/ ${T}${to} 301`, `${from}/* ${T}${to} 301`);
}
lines.push(`/* ${T}/services/seo-consultant-reading/ 301`);

mkdirSync("dist", { recursive: true });
writeFileSync("dist/_redirects", lines.join("\n") + "\n");
writeFileSync("dist/robots.txt", "User-agent: *\nAllow: /\n");
console.log(`wrote ${lines.length} redirect rules`);
