module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'main.js': /^app/,
        'vendor.js': /^node_modules/
      }

    },
    stylesheets: {
      joinTo: {
        'main.css': /^app/,
        'vendor.css': /^node_modules/
      }
    }
  },
  paths: {
    public: 'www'
  },
  plugins: {
    babel: {presets: ['latest']},
    autoReload:{enabled:true}
  },
  npm: {
    styles: {
      onsenui:['css/onsenui.css', 'css/onsen-css-components.css']
    },
    globals: {
      Vue:  'vue/dist/vue.common.js'

    }
  }
};
