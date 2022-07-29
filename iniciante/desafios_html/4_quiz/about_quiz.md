# 4. [Quiz](https://mellcosta.github.io/desafiosRocketseat/iniciante/desafios_html/4_quiz/quiz.html) 

## 💻 Sobre o desafio

---

Nesse desafio você deve criar um quiz de perguntas e respostas. 

Adicione no mínimo 3 perguntas com 4 opções de respostas cada. 

Você pode escolher qual o tema do quiz.

## Iniciando o projeto

Primeiro vamos criar o arquivo HTML. Você pode dar qualquer nome para este arquivo, desde que use a extensão `.html`. Exemplo: **quiz.html** 

Para criar a estrutura base do HTML no Visual Studio Code, você pode digitar `!` e `TAB` em seguida. Feito isso, você vai ficar com uma estrutura parecida com o código abaixo:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Quiz</title>
  </head>
  <body>

  </body>
</html>
```

<aside>
💡 Lembre-se de dar um título para o documento usando a tag `<title>` 
`<title>Quiz</title>`

</aside>

### Criando o Quiz

Quiz é um jogo de perguntas e respostas. Uma forma simples de criar um quiz, é adicionando um formulário, e usar a lista ordenada para criar as perguntas e inputs do tipo radio para as opções de respostas.

- Primeiro você pode adicionar um formulário na página

```html
<form action="">
   <!-- Aqui você vai adicionar as perguntas e opções de respostas -->
</form>
```

<aside>
💡 Não precisa se preocupar com os atributos do form pois, nesse momento, vamos focar apenas na estrutura HTML do quiz e o mesmo não precisa ser enviado.

</aside>

### Listando as perguntas e respostas

Podemos criar uma lista ordenada (`ol`) para fazer a lista de perguntas e respostas. A estrutura ficaria algo parecido com a estrutura abaixo:

```html
<ol>
  <li>
    <h3>Pergunta 1</h3>
    <div>
      <input type="radio" name="question-1" id="question-1-a" value="A" />
      <label for="question-1-a">A) opção 1</label>
    </div>
    <div>
      <input type="radio" name="question-1" id="question-1-b" value="B" />
      <label for="question-1-b">B) opção 2</label>
    </div>
    <div>
      <input type="radio" name="question-1" id="question-1-c" value="C" />
      <label for="question-1-c">C) opção 3</label>
    </div>
    <div>
      <input type="radio" name="question-1" id="question-1-d" value="D" />
      <label for="question-1-d">D) opção 4</label>
    </div>
  </li>
<!-- Adicionar as outras perguntas dentro de um li -->
</ol>
```

<aside>
❓ Aula sobre listas

[](https://app.rocketseat.com.br/node/o-guia-estelar-de-html/group/trabalhando-com-elementos/lesson/listas)

</aside>

<aside>
❓ Input type="radio"

[](https://app.rocketseat.com.br/node/formularios-de-outro-planeta/group/tags-de-entrada-de-dados/lesson/radio)

</aside>

## Como deve ficar a página ao final?

Ao finalizar o desafio você vai ter um resultado parecido com o da imagem abaixo. 

Lembrando que as imagens e textos abaixo são ilustrativos e você pode adicionar seu próprio conteúdo conforme as instruções acima.

![Modelo do Quiz](../../assets/quiz.png)

### ~🌈🦄Click on [print](./assets/narutoQuiz.PNG) or <a href="https://mellcosta.github.io/desafiosRocketseat/iniciante/desafios_html/4_quiz/quiz.html" target="_blank" >real</a> to see my design: