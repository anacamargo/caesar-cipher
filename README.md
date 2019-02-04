# Caesar-Cipher - Cifra de César

## Objetivo do projeto
Este projeto foi proposto pela Laboratória durante o bootcamp de 2019.
O objetivo do programa é criptografar e descriptografar mensagens  usando a Cifra de César, um tipo de cifra por substituição, em que uma letra no texto original é substituída por outra, seguindo um número fixo para essa subtituição.

## Processo de desenvolvimento
Foi criado, primeiramente, um diagrama de blocos para entender o fluxo do sistema e a estrutura de pastas e arquivos (mostrado abaixo). No arquivo HTML foram adicionados elementos para receber os dados digitados pelo usuário, e no arquivo JavaScript os dados foram captados e manipulados para realizar a criptografia e descriptografia da mensagem. Uma vez concluído, o HTML foi incrementado, assim como o CSS, usando como tema uma história que justificasse a necessidades do usuário em criptografar uma mensagem.
Um arquivo de testes foi criado no final do processo,seguindo as orientações dos mentores. O intuito foi usar dados que poderiam ser considerados criticos e encontrar possíveis erros, tais como valores nulos, números negativo, números com casas decimais muito grande entre outros. Com o código devidamente testado foi analisado a necessidade de melhorias, como a remoção de estruturas repetidas e a organização das funções para que pudesse ser lido de forma clara.

![Diagrama de Blocos](https://github.com/anacamargo/caesar-cipher/blob/master/src/images/diagrama.png)

Estrutura de pastas e arquivos

```
├── .gitignore
├── README.md
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── tests.js
│   ├── style.css
|   └── images
```
## História por trás da interface
![Nota do MEC](https://github.com/anacamargo/caesar-cipher/blob/master/src/images/img_5.png)

O que essa nota do MEC não informa é que além de treinado em Marxismo e Leninismo o jornalista também é hacker e agente infiltrado da KGB aqui no Brasil.
Para enviar sua informações com segurança para Moscou o jornalista/agente utiliza um sistema de criptografia. A chave usada por ele é o número de caracteres do titulo de suas máterias. Os russos então verificam a data da mensagem, acessam a coluna do agente referente esse dia e realizam a descriptografia.
Os russos, por sua vez, usam como chave datas importantes,hoje por exemplo quando a matéria do MEC saiu a chave foi a data de inicio da Revolução Russsa.

## Funcionalidades
*  Elege uma chave (numeros positivos e negativos) indicando quantas posições de deslocamento queremos utilizar
*  Insere uma mensagem (letras maiúsculas e minúsculas) que queremos cifrar ou decifrar
*  Exibe o resultado da mensagem cifrada ou decifrada
*  Caracteres especias (como espaços, pontuação, acentos, etc.)são exibidos na tela sem criptografia

## Agradecimentos
A toda e equipe da Laboratória, as colegas de sala e em especial aos membros do Squad AB (Ana Carolina Biscalchin,Ana Carolina Drumond, Ana Paula Lopes Araujo, Bruna Almeida e Bruna Gabriele Paula) que me apoiaram e me instigaram a aprender cada vez mais.

