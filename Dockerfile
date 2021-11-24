FROM node:16

USER root

# versions of local tools
RUN echo  " node version:    $(node -v) \n" \
  "npm version:     $(npm -v) \n"
RUN apt-get update -y && \
apt-get install -y \
zip

# a few environment variables to make NPM installs easier
# good colors for most applications
ENV TERM xterm
# avoid million NPM install messages
ENV npm_config_loglevel warn
# allow installing when the main user is root
ENV npm_config_unsafe_perm true

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

COPY . .

ENTRYPOINT [ "/bin/bash" ]
