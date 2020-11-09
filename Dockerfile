#
# https://github.com/nginxinc/docker-nginx/blob/master/stable/alpine/Dockerfile
#
FROM nginx:alpine as build

#
# Copy all static content to root
#
COPY webapp /usr/share/nginx/html

#
# Copy env-substiution script for the config.js
#
COPY set_webapp_env.sh /
RUN chmod 755 set_webapp_env.sh

#
# Hooking into the ngxinx start scripts
#
COPY 99-webapp-setup.sh /docker-entrypoint.d/
RUN chmod 755 /docker-entrypoint.d/99-webapp-setup.sh
