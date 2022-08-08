import {defineConfig} from 'rollup'
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

export default defineConfig({
  input: ['index.ts'],
  plugins: [
    resolve(),
    typescript()
  ],
  output: {
    format:'umd',
    // dir: 'dist',
    name: 'SeatCore',
    file: 'dist/index.js'
  }
})