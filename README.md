# Getting Started with React

Course Website: https://react-v8.holt.courses/

## Pretter

**install Prettier globally**

```bash
npm install --global prettier
```

Create new file called `.prettierrc` in the root of your project and put the following in it:

```prettierrc
{}
```

### npm/Yarn scripts

First run `npm install -D prettier@2.7.1` -D means it's for development only.

Put the following into your `package.json`.


```json
"scripts": {
    "format": "prettier --write \"src/**/*.{js,jsx}\""
},
```

Now you can run `yarn format` or `npm run format` and it will run that command. 

> Note: the use of the quotes. This is because Windows doesn't like the glob pattern. If you're on a Mac or Linux you can remove the quotes. and just use `src/**/*.js` instead.
> the @2.7.1 is the version of prettier we want to use. You can use whatever version you want. I just like to be explicit about it.

---

## ESLint

ESLint is a tool that helps you find and fix problems in your JavaScript code. It does this by checking your code against a set of rules. ESLint is built into most text editors and you can run ESLint as part of your continuous integration pipeline. ESLint is completely pluggable, every single rule is a plugin and you can add more at runtime.

```bash
npm install -D eslint@8.24.0 eslint-config-prettier@8.5.0 
```

to install eslint in your project development dependencies. Then you may configure its functionalities.


Create new file called `.eslintrc.json` and put the following in it:

```json
{
  "extends": ["eslint:recommended", "prettier"],
  "plugins": [],
  "parserOptions": {
    "ecmaVersion": 2022,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  }
}
```

This is a combination of the recommended configs of ESLint and Prettier.

Now we need to add a script to our `package.json` to run ESLint. Add the following to the scripts section:

```json
"lint": "eslint \"src/**/*.{js,jsx}\" --quiet",
```

🚨 ESLint will have a bunch of errors right now. Ignore them; we'll fix them in a sec.

Worth adding three things here:

if I wanted to get the debug output from ESLint, I could run 

```bash
npm run lint -- --debug
```

