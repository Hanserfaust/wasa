FROM nginx
COPY webapp /usr/share/nginx/html

# RUN apt-get update && apt-get install -y git build-essential libevent-dev
# RUN git clone git://github.com/nicolasff/webdis.git
# RUN cd ./webdis && make

# CMD ./webdis/webdis


