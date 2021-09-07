import { resolve as _resolve } from "path";
import HtmlWebPackPlugin from "html-webpack-plugin";

export const entry = "./src/index.js";
export const output = {
  // eslint-disable-next-line no-undef
  path: _resolve(__dirname, "dist"),
  filename: "bundle.js",
};
export const resolve = {
  extensions: [".js", ".jsx"],
};
export const module = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
      },
    },
    {
      test: /\.html$/,
      use: [
        {
          loader: "html-loader",
        },
      ],
    },
  ],
};
export const plugins = [
  new HtmlWebPackPlugin({
    template: "./public/index.html",
    filename: "./index.html",
  }),
];