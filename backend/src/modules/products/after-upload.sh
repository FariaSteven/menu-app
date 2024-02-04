CONTAINER_NAME="nest-docker-postgres"
HOST_PATH="./uploads"

# Certifique-se de usar o caminho correto dentro do contêiner
CONTAINER_PATH="/app/uploads"

# Cria a pasta local se não existir
mkdir -p $HOST_PATH

# Copia os arquivos do contêiner para o host
docker cp $CONTAINER_NAME:$CONTAINER_PATH $HOST_PATH