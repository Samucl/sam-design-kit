import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import del from 'rollup-plugin-delete';
import terser from '@rollup/plugin-terser'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import packageJson from './package.json' assert { type: 'json' };
import postcss from 'rollup-plugin-postcss';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      peerDepsExternal(),
      postcss({ extensions: ['.css']}),
      terser(),
    ],
  },
  {
    input: 'dist/cjs/types/src/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [
      dts(),
      del({ targets: 'dist/**/types/node_modules', hook: 'buildStart'}),
      del({ targets: 'dist/**/types/docusaurus.config.d.ts', hook: 'buildStart'}),
      del({ targets: 'dist/**/types/sidebars.d.ts', hook: 'buildStart'}),
      del({ targets: 'dist/**/types/src/pages', hook: 'buildStart'}),
      del({ targets: 'dist/**/types/docs', hook: 'buildStart'}),
    ],
    external: [/\.css$/],
  }
]