docker build --no-cache -f SQL\Dockerfile.PostgreSql -t finalnyjjproekt/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t finalnyjjproekt/app ../..
