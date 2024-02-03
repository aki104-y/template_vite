module.exports = {
  plugins: [
    require("autoprefixer")(), //自動ベンダープレフィックス付与
    require("css-declaration-sorter")({ //CSSプロパティ並び順
      order: "smacss", // alphabetical/ smacss / concentric-css
    }),
  ],
};