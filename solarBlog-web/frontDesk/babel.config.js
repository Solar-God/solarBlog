const prodPlugins = []
if (process.env.NODE_ENV === 'production') {
  // 如果是生产环境，自动清理掉打印的日志
  prodPlugins.push([
    'transform-remove-console',
  ])
}

module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    ...prodPlugins
  ]
};
