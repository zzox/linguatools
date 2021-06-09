# LinguaTools Demo
This is a demo of the [LinguaTools API](https://linguatools.org/language-apis/sentence-generating-api/) in which a user can learn more about sentence structure by picking nouns, verbs and tenses.

## Architecture
For this project I used vanilla Javascript, HTML and CSS.  This allowed for a challenge, but also to have direct control over the technologies and their output.  This is opposed to a something like a React project, which requires the jsx to be transpiled to HTML and minified javascript. Even though this can be helpful in producing a project quickly, it doesn't allow for _exact_ control over it's output.

The architecture is simple.  I have a HTML file, `index.html`, which has all of my necessary html and inline css.  It requires my main Javascript file, `main.js`, which when using the type `"module"`, I can then use `import` syntax without a transpiler.

## To Run:
1. Start a local server in the root directory.
    e.g. `python3 -m http.server 8000`
2. Navigate to the local server's listening port in your browser.

The project is also deployed [here.](https://zzox.github.io/linguatools-demo/)

## Additional Information
Without the time constraints of a coding challenge, I would like to add a typeahead interface connected to an API for a site like dictionary.com, where the user can see potential words they may be trying to spell and their definitions.
