from node
workdir src
copy . .
run npm i
entrypoint ["node"]
cmd ["."]
