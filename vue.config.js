module.exports = {
    baseUrl: process.env.NODE_ENV === "production" ? "./" : "/",
    devServer: {
        open: true,
        host: '127.0.0.1',
        port: 80,
        proxy: {
            '/xboot': {
                // target: 'http://127.0.0.1:8888',  // 请求本地 需要xboot后台项目
                 target: 'http://47.56.173.70:8080',  // 请求本地 需要xboot后台项目
                //target: 'http://localhost:8080',  // 请求本地 需要xboot后台项目
                ws: true
            },
            '/api': {
                //target: 'http://localhost:8080',
                //target: 'http://192.168.3.60:8080',
                 //target: 'http://127.0.0.1:8080',
                target: 'http://47.56.173.70:8080',
                //target: 'http://7bdd99c1.ngrok.io',
                pathRewrite: { "^/api": "" }
            }
        }
    },
    // 打包时不生成.map文件 避免看到源码
    productionSourceMap: false

}
