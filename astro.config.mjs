//  Copyright (c) 2026 - 2026 Godwin peter .O
//
//  Licensed under the drolx Source License 1.0
//  you may not use this file except in compliance with the License.
//     https://drolx.com/licenses/source-license-1.0
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
//
//  Project: drolx.github.io
//  Author: Godwin peter .O (me@godwin.dev)
//  Created At: Thu 22 Jan 2026 02:42:22 PM UTC
//  Modified By: Godwin peter .O (me@godwin.dev)
//  Modified At: Thu 22 Jan 2026 02:42:22 PM UTC

import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import { SITE_URL } from "./src/consts";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: SITE_URL,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    mdx(),
    sitemap(),
    icon({ iconDir: "src/assets/icons" }),
    partytown({
      config: {
        debug: false,
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