which would translate to eslint **/*.js --debug.

We can use our fix trick this way: 

```bash
npm run lint -- --fix
```

We're going to both JS and JSX.

ESLint is a cinch to get working with Visual Studio Code. Just download the extension.

---

## Git or `.gitignore` setup 

Git is a critical part of any project and probably something many of you are already familiar with. If you haven't, be sure to initialize your project as a git repo with git init in the root of your project (VSCode and any other number of tools can do this as well.)

If you haven't already, create a `.gitignore` at the root of your project to ignore the stuff we don't want to commit. Go ahead and put this in there:

```gitignore
node_modules
dist/
.env
.DS_Store
coverage/
.vscode/
```

This will make it so these things won't get added to our repo. You can add more things to this list as you see fit. I also like to add a README.md to the root of my project to explain what the project is and how to get it running.

---

## Vite Setup

The build tool we are going to be using is called **Vite**. It's a fantastic tool that is very fast and easy to use. It's also the tool that the React community has selected as the tool-of-choice for React projects. It's a great tool and I'm excited to teach it to you.

First, let's install it and the React plugin for it.

```bash
npm install -D vite@3.1.4 @vitejs/plugin-react@2.1.0
```

Next, we need to modify our `index.html` file. We need to remove the two script tags that are loading React and ReactDOM. We're going to be using Vite to load those for us. So, delete the following:

```html
<script src="https://unpkg.com/react/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
```

so, delete the two unpkg script lines. We're going to be using Vite to load those for us. So, delete the following:

and replace them with:

```html
<script type="module" src="./App.js"></script>
```

This will load our `App.js` file as a module.


Next, we need to create a `vite.config.js` file in the root of our project. This is where we'll configure Vite. Put the following in it:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "src",
});
```

This tells Vite to use the React plugin and to look in the `src` folder for our code.


We add the react plugin to Vite and we set our root directory to be our src directory. Generally your root is going to be where-ever you keep your index.html. Many projects will just keep the index.html file in the root of the project for this reason. I consider it a source file, so I keep it in src. It's up to you.

Okay, let's actually install React to our project

```bash
npm install react@18.2.0 react-dom@18.2.0
```

Now we need to create our `App.js` file. Create a new file in the `src` folder called `App.js` and put the following in it:

```js
// add to the top
import React from "react";
import { createRoot } from "react-dom/client";

// modify the createRoot call, delete "ReactDOM"
const root = createRoot(container);
```

Let's set up our scripts to start Vite. In `package.json`, put:

```json
// inside scripts
"dev": "vite",
"build": "vite build",
"preview": "vite preview"
```

Now we can run `npm run dev` and it will start Vite. It will open a browser window to http://localhost:5173/. You should see your app running. If you don't, check your console for errors.

> Note: Vite will automatically reload your app when you make changes to your code. It's pretty cool.

---

## jsx

JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript. JSX gets compiled to React.createElement() calls which return plain JavaScript objects called “React elements”. Babel compiles JSX down to React.createElement() calls.

So, let's create a new file called `Info.jsx` in the `src` folder and put the following in it:

```jsx
const Info = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.age}</td>
      <td>{props.work}</td>
    </tr>
  );
};

export default Info;
```

> Note: JSX is not required to use React. You can write React without it. But it's so much nicer with it.

Now we need to import it into our `App.js` file. Add the following to the top of `App.js`:

```jsx 
import { createRoot } from "react-dom/client";
import Info from "./Info";
import "./style.css";

const App = () => {
    return (
        <div>
            <h1>About Us!</h1>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Work</th>
                </tr>
                <Info name="Ajay" age="23" work="Web Developer" />
                <Info name="Shivay" age="25" work="Freelancer" />
                <Info name="Pawan" age="22" work="SDE" />
            </table>
        </div>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
```

Now, if you go to your browser, you should see your app running. If you don't, check your console for errors.

**Explanation:** 

1. In the `Info.jsx` file, we created a component called `Info` that takes in some props and returns a table row with the props in it.
2. In the `App.js` file, 
   - we imported createRoot from react-dom/client. for the ReactDOM.render() method, we need to import createRoot from react-dom/client.
   - we imported the Info component we created. from the same folder, we imported the Info component we created.
   - we created a component called App that returns a div with a table in it. We also added the Info component three times with different props.
   - we created a `container` variable that gets the element with the id of `root`. We need to get the element with the id of `root`. This is where our app will be rendered.
   - we created a `root` variable that calls `createRoot` with the `container`. We need to call createRoot with the `container`.

---

## ESLint + React

Now that we have JSX, we need to tell ESLint about it. We need to install the eslint-plugin-react plugin. Run the following:

```bash
npm install -D eslint-plugin-import@2.26.0 eslint-plugin-jsx-a11y@6.6.1 eslint-plugin-react@7.31.8
```

Now we need to Update  `.eslintrc.json` file. Add the following to the plugins section:

```json
{
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier"
  ],
  "rules": {
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0
  },
  "plugins": ["react", "import", "jsx-a11y"],
  "parserOptions": {
    "ecmaVersion": 2022,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "settings": {
    "react": {
      "version": "detect"
    },
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx"]
      }
    }
  }
}
```

> Note: We're turning off the react/prop-types and react/react-in-jsx-scope rules. We'll talk about why in a sec.

---

Now Now we want to make it so you can modify what your search parameters are. Let's make a new route called `SearchParams.jsx` and have it accept these search parameters.

```jsx
const SearchParams = () => {
    const location = "Mandsaur, MP";
    return (
      <div className="search-params">
        <form>
          <label htmlFor="location">
            Location            
          </label>
          <input id="location" value={location} placeholder="Location" />
          <button>Submit</button>
        </form>
      </div>
    );
  };
  
  export default SearchParams;
  ```

Now we need to import it into our `App.js` file. Add the following to the top of `App.js`:

```jsx
// ... other imports (including Info component and previous imports)
//  ... other code (style.css)
import SearchParams from "./SearchParams";

const App = () => {
    return (
        <div>
          //  ... other code (including Info component or previous code)
            <SearchParams />
        </div>
    );
};
```

Now, if you go to your browser, you should see your app running. If you don't, check your console for errors.

**Explanation:**

1. In the `SearchParams.jsx` file, we created a component called `SearchParams` that returns a form with a label, input, and button.
2. In the `App.js` file, we imported the SearchParams component we created. from the same folder, we imported the SearchParams component we created.
3. we added the SearchParams component to the App component. We also added the Info component three times with different props.

---

Let's add the ESLint rule. Run the following: 
  
  ```bash
  npm install -D eslint-plugin-react-hooks@4.6.0
  ```
  
Add this to ESLint:

```json
{
  "extends": [
    …
    "plugin:react-hooks/recommended",
    …
  ]
}
```

---

Let's next make the animal drop down. We'll make a new component called `AnimalDropdown.jsx` and have it accept these search parameters.

```jsx
import React, { useState } from "react";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const AnimalDropdown = () => {
    const [animal, setAnimal] = useState("");
    return (
      <div className="animal-dropdown">
        <label htmlFor="animal">
          Animal
          <select id="animal" value={animal} onChange={(e) => setAnimal(e.target.value)} onBlur={(e) => setAnimal(e.target.value)}>
            <option>All</option>
            {ANIMALS.map((animal) => (
              <option value={animal}>{animal}</option>
            ))}
          </select>
        </label>
      </div>
    );
  };
  
  export default AnimalDropdown;
```

Now we need to import it into our `App.jsx` file. Add the following to the top of `App.jsx`:

```jsx
// ... other imports (including Info component and previous imports)
//  ... other code (style.css)
// import SearchParams from "./SearchParams";
import AnimalDropdown from "./AnimalDropdown";

const App = () => {
    return (
        <div>
          //  ... other code (including Info component or previous code)
            // <SearchParams />
            <AnimalDropdown />
        </div>
    );
};
//  ... other code
```


## Core React Concepts

1. JSX
2. Hooks
3. Effects
4. Custom Hooks
5. Handling User Input
6. Component Composition
7. React Dev Tools

## React Capabilities
1. React Router
2. react-query
3. Uncontrolled Forms
4. Class Components

## Special Case React Tools
1. Error Boundaries
2. Portals and Refs
3. Context

## End of Intro
1. Conclusion
2. Ways to Expand Your App