# Getting Started with SleepyBooks

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [express generator](https://expressjs.com/en/starter/generator.html).

## Available Scripts

In the project directory, Go to the project you want and you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## SetUp

For This project, please make sure you have postgresql installed, and create a database. Once you have created your database, proceed to the .env folder within backend and fill it with your own values.

Once you have setup your database we can populate it by opening a terminal in your backend folder and run the following commands:

```bash
Node setupDatabase.js
```

Once query is completed simply exit out of that process or open a new terminal and then run,

```bash
npm install
npm start
```

To start our backend.

Open up another terminal and CD to the front-end, then run similar commands as before:

```bash
npm install
npm start
```

Once you have everything running simply go to your localhost to see the application running.
