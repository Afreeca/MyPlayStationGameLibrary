FROM node:12.4.0-alpine

# Configure the main working directory inside the docker image. 
# This is the base directory used in any further RUN, COPY, and ENTRYPOINT  
WORKDIR /app

# Copy the main application
COPY . ./

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install

# Build and optimize react app
RUN npm run build

EXPOSE 3000
# start app
CMD [ "npm", "run", "start" ]

