# Star War API

¡Bienvenido a swapi (extended), la API de Star Wars!.

### Installation 

Instale módulos npm.

```sh
npm install
```

### Setup Environment

You can use store parameter to persist env in
serverless.yml

```yaml
custom:
  #documentation: ${file(serverless.doc.yml):documentation}
  settings:
    POST_TABLE: PEOPLE_DB
    URL_STARTWARS: https://swapi.py4e.com/api
```


### Integration with [SWAPI](https://swapi.py4e.com/documentation)


![Arquitectura](https://i.ibb.co/nbdHq5C/arquitectura.jpg)


### Serverless plugins

Plugins de serverless utilizados

| Plugin | description |
|:---------------------------|:-----------:|
| serverless-offline | for local testing
| serverless-dynamodb-local | for local testing

### OAS - OPENAPI
The resources implemented are as follows:

```sh
cat oas/oas.yml
```

### LOCAL TESTING

```sh
npm start
```

### Scripts & Deploy

To generate *CloudFormation* files run:
```sh
npm run deploy
```

By properly configuring the AWS Credentials, the `sls deploy` command should deploy the API's correctly.
