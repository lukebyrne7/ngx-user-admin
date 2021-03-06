import angular from 'rollup-plugin-angular';
import typescript from 'rollup-plugin-typescript2';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { minify as minifyHtml } from 'html-minifier';
 
const htmlminOpts = {
    caseSensitive: true,
    collapseWhitespace: true,
    removeComments: true,
};

export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/ngx-user-admin.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'ng.ngx-user-admin',
  external: ['@angular/http', '@angular/router'],

  plugins: [
    angular({
       preprocessors: {
          template: template => minifyHtml(template, htmlminOpts)
       }
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    typescript(),
    nodeResolve({ jsnext: true, main: true })
  ],

  globals: {
    '@angular/core': 'ng.core',
    '@angular/http' : 'vendor._angular_http',
    '@angular/router' : 'vendor._angular_router',
    'rxjs/Observable': 'Rx',
    'rxjs/ReplaySubject': 'Rx',
    'rxjs/add/operator/map': 'Rx.Observable.prototype',
    'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
    'rxjs/add/observable/fromEvent': 'Rx.Observable',
    'rxjs/add/observable/of': 'Rx.Observable',
    'npm:moment/moment': 'moment'
  }
}
