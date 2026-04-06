# 📋 Formulário de Cadastro

O **Formulário de Cadastro** é um projeto focado na criação de uma interface de registro de usuários moderna e funcional. Ele explora a fundo a validação de campos, o uso de máscaras e a experiência de preenchimento, garantindo que os dados inseridos estejam no formato correto antes do envio.

## 🛠️ Tecnologias

- **HTML5**: Estruturação de formulários com foco em acessibilidade (`labels`, `placeholders`, `types`).
- **CSS3**: Estilização personalizada, incluindo:
    - Estados de foco e erro (`:focus`, `:invalid`).
    - Design responsivo para preenchimento em dispositivos móveis.
    - Pseudoelementos para ícones ou mensagens de validação.
- **JavaScript**: 
    - Validação de campos obrigatórios.
    - Manipulação de eventos de envio (`submit`).
    - Feedback em tempo real para o usuário.

## ✨ Funcionalidades

- **Validação de Dados**: Verifica se campos como e-mail e senha seguem os padrões estabelecidos.
- **Feedback Visual**: Alteração de cores e exibição de mensagens de erro caso o preenchimento esteja incorreto.
- **Máscaras de Campo**: Formatação automática para campos como CPF ou Telefone (se implementado).
- **Botão de Envio Inteligente**: Prevenção do envio de formulários vazios ou incompletos.

## 🧠 O que eu aprendi

Este projeto foi fundamental para entender o fluxo de dados no Front-End:
1. **Atributos de Validação Nativa**: Uso de `required`, `minlength` e `pattern` no HTML.
2. **Objeto Event**: Como usar o `event.preventDefault()` para controlar o fluxo de envio dos dados.
3. **UX de Formulários**: A importância de labels claras e mensagens de erro que ajudem o usuário a corrigir o preenchimento sem frustração.
4. **Manipulação de Strings**: Limpeza e formatação de dados capturados dos inputs.

## 💻 Como executar o projeto

1. Clone o repositório:
   ```bash
   git clone [https://github.com/maryolivr/formulario-cadastro.git](https://github.com/maryolivr/formulario-cadastro.git)
