---
title: "Threat Intelligence Enrichment — IOC Lookup"
app: security-copilot
role: security
difficulty: intermediate
use_case: "Use to enrich an IOC (IP, domain, file hash) with threat intelligence context before deciding on response actions."
---

## Context
Enrich an IOC (IP, domain, file hash) with threat intelligence context before deciding on response actions.

## Prompt
```
Using Microsoft Defender Threat Intelligence, look up the following indicator: [IP ADDRESS / DOMAIN / FILE HASH].

Provide:
1. Reputation score and verdict (malicious, suspicious, benign, unknown)
2. Associated threat actors or malware families, if any
3. First seen and last seen dates in threat intelligence feeds
4. Related CVEs or exploits associated with this indicator
5. Has this indicator been observed in your organisation's environment in the last 30 days? If yes, on which devices or by which users?

Return as a structured brief. Conclude with a recommended action: block, monitor, or no action needed.
```
