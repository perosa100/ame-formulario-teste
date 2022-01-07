# React Contact Form Task

O site de membros precisa de uma maneira de lidar melhor com as perguntas dos usuários. O desenvolvedor criou um formulário de contato usando React.JS para que os usuários possam preencher o formulário e enviar perguntas a diferentes departamentos com base no tipo de pergunta e na opção de adesão.

---

# Setup

Este aplicativo de reação foi gerado usando [Create React App](https://github.com/facebook/create-react-app). Possui todas as configurações padrão.

Siga estas etapas se estiver usando o modo zip / git (ou seja, não disponível no IDE Devskiller no navegador):

1. `npm install` – install dependencies
2. `npm test` – run all tests (this will be used to evaluate your solutions)
3. `npm start` – run the project locally

---

## Your Task

Sua tarefa é terminar o formulário para que tenha todas as seguintes funcionalidades:

### 1. Form should work

- Conclua o componente `ContactForm` para que funcione (agora não funciona)
- Os valores iniciais devem ser renderizados, mesmo se estiverem vazios
- O usuário deve ser capaz de alterar os valores
- Cada mudança deve invocar a função `onChange` com o nome e valor do widget alterado
- O usuário pode enviar o formulário usando o botão ou pressionando ENTER nos campos (exceto `textarea`)
- O envio do formulário deve invocar a função `onSubmit` com os dados do formulário atual

### 2. User can log in, so name and email are filled-in

- Quando o usuário pressiona o botão de login, as informações do usuário atual devem aparecer
- Quando o usuário está logado, o nome do usuário e e-mail devem ser preenchidos dentro do formulário

### 3. After form is sent a _Thank You_ message should appear

- Conclua o componente `Message`
- Ele não deve exibir nenhum cabeçalho (`.message-header`) por padrão, a menos que especificado
- Ele pode usar a propriedade de texto ou apenas exibir seus filhos em `.message-body`

---

Agora é sua vez de:

- Corrija os problemas para que os testes passem
- Resolva todos os problemas mencionados aqui
- Teste seu código na plataforma para ver se todos os testes foram aprovados

## Good Luck!
