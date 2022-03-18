# Learning Platform - Server Setup

The `docker-compose.yml` script spawn containers for NGINX, Certbot and learning-platform. It just need to be called once in the system, so it will automatically start along with the system startup next times, because of the restart policy set in the run command.

## Setup Production

1. `cd prod` 
2. Rename '.env.prod' to '.env', use the default volumes.
3. Copy nginx folder to the docker volume folder, like in .env file. Change the server settings in nginx/conf.d/<domain>.conf.
4. Edit `init-certbot.sh` domain and email at the beginning of the script, then execute it for the first run.
5. Start the compose: `docker-compose up -d`

Use `docker-compose up -d` to restart the containers when needed.
