1.Abra 2 terminais separados, um na pasta backEnd e outro na pasta frontEnd

2.nos respectivos terminais execute npm i -y

3.dentro da raiz de backEnd e de frontEnd crie o arquivo .env e adicione suas variáveis de ambiente, esta aplicação utiliza postgresSQL e é necessário uma database pré criada para funcionar.

4.Rode as migrações com os respectivos comandos:

    npm run typeorm migration:generate src/migrations/InitialMigration -- -d src/data-source

    npm run typeorm migration:run -- -d src/data-source

5.nos respectivos terminais rode, npm run dev e deixe os servidores funcionando enquanto utilizar a api.

6.O frontEnd estará funcionando na porta http://localhost:5173

7.A Documentação estará funcionando na porta http://localhost:3000/docs
