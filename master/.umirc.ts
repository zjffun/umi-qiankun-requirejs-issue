import { defineConfig } from 'umi';

export default defineConfig({
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'slave', // 唯一 id
          entry: '//localhost:8849', // html entry
        },
        {
          name: 'slave-window', // 唯一 id
          entry: '//localhost:8850', // html entry
        },
      ],
    },
  },
  devServer: {
    port: 8848,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/slave',
      microApp: 'slave',
    },
    {
      path: '/slave-window',
      microApp: 'slave-window',
    },
    {
      path: '*',
      component: '@/pages/index',
    },
  ],
  fastRefresh: {},
});
