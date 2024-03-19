import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import terser from '@rollup/plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/bundle.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    url({
      include: ['**/*.woff', '**/*.woff2'],
      limit: 0,
      fileName: 'fonts/[name][extname]',
      destDir: 'dist',
    }),
    copy({
      targets: [
        { src: 'src/fonts/*', dest: 'dist/fonts' }
      ]
    }),
    terser(),
  ],
  external: ['react', 'react-dom', 'styled-components'],
};
