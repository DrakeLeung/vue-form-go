import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'

const pkg = require('./package.json')
const external = Object.keys(pkg.dependencies || {})

export default {
  entry: 'src/main.js',
  external,

  plugins: [
    babel(),
    nodeResolve(),
    commonjs({
      include: 'node_modules/**',
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],

  targets: [
    {
      dest: pkg.main,
      format: 'umd',
      moduleName: 'vue-form-go',
      sourceMap: true,
    },
  ],
}
