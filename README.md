# FE Code Challenge
This project is the code challenge for applicants of the Frontend Engineering role at Sonobi.

##Dependencies
This project was put together using these Node and NPM versions. This is the LTS at the time. Previous versions of Node and NPM may or may not work.
```
Node v14.15.0
NPM v6.14.8
```

##Setup
There is a client and a server portion of this project located in the client and server directories. We recommend having 2 terminal tabs open for this.

###Client
To reach the client from the root of the project

```cd client```

You must next install the dependencies

```npm install```

To start the client

```npm start```

###Server
The Web server uses sqlite as its storage mechanism.

To reach the server from the root of the project

```cd server```

You must install the dependencies

```npm start```

To start the web server

```npm start```

To verify it is running you should see this in the console output

`Frontend Code Challenge Web Server listening at http://localhost:3001
`

Additionally going to `http://localhost:3001/` should show the text `Server is running!`.
Lastly, going to `http://localhost:3001/inventory` should show some JSON output.

## To the Applicant
We estimate that this code challenge takes around 4 hours on average, depending on your skill level. 

You may alter this project in anyway, all we ask is that your use ReactJS on the client. Feel free to install any third party node packages that you feel that you need to show your skill.

###Challenges:
1 - Create an endpoint in the web server to allow clients to POST to /inventory to create an inventory record.

2 - Create a UI to show a list of inventory.

3 - Create a UI to create an inventory.

4 - Show the newly created inventory in the list after is has been successfully created.

###Measurements
For us, these challenges will measure:

- Problem solving and programming ability
- Creativity
- General web knowledge
- Expertise with JavaScript, HTML, and CSS
- Knowledge of the common JavaScript libraries we use at Sonobi
    - If the libraries are unknown to you: Ability to research documentation and apply it.



