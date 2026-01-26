// Copyright (c) 2024 - 2026 Godwin peter. O
//
// Licensed under the drolx Source License 1.0
// you may not use this file except in compliance with the License.
//    https://drolx.com/licenses/source-license-1.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// Project: drolx.github.io
// Author: Godwin peter. O (me@godwin.dev)
// Created At: Sat 21 Dec 2024 14:49:08
// Modified By: Godwin peter. O (me@godwin.dev)
// Modified At: Sat 21 Dec 2024 14:49:08

import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const schema = z.object({
  layout: z.string().optional(),
  title: z.string(),
  description: z.string(),
  publishedAt: z.coerce.date(),
  updatedAt: z.coerce.date().optional(),
  author: z.string().optional(),
  heroImage: z.string().optional(),
  tags: z.string().optional(),
});

const pageContent = defineCollection({
  loader: glob({ base: "./src/pages", pattern: "**/*.{md,mdx}" }),
  schema,
});

const article = defineCollection({
  loader: glob({ base: "./articles", pattern: "**/*.{md,mdx}" }),
  schema,
});

const caseStudy = defineCollection({
  loader: glob({ base: "./case-studies", pattern: "**/*.{md,mdx}" }),
  schema,
});

export const collections = { pageContent, article, caseStudy };
