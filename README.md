# bora-ajudar

Projeto filantrópico que visa prover uma plataforma que divulgue uma instituição de ajuda e possibilite a volutários realizar doações solicitadas por esta instituição. 

## Instalação

### Clone nosso repositório:

```
$ git clone https://github.com/gabrielrufino/bora-ajudar
$ cd bora-ajudar
```

### Instale as dependências:

```
$ npm install
```

## Sincronize ao seu banco de dados

O database do firebase foi o banco escolhido para desenvolver o projeto, agregando desempenho e tempo real às consultas e respostas realizadas ao banco de dados. Tendo isso em vista, é necessário alterar as informações do arquivo <strong>src/base.js</strong> para que a aplicação sincronize com o seu banco de dados. 

### JSON de uma campanha

<strong>Campos comuns a todos os projetos:</strong>
```js
{
	"name": "Nome da campanha",
	"slogan": "Frase de efeito para a campanha",
	"description": "Descrição dos objetivos e motivações da campanha",
	"type": "Tipo da capampanha"
}
```

<strong>type === "items" && inclua ao JSON:</strong>
```js
{
	"how": "De que forma o doador pode entrar em contato para doar os itens solicitados pela instituição"
}
```

<strong>type === "money" && inclua ao JSON:</strong>
```
{
	"goal": x, // x é o valor final visado pela campanha
	"current": y // y é o valor arrecadado até o momento
}
```

## Vamos mudar o mundo com código

```
$ npm start
```

## Créditos

Projeto desenvolvido, inicialmente, durante o segundo Hands-On ReactJS promovido pelo DevPleno (https://www.devpleno.com) e ministrado por Túlio Faria (@tuliofaria).
