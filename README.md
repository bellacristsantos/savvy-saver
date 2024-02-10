# Savvy Saver  ⚡

<br />

![image](https://github.com/bellacristsantos/savvy-saver/blob/main/savvy-saver-front-main/src/assets/Savvy-Saver01.png)

<br />

![image](https://github.com/bellacristsantos/savvy-saver/blob/main/savvy-saver-front-main/src/assets/Savvy-Saver03.png)

<br />

![image](https://github.com/bellacristsantos/savvy-saver/blob/main/savvy-saver-front-main/src/assets/Savvy-Saver04.png)

<br />

![image](https://github.com/bellacristsantos/savvy-saver/blob/main/savvy-saver-front-main/src/assets/Savvy-Saver05.png)

<br />

![image](https://github.com/bellacristsantos/savvy-saver/blob/main/savvy-saver-front-main/src/assets/Slate-Money-on-Apple-Podcasts.png)

<br />


## :bulb: Development Process
<br />

SavvySaver is a learning platform with the goal of making financial knowledge available for beginners. The platform features a time travel feature that enables users to see how much they could earn if they had invested a specific amount on a chosen date and company. It also includes functionalities such as details about investment options and a "Learn More" section that allows users to explore a list of podcasts and be redirected to listen and learn more about investments.

The team used Trello and Gitflow to ensure that each member was working on one feature, avoiding merge conflicts, and delivering high-quality code in a reasonable amount of time.

My role in this project was related to UX/UI Design, contributing to frontend development using React and Vanilla CSS, making the application responsive, and developing the "Learn More" section using GraphQL and Apollo to connect with the podcast API.

<br />

## :gear: Tech Stack
<br />


Trello, Figma, React, CSS, Node.js, Koa, Chart.js, MongoDB, GraphQL, Apollo, Alpha Vantage, and Taddy APIs.

<br />

## Getting started
<br />

### 1. Install dependencies
<br />

  Requirements
   * Obtain MongoDB URI from MongoDB Atlas
   ```
       1.1 Go to the MongoDB Atlas website: https://account.mongodb.com/account/login
       1.2 Create a new project.
       1.3 Create a new cluster within the project.
       1.4 Start the cluster.
       1.5 Obtain the MongoDB URI from the cluster settings.
   ```

   * Get your Alpha Vantage API Key, follow the instructions on their website: https://www.alphavantage.co/support/

   * Get your Taddy API Key, follow the instructions on their website: https://taddy.org/developers/intro-to-taddy-graphql-api

### 2. Clone the repository
```
  git clone git@github.com:bellacristsantos/savvy-saver.git

  * navigate to the project folder:
    cd savvy-saverV1/savvy-saver-front-main
```

### 3. Install dependencies

  ```
    npm install
  ```

### 4. Configure your environment
```
    # 1. Obtain a API Key from Alpha Vantage API and replace API_KEY in server/controller/ApiService.js with your API_KEY.
    # 2. Obtain a User ID and an API Key from Taddy API and replace API_KEY in server/controller/ApiService.js with your X-USER-ID and X-API-KEY.
    # 3. Obtain a MongoDB URI from MongoDB Atlas and replace MONGODB_URI in src/apollo.js with your URI.
```

### 5. Run the project
```
  * Starts the client
    npm start

  * Starts the server
    node server.js
  ```


