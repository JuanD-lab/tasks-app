
# Tasks APP

A task app.
You can create an account, create tasks and modify your status.


## Tech Stack

**Client:** React, ViteJS, TailwindCSS

**Server:** Node, Express


## Installation for API

Install the proyect with npm or yarn

1. Create a SQL Data Base
```bash
  CREATE DATABASE databasename;
```


2. Clone the repo
   ```sh
   git clone https://github.com/JuanD-lab/tasks-app.git
   ```
3. Install packages
   ```sh
   npm install
   or
   yarn install
   ```
4. Create and enter your varibles in `.env` file based in .env.example

   
5. Run the sequelize cli
```bash
  npm i -g sequelize-cli
  sequelize-cli db:migrate
```
6. Run scripts
```bash
  yarn dev
  or
  npm run dev 
```



## Installation for client

Install the proyect with npm or yarn

```bash
  cd front-tasks
  yarn install
```
Create and enter your varibles in `.env` file based in .env.example

```bash
  VITE_API_URL=http://localhost:8000/api
```

 Run scripts
```bash
  yarn dev
  or
  npm run dev 
```





    
## Environment Variables for API

To run this project, you will need to add the following environment variables to your .env file

`NODE_ENV=development`

`DATABASE_URL= if a remote database is used (change environment to PRODUCTION)`

`DB_USER=`
`DB_PASSWORD=`
`DB_NAME=`
`PORT=`

`JWT_KEY=`


## Environment Variables for client

To run this project, you will need to add the following environment variables to your .env file

`VITE_API_URL=http://localhost:8000/api`
