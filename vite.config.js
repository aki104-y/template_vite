import { defineConfig } from 'vite';
import { resolve } from 'path'; //ファイルやディレクトリのパスに介入（操作）できるようになる


export default defineConfig({
  base: './',
  root: "src", //index.htmlが置かれているパス
  css: {
    devSourcemap: true, //ソースコード用のマッピングファイルを有効化
  },
  build: {
    outDir: "../dist", //プロジェクトルートからの相対パス(index.htmlからの相対パス)
    emptyOutDir: true, //distがプロジェクトルート外になってしまったため、警告を防ぐ
    rollupOptions: {
      input: {
        '': resolve(__dirname, 'src/index.html'),
        // 'test': resolve(__dirname, 'src/test/index.html'),  複数のhtmlファイルを作成するときに記述
      },
      output: {
        //ビルドファイルの条件分岐
        entryFileNames: 'assets/js/main.js',
        chunkFileNames: 'assets/js/main.js',
        assetFileNames: (assetFile) => {
          if (/\.css$/.test(assetFile.name)) {
            return 'assets/css/style.css';
          } else if (/\.( gif|jpeg|jpg|png|svg|webp| )$/.test(assetFile.name)) {
            return 'assets/images/[name].[ext]';
          } else if (/\.( ttf|otf|eot|woff|woff2| )$/.test(assetFile.name)) {
            return 'assets/fonts/[name].[ext]';
          } else {
            return 'assets/[name].[ext]';
          }
        }
      }
    }
  }
})