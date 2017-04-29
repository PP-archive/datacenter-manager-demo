### Installation:
```
npm i
```

### To start dev server:
```
npm start
```
If something went really wrong - cleanup the localstorage.

### To build the project:
```
npm run build
```

### Project description, libraries used
The project is done on the React+Redux stack, I used my own boilerplate, as I like decorators and "Create react app" doesn't allow to use them. Besides, this is the reason why it can look like overengineering (layouts, pages, postcss).

In addition I used the next:
- [haikunator](https://github.com/usmanbashir/haikunator) to generate pretty names for the servers, like Heroku does
- [reactstrap](https://reactstrap.github.io/) as I don't know how to markup
- [react-persist](https://github.com/rt2zz/redux-persist) to make store a little more persistant
- [uuid](https://github.com/kelektiv/node-uuid) to generate real uuid v4
- [lodash](https://lodash.com/) as it makes the life easier
