# MyPlayStationGameLibrary
Build a basic web app to track your PlayStation game library
![Image description](https://psmedia.playstation.com/is/image/psmedia/ps.com-listing-thumb-01-eu-09may18?$Icon$)


### Run both gamelibrary-service and gamelibrary-ui using docker compose

Node: docker-compose will builds the service and Ui image based on their Dockerfiles

In the base directory (containing package.json)
1. Building and Running the application:
* `docker-compose up -d`

2. View all the running containers
* `docker-compose ps`

3. Stop and remove containers, networks, images, and volumes
* `docker-compose down`


Access the application
* http://localhost:3000


5. Access the service swagger documentation 
* http://localhost:9000/swagger-ui.html


## Source Code
git clone https://github.com/Afreeca/MyPlayStationGameLibrary.git

## Authors
Adilson Mendes

