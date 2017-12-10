# README

# Assignment 3

## Introduction

This final class assignment departs from the first four assignaments because it is not a full-stack application. For this last project I will be consuming a public JSON API and displaying the information presented by the API in a Single Page Application (SPA). For this application, I will be use the Githup public API. I originally wanted to use the XKCD API but it does not allow Cross-Origin Research Sharing (CORS) so I could not make the application run entirely in the browser without relaying the API request through a local server. I will also use the React framework to retrieve, store, and display the results. 

## Method/Measurement

Like the first few projects, I will try to build the application iteratively, adding functionality in small pieces while keeping a working project going. 

First, I will modify my existing react framework. From the original description of the assignment I began building a full-stack web application using Meteor and React. I will copy of the contents of this repository to a new directory and modify it to host an empty React file. 

Next I will research which API I want to use. Github provides their API listing here: 

[a link](https://api.github.com/)

I will use the chrome plugin JSON Formatter to make the results readable as I browse through the API. I will also start looking at React plugins to display results in a table. 

Once these pieces are researched, I will work on stitching the API results to the grid display. I will start with a static API call to test these components. 

After this is finished, I will add search capability. The search function will call to the API with a new query and re-render the results as the user types into the search bar. 


## Results 

### Iteration 1: Copying the Framework

I went back a couple commits in my React-Meteor application and found a good starting point where I had just a couple components created. I copied these to a new directory and created a new git repository. I forgot to commit at this point as I intended to clean out anything that I did not need before the first commit, then later I assumed I had already made this commit.

### Iteration 2: Research

This is the iteration that I learned about CORS. I had started building out a React component to fetch and display and XKCD comic when I decided to test the API in react and got a CORS error. I spent about 45 minutes reading about cors and trying different methods to get around this limitation before deciding to find a different api. I looked online for API’s with CORS enabled and found this site: https://code-maven.com/cors. This site has a couple API’s listed that support CORS and will test them for you. 

I choose to use the Gitub api and began sending requests using chrome to look at the return JSON. I choose the user-search API and decided to create a Github user search app. I quickly tested the api in React by using the Fetch browser API to get the resource. The Fetch API returns a promise which I chained to the JSON parser included ing the return object and then sent that result to a function which stores the returned object in the React state for my component. I used the avatar image property of the response to display my Github user avatar on the webpage.

I then began searching for React table plugins. I decided on the first free result, react-data-grid.

### Iteration 3: Display

The API for the react-data-grids is very simple. All that I had to do was create a column listing which matched up with the attributes returned by the API call and give the attributes a title. Then I created a “rowGetter” function which returns the proper row given and index. This simply returned the correct row from the state. Using React’s guidelines, I had to bind the function to the context ‘this’ before passing it to the react-data-grid component.

```javascript
   this.getRow = this.getRow.bind(this)
```

Because I was already saving the API result to State, the data grid updated autoamitcally when the results were available. I started by only displaying the users id and login. 

![Basic Display](/README_IMAGES/Picture_1.png?raw=true)

### Iteration 4: Add Search

Adding search was very easy in react. The goal of the search bar was just to call my “search” method which would update the state. I added a new component which I called “SearchBar” in a new file. This is a managed component in react. It creates and HTML form with a search bar but overrides all of the default behavior of the input field. As soon as a user changes the text in the search bar, an event is triggered which stores the new value to the local state and then calls the callback handed down by my application when it adds this component to the screen. I was able to get this piece working in about 25 minutes but quickly ran into another problem. 

I had all of the functionality I had aimed for but found that the number of calls generated by updating while the user types quickly exceeds the API limits. Github only allows 60 anonymous API calls per IP address per hour. I went through all of these in under a minute while testing. I decided to go back and add a submit button so that the number of API calls is reduced. 

![Basic Search](/README_IMAGES/Picture_2.png?raw=true)

### Iteration 5: New Columns

To finish this project up, I decided to add a couple more columns. I wanted to add the user’s avatar and a link to the user’s Github page. Using the default functionality of react-data-grid, the links to the image and the link to Github are displayed as the plain text URL. To render these properly, I added two new classes: ImageFormatter and LinkFormatter. These classes both take the value of the cell and return JSX with the values wrapped in the proper html tags. This enabled me to quickly add now formatting to the objects and finish up my table.

![New Columns](/README_IMAGES/Picture_3.png?raw=true)

## Conclusion

Consuming a JSON API is much easier than it used to be. Using the promisified fetch API, I could quickly, and asynchronously, grab resources without a long chain of callbacks and lengthy setup. The result of the call could be converted to a javascript object in one call and used like any other object in the application. React gave me the tools to create loosely coupled components to fetch the data, capture user input, and display the results. Some of these components, like the search bar, can be picked out and used in other applications.

## Sources

1. https://api.github.com/
2. https://code-maven.com/cors
3. https://reactjs.org/ 
4. http://adazzle.github.io/react-data-grid/ 


### Author
* Alan Peters
