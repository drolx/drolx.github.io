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
// Created At: Sat 21 Dec 2024 12:54:54
// Modified By: Godwin peter. O (me@godwin.dev)
// Modified At: Sat 21 Dec 2024 12:54:54

/** @type {import('tailwindcss').Config} */
export default {
  plugins: [require('flowbite/plugin'), require('@tailwindcss/typography')],
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/flowbite/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: '#EEF5FF',
        info: '#378BFF',
        success: '01A15C',
        warning: '#f59e0b',
        error: '#b91c1c',
        accent: {
          50: '#EDFAF7',
          100: '#DCF5EF',
          200: '#AEE8D9',
          300: '#82D9BF',
          400: '#3ABD8D',
          500: '#01A15C',
          600: '#01914E',
          700: '#01783D',
          800: '#01612C',
          900: '#00471E',
          950: '#002E11',
        },
        neutral: {
          50: '#FFFFFF',
          100: '#FCFEFF',
          200: '#FAFDFF',
          300: '#F7FCFF',
          400: '#F2F9FF',
          500: '#EEF5FF',
          600: '#C1CFE6',
          700: '#869BBF',
          800: '#566C99',
          900: '#304473',
          950: '#14224A',
        },
        secondary: {
          50: '#F6F0FA',
          100: '#EADFF2',
          200: '#C8B1E0',
          300: '#A688CF',
          400: '#6446AB',
          500: '#281588',
          600: '#23117A',
          700: '#190B66',
          800: '#110752',
          900: '#0B043D',
          950: '#050226',
        },
        primary: {
          50: '#F5FCFF',
          100: '#E8F7FF',
          200: '#C9EAFF',
          300: '#A8D8FF',
          400: '#66ABFF',
          500: '#2370FF',
          600: '#1E60E6',
          700: '#1347BF',
          800: '#0C3499',
          900: '#072273',
          950: '#03144A',
        },
      },
    },
    fontFamily: {
      body: [
        'Raleway',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
      sans: [
        'Raleway',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
    },
  },
}
