# Der Düsseldorfer Roboter

Codebase for the Single Page application where users can learn more about our products and get notified when a product is available.

## Requirements

The development of this application has been done in the following environment

```sh
  node : 19.4.0
  npm : 9.2.0
  react : 18.2.0

# Install node
  brew install node
```

## How to run

Download and extract the zip file to a preferred location in your system.
Necessary dependencies to run this app can be installed to the local development environment using the information in package.json file as below and dependencies will be stored under `node_modules`.
Open your favorite shell, change into the extracted folder and run the below command

```sh
cd <download path>
unzip annalect.zip
cd annalect

# Install dependencies
npm install

// To start serving the app
npm run start
```

This should open the url `http://localhost:3000` in your default browser and you will be able to see the landing page.

## Implementation

This application is designed in ReactJS and used CSS for styling.
The core CSS properties can be found in the [file](src/index.css) and custom parameter settings with individual [components](src/components) as well.

The app is optimised to work with small device resolutions such as Tablets and Mobile phones using Media query.
