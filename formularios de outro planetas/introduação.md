## Formularios 

*** Pra que serve? ***

- Capturar dados de entreda (Input)
- Interação
- Controle

*** Pré requisitos ***

-HTML Básico

*** Dominar ***

- Estilização
- Validação
- Controles customizados
- Javascript

## Form

<form>

- Elemento que define formulário
- É um container estilo <section> <footer>

*** Atributos básicos ***

- action
- method

---

<Fieldset>

```html

<form id="contato" action="" method=""> </form>

  <fieldset form="contato" name="inputs-contato">
    <legend>contato</legend>
    <label for="">Name</label>
    <input type="text">
  </fieldset>

```

- Agrupamentos de campos
- Mesmo propósito
- Semântico
- Acessibilidade

*** Atributos especiais ***

* disabled
  - dasabilita todos os elementos internos
  - Não serão enviados ao submeter o formulário

* form
  - O id de um formulário ao qual esse fieldset pertence
  - não precisa estar dentro de  formulário

  *name
    - nome do grupo

  <legend>
    - Nome do agrupamento
    - Primeiro elemento dentro do fieldset


---

<Label>

- Associar ou identificar uma ou mais tag de entrada de dados
- Acessibilidade
-Você poderá clicar para mudar o foco de entrada de dados

*** Atributos ***

* FOR
   - Para fazer a conexão entre label e a tag de entrada de dados

  - É feita via id do input

  - Só funciona co elementos específicos
    - Button, input, (not hidden), meter, output,
    progress, select, textarea.

---

<button>

- Representa um botão 
- Usado para enviar formulários
- É estilizado pelo user agent


*** Atributos comuns ***

* Type
  - submit
  - reset
  - button
- Autofocus
-disable
-name
-value
- form


---

<datalist>

- Lista de valores com sugestão a uma tag <input>
- Valores sugestivos e não obrigatórios
- Usúarios poderão acessar um dos valores, ou colocar um valor diferente da sugestão

<datalist id="fruitsdata">
<option>apple</option>
<option>banana</option>
<option>mango</option>
<option>orange</option>
</datalist>

*** list ***

- recebe como valor o id de um <datalist> residente no mesmo documento

*** Tipos de input suportados ***

- text, search, url, tel, email, date, month, week, time, data-time, number, range e color

- Valores de datalist que não são compatíveis com o tipo do <input> não serão suportados


*** Tipos de input não suportados ***

- HIdden, password, chackbox, radio, file, ou qualquer outro tipo de button




