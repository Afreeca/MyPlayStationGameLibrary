# Game Library UI

User Interface for PlayStation game library 

## Running the application from the command line using NPM

In the base directory (containing package.json)
1. Install dependencies:
* `npm install`
2. Run the application
* `npm start`

## Running in a Docker container

In the base directory (containing pom.xml)

1. Create the image of gamelibrary-ui by running below command on base directory (containing the Dockerfile)
* `docker build -t gamelibrary-ui .`

4. Now run the container and bind the external port to Docker port.
* `docker run -d -p 3000:3000 --name gamelibrary-ui gamelibrary-ui`    

5. Access the application
* http://localhost:3000


## Authors
Adilson Mendes
