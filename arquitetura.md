# Desafio sobre arquitetura

Descreva como você projetaria um sistema online que atenda as histórias:
- Quero poder enviar arquivos em formato .csv para o sistema, de modo que seja possível baixá-los depois;
- Quero poder ler o conteúdo dos meus arquivos .csv de maneira consolidada na plataforma;
- Quero poder ver a lista dos meus arquivos enviados e poder fazer busca através de filtros e parâmetros;
- Quero poder exportar os dados lidos dos meus arquivos em formato .csv;
- Quero poder enviar por email os dados lidos dos meus arquivos.
De maneira simplificada, comente qual é a arquitetura ou design que você considera mais adequados para essa solução?

## Resposta
A configuração de um servidor de armazenamento de arquivo em nuvem poderá ser uma alternativa para atender a necessidade de armazenamento de arquivos no formato **.csv**, de modo que os arquivos estejam disponíveis para serem baixados, listados e visualizados posteriormente de forma online.
Para enviar um arquivo para o servidor, é necessário um formulário que possibilita explorar as pastas do sistema operacional na escolha do arquivo **.csv** a ser enviado. Neste mesmo formulário, é possível existir uma área, destinada à realização do processo inverso, que é equipada com recursos de filtros, os quais realizam uma busca específica de arquivos no servidor e apresentam a relação dos arquivos encontrados. 
Essa área deverá dispor de opções que possibilitam a escolha de um, alguns ou todos os arquivos da relação, e com alternativas para baixar o(s) arquivo(s) selecionado(s), apresentar na tela o conteúdo do(s) arquivo(s) da seleção de forma consolidada, além de possibilitar a exportação deste conteúdo e o envio por e-mail.
Em relação à tecnologia no Back-End, o Node.js poderá ser utilizado com a biblioteca HTTPS, com o Express e com as bibliotecas específicas, para trabalhar com sistema de arquivos (FS),  arquivos no formato CSV (ParseFile), upload de arquivos (Multer) e, em caso de download, com o próprio Express, com rotas  configurada para servir arquivos estáticos. No Front-End o framework Angular versão 9 poderá ser utilizado para construir os formulários, com uso do CSS e plugins/frameworks Bootstrap.
