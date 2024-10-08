// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     './index.html',
//     './src/**/*.{js,ts,jsx,tsx}'
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config
