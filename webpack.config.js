import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isProd = process.env.NODE_ENV === "production";

export default {
  mode: isProd ? "production" : "development",
  devtool: "source-map",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: isProd ? "js/bundle.[contenthash].js" : "js/bundle.js",
    clean: true,
    assetModuleFilename: "images/[name][ext]",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },

      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          sources: {
            list: ["...", { tag: "img", attribute: "src", type: "src" }],
          },
        },
      },

      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[path][name][ext][query]",
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      inject: "body",
    }),

    new HtmlWebpackPlugin({
      template: "./src/pages/bicicletas/magic.html",
      filename: "pages/bicicletas/magic.html",
    }),

    new HtmlWebpackPlugin({
      template: "./src/pages/bicicletas/nebula.html",
      filename: "pages/bicicletas/nebula.html",
    }),

    new HtmlWebpackPlugin({
      template: "./src/pages/bicicletas/nimbus.html",
      filename: "pages/bicicletas/nimbus.html",
    }),

    new HtmlWebpackPlugin({
      template: "./src/pages/bicicletas.html",
      filename: "pages/bicicletas.html",
    }),

    new HtmlWebpackPlugin({
      template: "./src/pages/contato.html",
      filename: "pages/contato.html",
    }),

    new HtmlWebpackPlugin({
      template: "./src/pages/orcamento.html",
      filename: "pages/orcamento.html",
    }),

    new HtmlWebpackPlugin({
      template: "./src/pages/seguros.html",
      filename: "pages/seguros.html",
    }),

    new HtmlWebpackPlugin({
      template: "./src/pages/termos.html",
      filename: "pages/termos.html",
    }),

    new MiniCssExtractPlugin({
      filename: "styles/[name].css",
    }),
  ],

  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    compress: true,
    open: true,
    port: 8080,
  },
};
