# Electronics Store
 Electronics store a single page application created with ReactJS which permits the user to redeem electronic products based on the user's redeem points. The application code uses the context pattern to manage the global application state.

 The image below shows to how the main components interact in the application.

![Electronics Store UML](/src/images/Electronics-store-UML.png)


## Launching 🚀

_The following instructions will allow you to get a copy of the project running on your local machine for development and testing purposes._

See **Deployment** section to know how to deploy the project.


### Pre-requisites 📋

- A package manager: You can use yarn, npm or another one. This will help you to install the necessary packages     the run the application locally

- A code editor: VSCode can be helpful to explore the project files

### Installation 🔧

- Open a CMD to clone the repository
- Clone the repository by running **git clone https://github.com/HenryPSF/aerolab-challenge.git**
- Go to the project folder by running  **cd aerolab-challenge**
- Install the necessary packages by running **npm i** or **yarn**
- Open the cloned project by running **code.** in the CMD or open VSCode manually and open the project
- Go to the .env file and assigns your api-token to REACT_APP_API_TOKEN variable, this permit you to call the API endpoints
- Launch the application locally by running **nom start** or **yarn start**

## How to test ⚙️

_The automated tests are not applay yet. These will be added for future versions_

### End-to-end test🔩

#### The user must see:
-  A Navbar that shows the user name and available points. As well as,  three buttons to navigate to the pages (redeemed products and get more coins)
- A header with an image that shows the store's name
- A list of products
- A pagination

#### The user must can do:
- The user should be able to sort products by price, from highest to lowest, and vice-versa
- Each product should have a visible price in points
- The available products to redeem must show a redeem button to the user
- The “Redeem” button should be not available for those products that the user has not enough points to claim
- The not available products to redeem must show how many points the user is missing to redeem the product
- When a product is redeemed, the user must see how its points are automatically deducted from the users’ points shown in the navbar
- The user can navigate to redeems page to see all the products redeemed by the user
- The user can navigate to the coins page and get more coins
- When the user get more coins, these must be added to the users’ points shown in the navbar


## Deployment 📦

_The deployment was made by using [Zeit Now](https://zeit.co/now)_

- Install now by run **npm install -g now**
- Go to the project root using CMD or a terminal in VSCode
- Start the deployment by running **now**, the first time you mast need to enter your email and verify it
- When the deployment be ready, an URL will be shown, navigate to it using your favorite browser, look for the last deployment and copy the URL
- Paste the URL deployment to the browser
- And  Vuala!! that is all

## Developed with 🛠️

_The project was developed with ReactJS by using [facebook’s create react app library](https://github.com/facebookincubator/create-react-app) to create the base project structure_

* NPM as the package manager, if you do not have installed npm, you must install [NodeJS](https://nodejs.org/en/)
* [react-confetti 6.0.1](https://www.npmjs.com/package/react-confetti): To show the confetti animation when a product is redeemed successfully. We used this package due to there is not vulnerabilities detected, you can see more information in [Snyk](https://snyk.io/vuln/npm:react-confetti)
* [react-router-dom 5.2.0](https://reactrouter.com/web/guides/quick-start): To set routes in your application and navigate between pages based on the components
* [styled-components 5.3.0](https://www.styled-components.com/): Styled-components to stylize the components by using CSS code. The style is being associated only with the component to which it belongs, without affecting the rest of the elements on the page
* [@material-ui/core 4.11.4](@material-ui/core): To create the beauty modal to inform the user when the product was redeemed successfully
* [@fortawesome/react-fontawesome 0.1.14](https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react): To create the menu in the navbar


## Authors ✒️

_I must recognize that this application was made base on the Agostina Arevalo Jaube [project code](https://github.com/AgostinaArevaloJaube/aerolab-challenge) who made an awesome job with the application style when she tackled the Aerlolab challenge. I used it as a guide to give the style to my app, then I improved the application behavior to make easy the navigation between pages and improve the user experience._

For that reason, I will add Agustina as part of the authors of this application

* [**Agostina Arevalo Jaube**](https://github.com/AgostinaArevaloJaube)
* [**Henry Paúl Sisalema Fabara**](https://github.com/HenryPSF)


## License 📄

This project is open source and it is under the license [MIT](https://opensource.org/licenses/MIT)

## Thanks 🎁

* To ll the developer who provide their knowledge in a selfless way through youtube and blocks 📢
* To Pedro for giving me the opportunity to participate in this challenge and reminding me how much fun programming is ❤️ 🤓
