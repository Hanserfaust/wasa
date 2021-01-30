/**
 * This represent default values for development use.
 *
 * IMPORTANT:
 *
 * This file is typically "built" during container start and filled with values from
 * the container runtime using environment variables (coming from the "outside").
 *
 * To see this in action, start Wasa using docker-compose and edit the corresponding
 * environment variables in /run/docker-compose.yaml and restart.
 *
 *
 */
var DEBUG = true

/**
 * localhost and 80 works if running vs the webdis started using docker-compose up.
 *
 * If running vs a free-standing webdis, use port 7379
 *
 */
var WASA_API_DEFAULT_HOSTNAME = 'localhost'
var WASA_API_DEFAULT_PORT = 80

var wasa_api_hostname = '_ENV_WASA_API_HOSTNAME';
var wasa_api_port = '_ENV_WASA_API_PORT';

/**
 * Set default values if not provided
 *
 */
if (wasa_api_hostname.indexOf('_ENV_') > -1) {
    wasa_api_hostname = WASA_API_DEFAULT_HOSTNAME
}
if (wasa_api_port.indexOf('_ENV_') > -1) {
    wasa_api_port = WASA_API_DEFAULT_PORT
}

if (DEBUG) {
    console.log("DEBUG MODE");
    console.log("wasa_api_hostname: " + wasa_api_hostname);
    console.log("wasa_api_port: " + wasa_api_port);
}
