import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';

export default defineConfig({
  base: '/tst',
  build: {
    target: 'es2017',
    outDir: 'dist',
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',

        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg|webp)$/.test(name ?? '')) {
            return 'assets/images/[name]-[hash][extname]';
          }

          // if (/\.css$/.test(name ?? '')) {
          //   return 'assets/css/[name]-[hash][extname]';
          // }

          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },



  // plugins: [
  //   viteStaticCopy({
  //     targets: [
  //       {
  //         src: path.resolve(__dirname, 'src/assets/images/**/*'), // Исходный путь
  //         dest: path.resolve(__dirname, 'dist/assets/images/'),
  //       },
  //     ],
  //     verbose: true,
  //   }),
  // ],

 
});
