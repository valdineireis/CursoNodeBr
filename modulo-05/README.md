<!-- 
DOCKER

https://www.docker.com/
https://hub.docker.com/

https://hub.docker.com/_/mongo
https://hub.docker.com/_/postgres
-->

docker run \
    --name postgres \
    -e POSTGRES_USER=valdineireis \
    -e POSTGRES_PASSWORD=minhasenhasecreta \
    -e POSTGRES_DB=heroes \
    -p 5432:5432 \
    -d \
    postgres

<!-- 
docker ps
docker exec -it postgres /bin/bash

psql
-->

docker run \
    --name adminer \
    -p 8080:8080 \
    --link postgres:postgres \
    -d \
    adminer

<!-- localhost:8080 -->

## ---- MONGODB
docker run \
    --name mongodb \
    -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=admin \
    -e MONGO_INITDB_ROOT_PASSWORD=senhaadmin \
    -d \
    mongo:4

docker run \
    --name mongoclient \
    -p 3000:3000 \
    --link mongodb:mongodb \
    -d \
    mongoclient/mongoclient

<!-- localhost:3000 -->

docker exec -it mongodb \
    mongo --host localhost -u admin -p senhaadmin --authenticationDatabase admin \
    --eval "db.getSiblingDB('herois').createUser({user: 'valdineireis', pwd: 'minhasenhasecreta', roles: [{role: 'readWrite', db: 'herois'}]})"
