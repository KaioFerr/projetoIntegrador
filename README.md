# Projeto Integrador

Este projeto é uma atividade desenvolvida como parte da disciplina de Projeto Integrador de Extensão I, da UNIFAGOC. O objetivo é criar um jogo educativo estilo plataforma 2D, voltado para crianças do ensino fundamental 1, visando o desenvolvimento de suas habilidades matemáticas.

## Descrição do Projeto

O jogo foi desenvolvido utilizando as tecnologias web JavaScript, HTML e CSS. Através de uma interface interativa e amigável, as crianças podem praticar conceitos matemáticos de forma divertida e envolvente.

## Funcionalidades

- Controles: setas ou "A, D" para andar, seta para cima, "W" ou espaço para pular, "E" para hackear o painel ou salvar o checkpoint "P" para pausar, "N" para ligar/desligar a música e "M" para ligar/desligar todos os sons.
- Para avançar é preciso hackear os painéis com cadeado (aperte "E" perto deles): cada painel tem uma conta como senha e, ao acertar, o cadeado abre. As contas são de adição e subtração, geradas de forma aleatória e com dificuldade crescente.
- 4 fases (Soma, Subtração, Mistas e Desafio), cada uma com 8 contas. A fase seguinte é liberada ao concluir a anterior.
- Painel compacto com fase, tempo, contas resolvidas e vidas. A câmera também sobe quando você chega nas plataformas altas.
- Funciona no celular na horizontal, com botões de toque (andar, pular e E) e entra em tela cheia sozinho ao virar o celular (alguns navegadores pedem um toque na tela antes).
- Checkpoints (bandeiras): aperte "E" perto da bandeira para salvar. Só dá para salvar depois de hackear todos os painéis que ficam antes dela.
- Cair no vazio custa uma vida e volta ao último checkpoint salvo.
- Tela de resultados no fim de cada fase: estrelas, tempo, acertos, erros, quedas e melhor tempo.
- Efeitos sonoros 8-bit gerados no próprio navegador (sem arquivos de áudio): pulo, painel, senha certa/errada, cadeado abrindo, checkpoint, queda e fim de fase. Música de fundo synthwave no clima de Blade Runner, também gerada no navegador: nos menus e durante as contas toca só o ambiente, e na fase entra a batida (bumbo, caixa e chimbal) com o arpejo mais rápido. Botões separados para a música e para todos os sons (no painel, nos menus e na pausa). O som para quando o jogo sai da tela do celular.
- No celular, o nome do grupo é digitado num teclado do próprio jogo, sem abrir o teclado do sistema (com tecla de acentos).
- Escolha de personagem (Adam ou Olive). Nome do grupo e melhores resultados ficam salvos no navegador.

## Desenvolvimento

- `npm install` e depois `npm run build` gera a pasta `dist`. `npm start` abre o servidor local com recarga automática.
- Em Node 17 ou mais novo, use `NODE_OPTIONS=--openssl-legacy-provider` antes do comando, por causa do webpack 4.

## Como Executar o Jogo
1. acesse o site https://kaioferr.github.io/projetoIntegrador/
2. Siga as instruções na tela para começar a jogar.

### Instalar no celular (tela cheia)
- **Android (Chrome):** abra o site, toque no menu ⋮ e em "Instalar app" ou "Adicionar à tela inicial".
- **iPhone/iPad (Safari):** abra o site, toque em Compartilhar e em "Adicionar à Tela de Início".

O ícone que aparece na tela de início abre o jogo em tela cheia, sem a barra do navegador. Os arquivos do app (manifesto e ícones) ficam em `src/public` e são copiados para a raiz do `dist` no build.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para propor melhorias, correções de bugs ou novas funcionalidades através de pull requests.

## Autores

Este projeto foi desenvolvido por Caio Moreira Cancela, Luis Vitor Carvalho Dutra , Juan Pablo Nunes Ferraz, Kaio Henrique Teixeira Ferreira, Rafael Toledo Ferraz e Savio Barbosa Freitas como parte da disciplina de Projeto Integrador de Extensão I, sob a orientação do professor Ana Amélia de Souza Pereira.

## Observações
O jogo está em desenvolvimento, ou seja, ainda possui alguns bugs que iremos resolver. É necessário dar um refresh na página para todos os itens carregarem.

