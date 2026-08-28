# RawShot

Protótipo web do projeto RawShot: um app de câmera fotográfica que captura fotos em modo RAW e permite editá-las depois com IA. Esta versão web contém duas telas: login e dashboard (galeria de fotos).

## Tecnologias utilizadas

- [React 19](https://react.dev/) — biblioteca para construção da interface
- [React Router DOM 7](https://reactrouter.com/) — roteamento entre as páginas (login e dashboard)
- [Vite 8](https://vitejs.dev/) — build tool e servidor de desenvolvimento
- JavaScript (ES Modules)
- CSS puro, com variáveis CSS para o tema claro/escuro
- Web Storage API (`localStorage`) — persistência de login e do tema escolhido

## Como instalar as dependências

Pré-requisitos: [Node.js](https://nodejs.org/) 18 ou superior e npm (já vem junto com o Node).

```bash
git clone https://github.com/veeneno/Sprint3-webdev.git
cd Sprint3-webdev
npm install
```

## Como executar o projeto

Modo desenvolvimento (com hot reload):

```bash
npm run dev
```

Depois é só abrir o endereço mostrado no terminal (por padrão [http://localhost:5173](http://localhost:5173)).

Outros comandos disponíveis:

```bash
npm run build    # gera a versão de produção na pasta dist/
npm run preview  # serve localmente a versão de produção já buildada
```

## Usuários e senhas necessários para teste

O login é fictício (hardcoded), apenas para fins de protótipo — não há um back-end de autenticação real. Use as credenciais abaixo na tela de login:

| Usuário | Senha |
| ------- | ----- |
| `admin` | `1234` |

Após o login, o estado de "logado" fica salvo no `localStorage`, então ao recarregar a página o usuário continua autenticado até clicar em "Sair".
