#Welcome to web page Assignment

to start the application clone the repo
### Prerequisites

**Node version 18.x.x**

### Cloning the repository

```shell
git clone https://github.com/TanishBasu2002/Assignment.git
```

### Install packages
#### Client
```shell
cd client && npm i
```
#### Server
```shell
cd server && npm i
```

### Setup .env file on server

```js
 MONGODB_URL=
```
if error is shown with the url replace 
```js
    mongoose.connect(`${url}`, { useNewUrlParser: true });
    //with
    mongoose.connect('yourmongodb string', { useNewUrlParser: true });
```

### Start the apps on both Client and Server

```shell
npm run dev
```
