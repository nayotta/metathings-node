rm -rf jsons/
mkdir jsons

./node_modules/.bin/pbjs -t json -p $GOPATH/src metathings/proto/deviced/service.proto > ./jsons/deviced_service_pb.json
./node_modules/.bin/pbjs -t json -p $GOPATH/src metathings/proto/evaluatord/service.proto > ./jsons/evaluatord_service_pb.json
./node_modules/.bin/pbjs -t json -p $GOPATH/src metathings/proto/identityd2/service.proto > ./jsons/identityd2_service_pb.json
./node_modules/.bin/pbjs -t json -p $GOPATH/src metathings/proto/tagd/service.proto > ./jsons/tagd_service_pb.json
./node_modules/.bin/pbjs -t json proto/mtpd/service.proto > ./jsons/mtpd_service_pb.json
