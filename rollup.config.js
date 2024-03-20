import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import url from '@rollup/plugin-url';
import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';

import terser from '@rollup/plugin-terser'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/cjs/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/es/bundle.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      peerDepsExternal(),
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
      del({ targets: 'dist/*', hook: 'buildStart' }),
    ],
  },
  {
    input: 'dist/cjs/types/src/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [
      dts.default(),
      del({ targets: 'dist/**/types/node_modules', hook: 'buildStart'}),
      del({ targets: 'dist/**/types/docusaurus.config.d.ts', hook: 'buildStart'}),
      del({ targets: 'dist/**/types/sidebars.d.ts', hook: 'buildStart'}),
      del({ targets: 'dist/**/types/src/pages', hook: 'buildStart'}),
      del({ targets: 'dist/**/types/docs', hook: 'buildStart'}),
    ],
    external: [/\.css$/],
  }, 
]