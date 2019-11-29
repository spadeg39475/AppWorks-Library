# PicCollage Library
 A library application which allows user to search books by title or author, and can check if the book was borrowed or not. It's convenient for users to borrow and return the books!


## Live Demo
[Demo WebSite](https://appworks-library.web.app/)


## Installing
```
// install dependencies
npm install

// serve with at localhost:3000
npm run start

// build for production
npm run build

// run tests
npm run test
```

## Project Architecture
```
src
 |--__test__
 |--components
 |  |--App.js
 |  |--List.js
 |  |--Popout.js
 |--context
 |  |--AppContext.js
 |--css
 |  |--app.css
 |  |--app.css.map
 |  |--app.scss
 |  |--normalize.css
 |  |--normalize.css.map
 |  |--normalize.scss
 |--firebase.js
 |--index.js
```
#### The project architecture divided into four parts:
* components - seperate different components by UI
* context - store context states which every components can access.
* css - styles of the application
* __test __ - integrating tests
* firebase.js defined some methods access the firestore and can be reused.

#### Web Architecture

```
App            #display main title and search bar
 |
 |--List       #display the search result list
 |
 |--Popout     #display the popout Info after borrow or return books
```

## Dependency 

* React - build the app by Create React App

* Babel - JavaScript transpiler that converts edge JavaScript and JSX into plain old ES5 JavaScript

* Jest & React Testing Library for unit testing
 
* Firebase services 
    *  firestore - backend database to store the book list for library
    *  hosting - host for demo website

## How to approach the problem
* For the feature that every user can search the book list and see the borrowing status in real-time, I  use firestore service as my database. Add a listener to see if the search-list data in firestore updates, and rerender the search list while the data changed.

* For borrowing and returning books, I update the book's borrowing status in firestore when users click the borrowing or returning button.

* Use React Context as a center to store states. This can allow every component which may be in different layer of the application to access the states without passing the props through several layers. I think it will be more maintainable when the project grows larger.

* Use React hooks with context together for more readable and clean code.

* Use SASS framework for styling first time as a practice and nested structure is more readable than pure CSS.

* Use Jest and React Testing Library to write some simple tests.
 
## Demo picture

![](https://i.imgur.com/XpkHciT.png)

![](https://i.imgur.com/fHcjI8P.jpg)







