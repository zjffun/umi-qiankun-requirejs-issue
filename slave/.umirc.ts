import { defineConfig } from 'umi';

export default defineConfig({
  qiankun: {
    slave: {},
  },
  devServer: {
    port: 8849,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '*', component: '@/pages/index' }],
  fastRefresh: {},
});
