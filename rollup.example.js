import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'

export default {
  entry: 'example/app.js',

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
      dest: 'example/dist/build.js',
      format: 'umd',
      sourceMap: true,
    },
  ],
}
