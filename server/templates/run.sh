oc process -f templates/jmeter-bc.yaml \
    -p APP_NAMESPACE=dumbexpress \
    -p APPLICATION_NAME=dumbexpress | oc apply -f -

oc process -f templates/jmeter-dc.yaml \
    -p APP_NAMESPACE=dumbexpress \
    -p APPLICATION_NAME=dumbexpress  | oc apply -f -
