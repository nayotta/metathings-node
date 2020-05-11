rm -rf jsons/
mkdir jsons

./node_modules/.bin/pbjs -t json -p $GOPATH/src metathings/pkg/proto/deviced/service.proto > ./jsons/deviced_service_pb.json
./node_modules/.bin/pbjs -t json -p $GOPATH/src metathings/pkg/proto/evaluatord/service.proto > ./jsons/evaluatord_server_pb.json
./node_modules/.bin/pbjs -t json -p $GOPATH/src metathings/pkg/proto/identityd2/service.proto > ./jsons/identityd2_service_pb.json
./node_modules/.bin/pbjs -t json -p $GOPATH/src metathings/pkg/proto/tagd/service.proto > ./jsons/tagd_service_pb.json
./node_modules/.bin/pbjs -t json -p ./proto/mtpd/service.proto > ./jsons/mtpd_service_pb.json
