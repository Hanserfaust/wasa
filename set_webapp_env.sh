#!/bin/sh
#
# This script is used to replace a few placeholders variables inside the webapp config.js
#

# Fail script if missing variable used
set -u
set -e

if [ "$1" == "" ] || [ $# -gt 1 ]; then
  WEBAPP_CONFIG_JS="./webapp/js/config.js"
else
  WEBAPP_CONFIG_JS=${1}
fi

# To test, uncomment (or export from shell)
#
# WASA_API_HOSTNAME='www.example.com'
# WASA_API_PORT='1066'
#

# Will replace variables in_line
sed -i s/_ENV_WASA_API_HOSTNAME/${WASA_API_HOSTNAME}/ ${WEBAPP_CONFIG_JS}
sed -i s/_ENV_WASA_API_PORT/${WASA_API_PORT}/ ${WEBAPP_CONFIG_JS}
