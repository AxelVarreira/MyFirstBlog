module.exports = {
  entry: ["@babel/polyfill", "./src/main.js"],
  output: {
    path: __dirname + "/public/scripts",
    filename: "bundle.js",
  },
  devServer: {
    //Caminho onde ele abrirá o servidor (Index.html)
    contentBase: __dirname + "/public",
  },
  module: {
    rules: [
      {
        test: /\.js$/, // '/ /' expressão regular, '$', significa a estensão
        exclude: /node_modules/, //Excluirá o node modules, pois o msm possui varios arquivos .js
        use: {
          loader: "babel-loader", //Usará o Babel loader para carregar o webpack
        },
      },
    ],
  },
};
