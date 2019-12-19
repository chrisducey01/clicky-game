# Clicky-Game

Clicky-Game is a single page web-app using the React framework to render the page.  All functionality is client-side.  Upon page load, the app will make an API call out to Giphy and get 12 static images based on the `pokemon` keyword and populate them into cards on the page.  

## Rules of the Game

This is a pretty straightforward memory challenge game.  Click on an image only once.  Each time you click an image, and it hasn't been clicked before, your score will go up by one point.  If you click on an image more than once, that round is over.  If you beat the high score, you take the lead!  To make things interesting, every time you click an image, all of the images will be randomly shuffled.  Good luck!

## Contributing to development

### Prerequisites

1.  Giphy API Key
    * Needed to grab images using an AJAX call (via Axios) to the Giphy API
    * Visit <https://developers.giphy.com/docs/api#quick-start-guide> to sign-up for a key
    * Write down your API key since you'll need it later

2.  Node installed on your local machine

### Installing

Follow the instructions in this section to get the app setup to run on your machine.

1.  Clone the git project to your machine (example below is using ssh)
    ``` bash
    git clone git@github.com:chrisducey01/clicky-game.git
    ```

2.  Install the node module dependencies from the package.json file
    ``` bash
    npm install
    ```

3.  Update the APIKEY value in the `util/API.js` file to the one you created from Giphy


### Future Updates
This section includes functionality I would like to include in the future but haven't been able to add yet.

* Search bar for user to enter phrase to search Giphy for images.  This would populate the image cards dynamically versus hard-coded to pokemon
* User input to specify the amount of images to return versus the hard-coded value of 12
* Being able to persist high user scores and names to compete with friends
* A splash page for rules to make it more explicit for a new user
* Highlight the GamePrompt text and score when they change based on a user click on an image


## Running the app

The client development server is started on the command line using node.  This is a React app and will automatically restart when you save any changes to your files.

### Usage
``` bash
npm run start
```

## Deploying to Github Pages

If you want to deploy a production version to Github Pages, there is a `gh-pages` package installed as part of the package.json packages that will help with that deploy.  Follow the steps below:

1.  Update the package.json file and change the "homepage" entry

    Update the URL to your project site on Github Pages
    ```
    "homepage": "https://chrisducey01.github.io/clicky-game/",
    ```

2.  Run the command to use gh-pages to deploy to the Github Pages site
    ```
    npm run deploy
    ```
    * This will run the deploy script from the package.json file which will build the react app and then push it to Github Pages.  
    * This will publish it based on the homepage url set in step 1.

## Authors

* **Christopher Ducey** - *Initial work* - [chrisducey01](https://github.com/chrisducey01)
