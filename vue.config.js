const { defineConfig } = require('@vue/cli-service')
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true
},
module.exports = {
    css:{
      prependData:{
        sass:{
          additionalData: `
            @use "@/styles/_variables.sass"
            @use "@/styles/_mixins.sass"
            @use "@/styles/global.sass"
          `
        }
      }
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'sass',
            patterns: [path.resolve(__dirname, "./src/styles/_variables.sass"), path.resolve(__dirname, "./src/styles/_mixins.sass"),path.resolve(__dirname, "./src/styles/global.sass")
            ]
        }
    },
    devServer: {
        watchOptions: {
            poll: true
        },
        proxy: 'http://localhost:8080'
    },
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                options.transformAssetUrls = {
                    img: 'src',
                    image: 'xlink:href',
                    'b-avatar': 'src',
                    'b-img': 'src',
                    'b-img-lazy': ['src', 'blank-src'],
                    'b-card': 'img-src',
                    'b-card-img': 'src',
                    'b-card-img-lazy': ['src', 'blank-src'],
                    'b-carousel-slide': 'img-src',
                    'b-embed': 'src'
                };
                return options
            });
        config
            .plugin('prefetch')
            .tap(args => {
                return [
                    {
                        rel: 'prefetch',
                        include: 'asyncChunks',
                        fileBlacklist: [
                            /\.map$/,
                            /pdfmake\.[^.]+\.js$/,
                            /xlsx\.[^.]+\.js$/,
                            /fabric[^.]*\.[^.]+\.js$/,
                            /responsivedefaults\.[^.]+\.js$/,
                        ]
                    }
                ]
            })
    },

});