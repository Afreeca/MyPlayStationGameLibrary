# Game Library Service

Backend service for  PlayStation game library 

## Running the application from the command line using Maven

In the base directory (containing pom.xml)
1. Install dependencies
* `mvn clean install`
* `mvn spring-boot:run` 

## Running in a Docker container

2. In the base directory (containing pom.xml)
* `mvn clean package`

3. Create the image of gamelibrary-service by running below command on base directory (containing the Dockerfile)
* `docker build -t gamelibrary-service .`

4. Now run the container and bind the external port to Docker port.
* docker run -d -p 9000:9000 --name gamelibrary-service gamelibrary-service    

5. Access the swagger documentation 
* http://localhost:9000/swagger-ui.html


## Authors
Adilson Mendes

