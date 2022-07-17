# Markdown Blog

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

- using [node.js](https://nodejs.org/en) and [express.js](https://expressjs.com/) 
- blogs are stored on [mongoDB](https://www.mongodb.com/)
- supports creating, deleting, editing, rendering markdown articles
- markdown code snippet highlighting is supported using [highlightjs](https://highlightjs.org/)

# Setup 

- ensure node.js and yarn is installed on your machine
- install the required packages using 
```bash
$ yarn install
```
- export DB_USER and DB_PASS variables (additionally user [direnv](https://direnv.net/) to manage env variables )
```bash
export DB_USER="<your-mongoDB-username>"
export DB_PASS="<your-mongoDB-password>"
```
- run app 
```bash
yarn run app
```


![Made with love in India](https://madewithlove.now.sh/in?colorA=%233d3846&colorB=%23f66151&template=for-the-badge)
