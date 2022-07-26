# Desafio: Login Form CSS

## **Índice**

# 💻 Sobre o desafio

---

Neste desafio você vai criar um formulário de login.

## Layout
<span>
<img src="../assets/login-mobile.png" width="150px">
<img src="../assets/login-web.png" width="510px">
</span>

Você pode visualizar o template do projeto clicando [neste link](https://www.figma.com/file/SX8XFyC5fAY09ai8Oykz0T/DD-%2F-Login-Form---CSS/duplicate)  e zip com os assets exportados.

Baixe os assets aqui ⤵️

[images.zip](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1813ad52-cdc3-4667-9520-7ae59ccf29ca/images.zip)

# 🚀 **Techs**

---

- HTML
- CSS

# 💡**Como começar?**

---

1 - Use o link do Figma como base para o projeto. Também disponibilizamos para download todos os assets necessários (imagens e ícones), para fazer o download basta clicar no link acima.  

2 - Leia com atenção todas as instruções do desafio.

3 - Bora codar! Lembre-se que você pode usar as tecnologias que se sentir mais confortável, mas também pode se desafiar usando novas techs, fazendo modificações e/ou adicionando funcionalidades no projeto como preferir. 🚀

4 - Compartilhe seu resultado ou tire suas dúvidas na nossa [**comunidade aberta**](https://discord.gg/bacwY2gDCF)  

# ✅ **Requisitos**

---

Neste desafio você vai construir *uma página para a captação de leads ou newsletter.* Caso você ainda não tenha feito os cursos do Discover ou queira fazer uma revisão, segue abaixo uma lista dos cursos e documentações que podem te ajudar a resolver este desafio.

- [:focus-within](https://developer.mozilla.org/pt-BR/docs/Web/CSS/:focus-within)
- [O guia estelar de HTML](https://app.rocketseat.com.br/node/o-guia-estelar-de-html)
- [O guia estelar de CSS](https://app.rocketseat.com.br/node/o-guia-estelar-de-css)
- [Posicionando foguetes](https://app.rocketseat.com.br/node/posicionando-foguetes)
- [Formulários de outro planeta](https://app.rocketseat.com.br/node/formularios-de-outro-planeta)
- [Alinhando os planetas](https://app.rocketseat.com.br/node/flexbox)
- [App bonito, até nos textos](https://app.rocketseat.com.br/node/flexbox)

**Requisitos para o desafio:**

- Você deve seguir o layout do Figma
- Os inputs devem ter estilos diferentes dependendo do estado (normal ou em foco)
    - Normal
        
        ![Normal](./images/normal.png)
        
    - Em foco
        
        ![Focus](./images/focus.png)
        
    - Checkbox
        
        ![checkbox.png](./images/checkbox.png)
        
- Deixar o layout responsivo como exemplo do Figma

# 🎨 Style Guide

---

## **Cores:**

Essas são algumas das cores usadas no projeto

```css
:root {
  --text-base: #afb6c2;
  --text-title: #d4ccb6;
  --background: #191816;
  --form-background: #24221f;
  --primary-color: #ffc632;
}
```

## **Tipo de fonte:**

font-family: Poppins 

font Weight: 400, 500 e 600

font-family: Roboto

Font Weight: 400 e 500

Você pode encontrar a fonte no [Google Fonts](https://fonts.google.com/)

##  **:focus-within**

> A pseudo-classe CSS :focus-within representa um elemento que recebeu o foco ou contém um elemento que recebeu o foco. Em outras palavras, isto representa um elemento que é correspondido por si só pela pseudo-classe :focus ou tem um descendente que é correspondido por :focus. (Isto inclui descendentes em shadow trees.)

```
/* Seleciona uma <div> quando um de seus descendentes é focado */
div:focus-within {
  background: cyan;
}
```
Este seletor é útil, pegando um exemplo comum, para destacar um todo ```<form> ```container quando o usuário focar em um de seus campos ```<input>.```

### Exemplo
Neste exemplo, o formulário receberá estilos de coloração especiais quando o input de texto recebe o foco

HTML
````html
<p>Tente digitar neste formulário.</p>

<form>
  <label for="given_name">Given Name:</label>
  <input id="given_name" type="text">
  <br>
  <label for="family_name">Family Name:</label>
  <input id="family_name" type="text">
</form>
````

CSS
````css
form {
  border: 1px solid;
  color: gray;
  padding: 4px;
}

form:focus-within {
  background: #ff8;
  color: black;
}

input {
  margin: 4px;
}
````

