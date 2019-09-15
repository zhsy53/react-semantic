# Simple

## before

```sh
yarn config set proxy http://127.0.0.1:1080
yarn config set https-proxy http://127.0.0.1:1080
```

## basic

```sh
mkdir react-semantic && cd $_
yarn init -y

yarn add -D \
webpack webpack-cli \
eslint \
eslint-plugin-html \
prettier \
eslint-plugin-prettier eslint-config-prettier \
babel-loader @babel/core @babel/preset-env \
babel-eslint \
husky \
lint-staged \
```

## basic plugin

```sh
yarn add -D \
clean-webpack-plugin \
html-webpack-plugin \
webpack-dev-server \
webpack-merge \
mini-css-extract-plugin \
```

## react

```sh
yarn add react react-dom \
prop-types

yarn add -D \
@babel/preset-react \
eslint-plugin-react \
eslint-plugin-react-hooks \
@babel/plugin-proposal-class-properties \
```

## semantic-ui

- ### ui

```sh
#https://react.semantic-ui.com/usage/#css
yarn add semantic-ui-react \
semantic-ui-css
```

- ### dependency plugin

```sh
yarn add -D
style-loader \
css-loader \
sass-loader \
node-sass \
file-loader \
```

## ajax

```sh
yarn add axios
```
