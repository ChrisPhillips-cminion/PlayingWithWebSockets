oc process -f templates/jmeter-bc.yaml \
    -p APP_NAMESPACE=websockets \
    -p APPLICATION_NAME=websockets | oc apply -f -

oc process -f templates/jmeter-dc.yaml \
    -p APP_NAMESPACE=websockets \
    -p APPLICATION_NAME=websockets  | oc apply -f -
