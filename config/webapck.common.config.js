const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BeautifyHtmlWebpackPlugin = require("beautify-html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const config = {
  entry: {
    main: ["./src/index.js"],
  },

  output: {
    path: path.resolve(__dirname, "../dist"),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.(woff(2)?|ttf|eot)$/,
        type: "asset/resource",
        generator: {
          filename: "./assets/fonts/[name][ext]",
        },
      },
      {
        test: /\.hbs$/,
        use: [
          {
            loader: "handlebars-loader",
            options: {
              helperDirs: [path.join(__dirname, "../src/views/helpers")],
              partialDirs: [
                path.join(
                  __dirname,
                  "./src/views/page-blocks",
                  "./src/views/layouts"
                ),
              ],
            },
          },
          {
            loader: "string-replace-loader",
            options: {
              search: "@img",
              replace: "./assets/images",
              flags: "g",
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /swiper\.esm\.js/,
        sideEffects: false,
      },
      {
        test: /\.(png|jpg|svg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
        generator: {
          filename: (name) => {
            const path = name.filename.split("/").slice(1, -1).join("/");
            return `assets/${path}/[name][ext]`;
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "../src/views/pages/index.hbs"),
      minify: {
        collapseWhitespace: false,
        removeComments: false,
      },
      inject: true,
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: path.join(__dirname, "../src/views/pages/about.hbs"),
      minify: {
        collapseWhitespace: false,
        removeComments: false,
      },
      inject: true,
    }),

    new HtmlWebpackPlugin({
      filename: "blogs.html",
      template: path.join(__dirname, "../src/views/pages/blog.hbs"),
      minify: {
        collapseWhitespace: false,
        removeComments: false,
      },
      inject: true,
    }),
    new HtmlWebpackPlugin({
      filename: "blog-page.html",
      template: path.join(__dirname, "../src/views/pages/blog-page.hbs"),
      minify: {
        collapseWhitespace: false,
        removeComments: false,
      },
      inject: true,
    }),
    new HtmlWebpackPlugin({
      filename: "gallery.html",
      template: path.join(__dirname, "../src/views/pages/gallery.hbs"),
      minify: {
        collapseWhitespace: false,
        removeComments: false,
      },
      inject: true,
    }),
    new BeautifyHtmlWebpackPlugin(),

    new CopyPlugin({
      patterns: [{ from: "src/images", to: "assets/images" },
      ], // { from: "src/data", to: "assets/data" }
    }),
  ],
};

module.exports = config;
