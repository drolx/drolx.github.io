// Copyright (c) 2024 - 2024 Godwin peter. O
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
// Created At: Sat 21 Dec 2024 11:09:00
// Modified By: Godwin peter. O (me@godwin.dev)
// Modified At: Sat 21 Dec 2024 11:09:00

import mdx from '@astrojs/mdx'
import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'
import opengraphImages, { presets } from 'astro-opengraph-images'

export default defineConfig({
  site: 'https://drolx.com',
  integrations: [
    mdx(),
    sitemap(),
    tailwind({ nesting: true }),
    icon({ iconDir: 'src/assets/icons' }),
    partytown({
      config: {
        debug: false,
        forward: ['dataLayer.push'],
      },
    }),
    opengraphImages({ presets: presets.simpleBlog }),
  ],
})

