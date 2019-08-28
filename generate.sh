#!/usr/bin/env bash

# rm -rf ./lib/proto/*
# cp -r ./lib/proto ./lib/proto_backup

find ./sources/proto/ -name *.proto | xargs ./node_modules/.bin/grpc_tools_node_protoc -I=./sources/proto --js_out=import_style=commonjs,binary:./lib/proto
find ./sources/proto/ -name service.proto | xargs ./node_modules/.bin/grpc_tools_node_protoc -I=./sources/proto --js_out=import_style=commonjs,binary:./lib/proto --grpc_out=./lib/proto