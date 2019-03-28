import baseConfig from './rollup.config.base';
import serve from 'rollup-plugin-serve';

import { name } from '../package.json';

import transBigHumpName from './trans-big-hump-name';
const libName = transBigHumpName(name);

export default {
  ...baseConfig,
  output: [
    {
      file: `dist/${name}.js`,
      format: 'umd',
      name: libName,
      sourcemap: true,
    },
    {
      file: `dist/${name}.cjs.js`,
      format: 'cjs',
      name: libName,
      sourcemap: 'inline',
    },
    // cjs and esm version
    {
      file: `dist/${name}.esm.min.js`,
      format: 'es',
    }
  ],
  plugins: [
    ...baseConfig.plugins,
    serve({
      port: 8083,
      contentBase: [''],
    }),
  ],
};
