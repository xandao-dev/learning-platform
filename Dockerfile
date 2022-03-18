# *-*-*-*-*-*-*-*-*-*-*-*-*-* DEV and PROD DOCKERFILE *-*-*-*-*-*-*-*-*-*-*-*-*-*#
# This is a multistage build script divides into 3 stages.
# Stage 1: Responsible running the application in the container. It shares the source code between the container and the host.
# Stage 2: Responsible for picking the zip file generated from sbt build and installing it in the container.
# Stage 3: Responsible for being a small and final container that will be used to run the application.

#---------------------------------DEVELOPMENT----------------------------------#
#FROM node:16.14-slim AS development
# Create and define the node_modules's cache directory.
#WORKDIR /usr/src/cache

# Install the application's dependencies into the node_modules's cache directory.
#COPY package*.json ./
#RUN npm install

# Enter in human meet client folder and copy the files to the container.
#WORKDIR /usr/src/app
#COPY . .

#EXPOSE 3010
#ENTRYPOINT ["/bin/bash", "-l", "-c"]
#CMD ["cp -r /usr/src/cache/node_modules/. /usr/src/app/node_modules/ && npm run dev"]

#-----------------------------------BUILDER------------------------------------#
#FROM development AS builder
FROM node:16.14-slim AS builder
WORKDIR /usr/src/app
COPY . .

# Install the dependencies, since we can't use the cache directory.
RUN npm install && npm run build

#----------------------------------PRODUCTION----------------------------------#
FROM ubuntu:18.04 AS production
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/dist /usr/src/app-data

VOLUME ["/usr/src/app"]
ENTRYPOINT ["/bin/bash", "-l", "-c"]
CMD ["cp -r /usr/src/app-data/. /usr/src/app"]