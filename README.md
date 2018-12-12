# CursoNodeBr
https://cursos.nodebr.org/

---

### Instruções

Inicialização do projeto, esse comando é executado para criar o arquivo `package.json`
```sh
$ npm init
```

Para gerar o arquivo `package.json` com os valores default, podemos inserir o parâmetro `-y`
```sh
$ npm init -y
```

Instalação de módulo, o parâmetro `--save` adiciona o módulo no arquivo `package.json`
```sh
$ npm i <module> --save
```

Instalação de módulos para serem usados apenas em modo de desenvolvimento
```sh
$ npm i <module> --save-dev
```

Atualização de módulo
```sh
$ npm update <module> --save
```

Desinstalação de módulo
```sh
$ npm uninstall <module> --save
```

Instrução para executar a aplicação
```sh
$ node index.js
```

### Módulos
| Comando | Descrição |
| ------ | ------ |
| npm install axios --save | Para efetuar requisições HTTP |
| npm install mocha --save-dev | Para rodar os testes |
| npm install nock --save-dev | Para simular requisições |

Para trabalharmos com testes automatizados, podemos utilizar o `mocha` [https://mochajs.org](https://mochajs.org)
```sh
$ npm install -g mocha
$ npm -i --save-dev mocha
```

Módulo utilizado para simular requisições
```sh
$ npm install nock --save-dev
```
