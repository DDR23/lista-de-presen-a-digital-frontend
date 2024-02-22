## 💻 Projeto

Nesse projeto proposto pela Rocketseat, o objetivo foi fazer uma migração de um projeto escrito em JSX para TSX, abordando conceitos basicos de instalação de dependencias, consfigurações basicas do typescript e tipagem. Por escolha minha tambem foi adicionado conceitos de sass e reponsividade.

<br />
<br />

iniciando projeto
```bash
npm i
```
```bash
npm i -D sass
```
<br />

instalando typescript
```bash
npm i typescript --save-dev
```
```bash
npm i --save-dev @types/react
```
```bash
npm i --save-dev @types/react-dom
```
<br />

adicionando arquivo tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": [
      "DOM",
      "DOM.Iterable",
      "ESNext"
    ],
    "allowJs": false,
    "skipLibCheck": false,
    "esModuleInterop": false,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": [
    "./src"
  ]
}
```