# ProcessFiles [ 📂 > 📖 ] 

## Introdução ✅

Após o download do projeto execute o (npm install) no terminal.

Projeto feito para extrair links de arquivos Markdown, após as extração os links são passados para um fetch aonde o mesmo valida e retorna o status de cada um.
As proximas versões serão otimizadas para a experiencia do desenvolvedor.

### SCRIPTS:

  * <b> npm run test:file </b> - node ./src/index.js ./Files/text.md File <br>
  <i> abre o arquivo test.md e utiliza um regex para extrair os links usando grupos. </i>
  * <b> npm run test:dir </b> - node ./src/index.js ./Files Dir <br>
  <i> abre a pasta Files e extrair os links de todos os arquivos. </i>
  * <b> npm run test:validate </b> - node ./src/index.js ./Files/text.md Validate <br>
  <i> abre o arquivo test.md e utiliza um regex para extrair os links usando grupos e depois valida todos os links
  usando fetch(), cria e salva os links em uma pasta chamada validacao. <i>
 
 

### Sobre
> Esse projeto foi desenvolvido com a finalidade de entender como validar um link.<br>
> NodeJs: (^12.17.0 || ^14.13 || >=16.0.0 - v18.13.0-DEV).<br>
> Dependências: chalk(^5.2.0).<br>
> Essa é a primeira vez que eu crio um projeto em NodeJs, a estrutura dos arquivos e códigos ainda não estão 100% perfeitas porém eu fiz eu meu melhor para deixar tudo funcionando, caso você que esteja lendo tenha alguma sugestão me mande uma mensagem no linkedin. (https://www.linkedin.com/in/victor23hd/)
