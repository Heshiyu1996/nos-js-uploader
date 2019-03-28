import filesize from 'rollup-plugin-filesize';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

import baseConfig from './rollup.config.base';
import {
  name,
  version,
  author,
  license
} from '../package.json';

import transBigHumpName from './trans-big-hump-name';
const libName = transBigHumpName(name);

// banner
const banner =
  `${'/*!\n' + ' * '}${name}.js V ${version}\n` +
  ` * (c) 2018-${new Date().getFullYear()} ${author}\n` +
  ` * Released under the ${license} License.\n` +
  ` */`;

// 支持输出 []
export default {
  ...baseConfig,
  output: [
    // umd with compress version
    {
      file: `dist/${name}.min.js`,
      format: 'umd',
      name: libName,
    },
    // cjs and esm version
    {
      file: `dist/${name}.cjs.min.js`,
      format: 'cjs',
    },
    // cjs and esm version
    {
      file: `dist/${name}.esm.min.js`,
      format: 'es',
    }
  ],
  plugins: [
    ...baseConfig.plugins,
    uglify(
      {
        compress: {
          drop_console: true,
        },
        mangle: {
          reserved: ['Event'],
        } //不混淆其中某个变量名，其他变量名混淆
      },
      minify,
    ),
    filesize(),
  ],
};
