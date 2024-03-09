1. We need to run using npm start. 
2. Since I had run using host address - so after removing all complilation errors I was able to see the IP address and I could run it. 
3. We can change the port number to manually trying to change it in package.json using this syntax - set  PORT=1234 && react-scripts start
4. We have to run the json server and make the products - prodid as the primary key so run this command - json-server --watch --id prodid --port 1235 -H 10.70.199.166 db_prod.json 
5. I have added all the files done in the class in this project but I would be specifying which all I have used for this particular project. 
6. Images are added in the images folder. Few are in the components and few exclusively in the given folder. 
7. The components are present in the component folder. 
8. App.css,App.js, index.css, index.js reportWebVitals.js are few of the important files which has the code regarding my project. 
9. package.json has the required packages and its important. 
10. There is nothing from stores folder project. 
11. Under services folder there is nothing we need for this project. 
12. Under components project 
- UserRoles.js - required for defining the user as admin & user respectively. 
- ProtectedRoute.js - required for defining the protected routes 
- product.js - is required for the products and the respective crud operations on the products by admin 
- product.css - it is required for the css 
- Login2.js - required for the login page of the project 
- Login2.css - required for the login page css for the project 
-  Contact.js - required for the contact page 
- dataService.js - for defining the put,post,get,delete operations 
- About.js - It is required to write about the web application we created. 
- crud.reducer.js - This file is needed for crud functions and product related crud operations
- reducers folder - needed for holding the crud.reducer.js file 
- products folder - is needed cause it contains the logic for the product , add to cart , count increaser etc etc code 
- layout folder - this is required for the cart modal component 
- action folder - it contains the actions needed for the product related actions - action_types for the cart 

The db_prod contains the arrays needed for the project 


























----------------------------------------------------------------------------------------------------------------------------------------
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
