# I am currently running node version 22.4.0
FROM node:22.4.0
# nothing is in a subfolder
WORKDIR /
# Copying all the files in our project
COPY . .
# gitignore file ignores node_modules, so this has to be run to download them again
RUN npm install
# this is the command to run the server
CMD ["node", "server.js"]
# expose port 3000, which matches up with the port variable in the server file
EXPOSE 3000