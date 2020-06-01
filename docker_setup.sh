#!/bin/bash

sudo apt-get update


#Docker
sudo apt -y install docker                     
sudo usermod -aG docker $(whoami)

#Docker Compose
sudo apt -y install docker-compose
sudo chmod +x /usr/local/bin/docker-compose

sudo systemctl enable docker
