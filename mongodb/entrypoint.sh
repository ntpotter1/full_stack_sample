#!/bin/bash
set -m

mongod --storageEngine wiredTiger --httpinterface --rest --master &

RET=1
while [[ RET -ne 0 ]]; do
  echo "=> Waiting for confirmation of MongoDB service startup"
  sleep 5
  mongo admin --eval "help" >/dev/null 2>&1
  RET=$?
done

mongoimport --host localhost --port 27017 --db tenx --collection properties --file properties.json --drop

fg
