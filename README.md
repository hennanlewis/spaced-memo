# Spaced Memo
Este é um projeto de aplicação web que utiliza a técnica de memorização espaçada para melhorar a retenção de informações na memória de longo prazo. A aplicação permite que o usuário crie um conjunto de cartões de estudo contendo informações que deseja memorizar, e então usa a técnica de revisão espaçada para apresentar os cartões em intervalos cada vez maiores de tempo. Com a revisão frequente e espaçada, o usuário é incentivado a reter as informações de forma mais eficaz, tornando mais fácil a sua recuperação posteriormente.

No começo de 2023 voltei a estudar japonês após ter estudado durante 7 meses em 2019, mas dessa vez documentarei meu progresso em vídeos no YouTube para que isso me incentive a não parar novamente. Assim como da última vez, utilizo o aplicativo Anki para memorização espaça, uma das aplicações mais famosas e completas, então pensei "por que não fazer um projeto que envolva isso" mas que seja obviamente mais simplificado.

Recursos que este projeto busca completar:

- [ ] Criação de baralhos
- [ ] Criação de typos de notas
- [ ] Criação de cartões de estudo personalizados
- [ ] Revisão de cartões de estudo em intervalos espaçados
- [ ] Interface de usuário intuitiva e fácil de usar
- [ ] Estatísticas de revisão

# Algoritmo de cálculo do intervalo no Anki
Para entender o cálculo de escolha de novo intervalo do Anki, primeiro é necessário entender que necessita de alguns valores iniciais de taxa de intervalo:
- taxa de intervalo fácil, e seu valor padrão é 2,5;
- taxa de intervalo difícil, e seu valor padrão é 1,2;
- taxa bonus para fácil, e seu valor padrão é 1,3;
- taxa de modificador de intervalo.

Ao estudar um cartão, existem quatro opções para selecionar de acordo com a dificuldade: outra vez, difícil, bom e fácil. Cada uma dessas dificuldades,  processo de cálculo é pareceido mas tem ligeiras mudanças, então:
- Caso a alternativa selecionada seja "outra vez", o cartão volta para a fila diária e a `taxa de intervalo para fácil` diminui 0,2;
- Caso a alternativa selecionada seja "difícil", a `taxa de intervalo para fácil` diminui 0,15 e o novo intervalo é calculado com `valor atual do intervalo * taxa de intervalo difícil * taxa de modificador de intervalo`;
- Caso a alternativa selecionada seja "bom", a `taxa de intervalo para fácil` não muda e o novo intervalo é calculado com `valor atual do intervalo taxa de intervalo fácil * taxa de modificador de intervalo`;
- Caso a alternativa selecionada seja "fácil", a `taxa de intervalo para fácil` aumenta 0,15 e o novo intervalo é calculado com `valor atual do intervalo * taxa de intervalo fácil * taxa de modificador de intervalo`.

O valor da `taxa de intervalo para fácil` não pode ser menor que 1 nem maior que 2,5 e todas as outras taxas não podem ser 0.

# Requerimentos para instalação
Ter o Node.js instalado, no meu caso, eu tenho preferência por utilizar o gerenciador de pacotes do `yanr`, mas não é realmente algo necessário, o guia de instalação não mostra como fazer somente com ele.

# Instalação e execução

1. Após clonar o repositório para sua máquina, execute o seguinte código por linha de comando na pasta em que o projeto se encontra para instalar as dependências necessárias:

```shell
yarn
```

Caso tenha preferência pelo `npm` como gerenciador de pacotes, utilize:

```shell
npm install
```

2. Após a finalização da instalação das dependências necessárias, o seguinte código executa a aplicação:

```shell
yarn dev
```

ou caso tenha preferência pelo `npm` como gerenciador de pacotes:

```shell
npm run dev
```

- Caso a aplicação não abra automaticamente no navegador, abra [http://localhost:3000](http://localhost:3000) no navegador (ou a porta configurada no arquivo .env).

3. Para parar a aplicação, pressione `ctrl+c` no terminal de execução do projeto.
