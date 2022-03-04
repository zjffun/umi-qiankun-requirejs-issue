import { defineConfig } from 'umi';

export default defineConfig({
  qiankun: {
    slave: {},
  },
  chainWebpack(memo) {
    // use qiankun with requirejs
    memo.output.libraryTarget('window');

    // use this will not auto run
    // memo.output.umdNamedDefine(true);
  },
  devServer: {
    port: 8850,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '*', component: '@/pages/index' }],
  fastRefresh: {},
});
