module.exports = function (api) {
  api.cache(true)
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            //estamos criando o apelido para cada um para ficar de uma forma mais facil de ser entendido
            // import { Groups } from './src/screens/Groups'; forma sem babel
            // import { Groups } from '@screens/Groups'; com babel
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@routes": "./src/routes",
            "@screens": "./src/screens",
            "@storage": "./src/storage",
            "@utils": "./src/utils",
          },
        },
      ],
    ],
  }
}
