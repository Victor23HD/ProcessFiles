# ProcessFiles [ 📂 > 📖 ] 

Esse projeto tem como objetivo extrair links de arquivos Markdown e validá-los utilizando a biblioteca fetch. As proximas versões sera otimizada para aceitar outros arquivos e melhorar a experiência do desenvolvedor.

## Instalação
Após o download do projeto, execute o seguinte comando no terminal:

```console
npm install
```

## Scripts

### Teste em arquivo
```console
npm run test:file
```
Este script abre o arquivo `test.md`, extrai os links utilizando regex e com grupos e, em seguida, os valida utilizando `fetch`.

### Teste em Diretório
```console
npm run test:dir
```
Este script abre a pasta `Files` e extrai os links de todos os arquivos Markdown presentes nela.

### Validação de Links em Arquivo
```console
npm run test:validate
```
Este script abre o arquivo `test.md`, extrai os links utilizando um regex com grupos e, em seguida, os valida utilizando fetch. Os links validados são salvos em uma pasta chamada `validacao`.



## Sobre o Projeto
Esse projeto foi desenvolvido com o objetivo de entender como validar links em Node.js. A estrutura dos arquivos e códigos pode não estar perfeita, mas foi feito o melhor possível para que tudo funcione. Caso você tenha alguma sugestão, `fique a vontade para abrir uma issue no repositório ou entre em contato através do meu LinkedIn`: https://www.linkedin.com/in/victor23hd/

## Tecnologias Utilizadas
* Node.js
* Biblioteca Chalk
