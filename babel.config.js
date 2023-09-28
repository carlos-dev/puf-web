import path from 'path'

module.exports = {
  presets: ['@babel/preset-typescript'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': path.resolve(__dirname, './src'),
        },
      },
    ],
  ],
}
