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
//  Created At: Thu 22 Jan 2026 02:42:05 PM UTC
//  Modified By: Godwin peter .O (me@godwin.dev)
//  Modified At: Thu 22 Jan 2026 02:42:05 PM UTC

/** @type {import('tailwindcss').Config} */
export default {
  plugins: [require("@tailwindcss/typography")],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        base: "#EEF5FF",
      },
    },
    fontFamily: {
      body: [],
      sans: [],
    },
  },
};
