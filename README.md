# Webpack-starter

### Webpack-starter project with AngularJS (1.x), Bootstrap (3.7) and with loaders for SASS, images and HTML.
### **Webpack 2.2.1**

# Installation

`npm install`

# Instructions

After you installed the package you can run two of the npm commands defined in `package.json`

The first one is `npm run build` and will run the wepack command and boundle your project into a build directory.

The second one is `npm run start` and will start the `webpack-dev-server` which will start a server on a local adress, like `localhost:8080` where you can see the generated index.html file. The server will auto-reload if you change files.

# Other & Bugs

You don't have to add style or script tags to your HTML, webpack does this for you. 

Webpack has a bad documentation and it's hard to grasp.
I mainly used the recommended ways for setting up a webpack project, but at some points it doesn't work like it should. For instance, the ExtractText Plugin should use the webpack 2 `use` keyword, but it only works with the current configuration, which is the older webpack 1 keyword `loader` 




