# clean-architecture-notification-microservice
Microsserviço de notificações desenvolvido durante o Ignite Lab 04 de Node.js. O projeto feito com o framework Nest.js com conceitos de arquitetura limpa + DDD + TDD,  Apache Kafka, Prisma ORM, SQLite, Jest.

## Objetivo
Desenvolver um microsserviço utilizando as tecnologias do framework Nest.js, e conceitos de clean architecture, DDD, TDD, mais conceitos de microsservices e Kafka.

## Tecnologias usadas
- Javascript
- Typescript
- Node.js
- npm (gerenciador de pacotes do Node.js)
- Nest.js (framework do Node.js)
- class-validator (lib que utiliza notação para validação de campos de uma classe ou dto)
- class-transformer (biblioteca de utilitários de dependência zero que ajuda você a transformar rapidamente instâncias de classe em objetos simples e vice-versa)
- Prisma ORM (para mapear objetos ao paradigma do banco de dados relacional)
- @nestjs/microservices (lib do Nest.js)
- kafkajs (cliente Apache Kafka para Node.js)
- upstash (plataforma serveless)
- @prisma/client
- SQLite (banco de dados local)
- Jest (lib criada pelo facebook para realizar testes unitários)

## Passo a passo
**Aviso:** Para executar o passo a passo para rodar a aplicação na sua máquina é necessário que você tenha, conhecimento em comandos de terminal, git e github commands, e comandos do gerenciador de pacotes npm, movimentação entre pastas via terminal, conta na plataforma serveless da upstash(para criar o cluster que vai rodar o Kafka).

### Clonando e configurando o projeto

**1º passo: Digite o comando para clonar o projeto via git.**
```
git clone https://github.com/Marlinsk/clean-architecture-notification-microservice.git
```

**2º passo: Entre na pasta do projeto.**
```
cd clean-architecture-notification-microservice
```

**3º passo: crie antes de instalar as dependências da aplicação, crie um arquivo **.env** fora da pasta **src** e insira as seguintes variáveis.**
```
DATABASE_URL="file:./dev.db"

UPSTASH_KAFKA_CLUSTER_USERNAME='nome do usuário cluster'
UPSTASH_KAFKA_CLUSTER_PASSWORD='senha do cluster'
```

**4º passo: instale as dependências do projeto via comando npm.**
```
npm install
```




