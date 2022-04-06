# Getting Started with Create React App and Hosting on AWS using AWS Amplify

## Setup Tools required to build ReactJS web application on your development machine -

### Install node.js
https://nodejs.org/en/download/ 

### Install VS Code
https://code.visualstudio.com/download 

## Create ReactJS based web application
Open VS Code
Open new terminal - Ctrl + shift + `
Navigate to the proper folder where you want to create this sample application.
Run below command to create web app named “amplifyapp” (read note below)

### `npx create-react-app amplifyapp`

Note: You will need to install the npm library for create-react-app. You will get below command prompt
Need to install the following packages:
### `create-react-app`
Ok to proceed? (y) - <type y>

Now your application is created.
Run below commands to check the application is building and running properly on your local environment - 

### `cd amplifyapp`
### `npm start`

As a result of the above commands you should see the new browser instance created and displaying this web page with a “Welcome…” message.
You can terminate this running application by entering ctrl + c on the terminal window.
Now open the folder “amplifyapp” in VS Code, so that we can modify the code and check if its reflecting. Follow below steps - 
Once you can see the folder structure in explorer window in VS code as below -

Open the src/App.js file and change the text in the file given in <p> </p> and <a> </a>  tags
Save the changes. 
Open the new terminal if not open already and run below command.
npm start
It will again open a new browser instance and it should display the updated page here again.
You can keep running the application and just try editing more text and it will auto build and run the application and changes will be auto reflected in the browser.

## Next create new git repository
You will need a GitHub account to complete this step – if you do not have an account, sign up here.
Create a new GitHub repo for your app (link)

Initialize git and push the application to the new GitHub repo executing the following commands in your command line interface:

### `git init`
### `git remote add origin git@github.com:username/reponame.git`
### `git add .`
### `git commit -m “initial commit”`
### `git push origin master`

Check if the code is pushed on your git repository.

## Now login to AWS Console, and upload, deploy the code using AWS Amplify
To connect your repository, log in to the Amplify Console and choose Get Started under Deploy.

Connect your GitHub, Bitbucket, GitLab, or AWS CodeCommit repositories. You also have the option of manually uploading your build artifacts without connecting a Git repository (see Manual Deploys). After you authorize the Amplify Console, Amplify fetches an access token from the repository provider, but it doesn’t store the token on the AWS servers. Amplify accesses your repository using deploy keys installed in a specific repository only.

After you connect the repository service provider, choose a repository, and then choose a corresponding branch to build and deploy.

### Confirm Build Settings
For the selected branch, Amplify inspects your repository to automatically detect the sequence of build commands to be executed. Confirm your build settings and click Next.

### Save and Deploy
Review all of your settings to ensure everything is set up correctly. Choose Save and deploy to deploy your web app to a global content delivery network (CDN). Your front end build typically takes 1 to 2 minutes but can vary based on size of the app.

### Browse your application
You can now browse the application by accessing URL as below highlighted place on AWS Amplify app settings - 

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
