# Projeto StoreManager API

  <summary><strong>O que foi feito</strong></summary></br>

  Neste projeto foi desenvolvido uma API utilizando a arquitetura MSC (model-service-controller).

  A API construída é um sistema de gerenciamento de vendas no formato dropshipping em que será possível criar, visualizar, deletar e atualizar produtos e vendas(CRUD).
  
  
  <summary><strong>:memo: Tecnologias utilizadas</strong></summary><br />

  - `Docker`;
  - `docker-compose`;
  - `Mysql`;
  - `Mocha`;
  - `Node.js`;
  - `Express`;
  - `Arquitetura de Software - MSC`


  <summary><strong>Como rodar o projeto</strong></summary></br>

  **Com Docker:**

  **:warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. 

- `docker-compose up -d`
- `docker exec -it store_manager bash`
- `npm install`
- `npm run migration && npm run seed`
- `npm run debug`

**Localmente:**

**Necessita ter um banco de dados(MySql) instalado localmente**

- `npm install`
- `npm run migration && npm run seed`
- `npm run debug`
