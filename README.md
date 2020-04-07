# 20-04-07 Node and Express Lecture

[Reference](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment#Testing_your_Nodejs_and_NPM_installation)

### Set Up
- Create a JS file called `index.js`
- Generate the `package.json` file by running `npm init` in the terminal (accept all defaults)

### Pure Node Server (review of yesterday's process)
- In the `index.js` file define a reference to the `http` module using the `require()` method
- Create a server by calling the `createServer()` method on the reference to the `http` module, pass two parameters - `req` and `res`
- Call the `end()` method on the `res` parameter, pass in the string `This is a simple node server`
- Call the `listen()` method on the server you created, pass in two parameters - a port number and a host name

### Using Express
- Install express by running `npm install express` in the terminal
- You should see `express` added as a dependency in your `package.json` file
- Create a reference to the `express` module using the `require()` method
- Create a server by setting the return value of the `express()` method equal to the variable `app`
- Define a route for a get request by calling the `get()` method on the server variable `app`, pass in two parameters - the path relative to the site root and the callback function to be invoked when that path matches
    - The path will be `'/'` for your first route definition to serve as a landing page
    - Pass two params to the callback function, `req` and `res`
    - Call the `send()` method on the `res` parameter, pass in the string `This is a simple node application using express`
- Call the `listen()` method on the server variable `app` you created, pass in two parameters - a port number and a host name

### More Simple Routes - Example in Naming Practices
- Define a second route for a get request with the path `'/instructor'`
- When you navigate to `localhost:[PORTNUMBER]/instructor` display the name of one of the CodeSchool Instructors
- Define a third route for a get request with the path `'/instructors'`
- When you navigate to `localhost:[PORTNUMBER]/instructors` display the name of all three CodeSchool Instructors

### Routes with Parameters
- Define an array of code school instructors
- Define a fourth route for a get request with the path `'/instructor:id'`
- When you navigate to `localhost:[PORTNUMBER]/instructor/[ID]` display the name of the code school instructor whose index position in the array matches the query param passed in to path