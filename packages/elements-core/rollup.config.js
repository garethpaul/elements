// Import the plugin
import json from '@rollup/plugin-json';
import typescript from 'rollup-plugin-typescript2';

// Add the plugin to the list of plugins
export default {
  input: 'src/index.ts',
  // multiple outputs for mjs and js
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
    },
    {
      file: 'dist/index.mjs',
      format: 'esm',
    },
  ],
  plugins: [
    typescript({
      tsconfig: 'tsconfig.json',
    }),
    json(),
  ],
};
