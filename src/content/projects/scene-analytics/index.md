---
title: "Autonomous Driving Scene Analytics"
summary: "Applied vision model fine-tuning and taxonomy-based retrieval to surface rare and critical driving scenarios."
date: 2024-07-01
draft: false
tags: ["Computer Vision", "Autonomous Driving", "Fine-tuning", "Phi-4", "Transformers", "OpenCLIP"]
status: "Prototype"
cover: "/images/projects/adas/cover.jpg"
---

**Challenge.** Rare driving events (e.g., pedestrians crossing unexpectedly, animals on the road) are hard to discover and analyze at scale.

**Approach.** Fine-tuned a multimodal vision-language model to detect anomalies. Generated structured scene descriptions and indexed them in a search pipeline using a domain taxonomy.

**Outcome.** Reduced discovery time for rare events from hours to minutes, improving the ability to evaluate and retrain ADAS systems on critical edge cases.