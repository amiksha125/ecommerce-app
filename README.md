# ecommerce-app
project setup
create a frontend -->
   npm create vite@latest, select react framework and JavaScript variant
install dependencies and packages in frontend-->
   cd frontend
   npm install #dependencies
   npm install react-router-dom react-toastify #these packages allow to create multiple routes and toast notification in project
run the project-->
   npm run dev 
# delete app.css file in the src folder
open app.jsx and remove all the given code and write rafce  will auto-generate a React functional component with arrow function syntax and default export.
# remove the content and index.css

we will install tailwindCSS -->
  https://v3.tailwindcss.com/docs/guides/vite
  npm install -D tailwindcss@3 postcss autoprefixer
  npx tailwindcss init -p
  then follow the site and copy paste all the content in the respective files
  then run the project
  we added tailwind css with our project

start the project-->
  in the src folder create folders--> pages, context, components
  in the pages folder,create pages in the form of react file components

set up route-->
  open main.jsx, replace <StrictMode> with <BrowserRouter> and import {BrowserRouter} from 'react-router-dom'
  add route in the App.jsx

creating navbar-->
  use navlink tag of router-dom which add an active class bydefault to each link
  so in the index.css target active class and make hr display to block so that it is displayed when you are on that link
  group property of serach icon in tailwind css -> It lets child elements respond to the parent's hover, focus, etc.
  we have to show a drop down list when hover on search icon.
  some properties:
  aspect-square - Forces the element to keep a 1:1 aspect ratio — so height = width, always.
  Sets the line-height (space between lines of text). leading-4 = line-height of 1rem (16px).
  Makes the element fully rounded, turning a square into a circle (if height = width).
  sm:  means for small and above screen size

  hover on each css to explore more
creating  hero section-->

creating context to store common variables and state variables-->
  create a shopContext.jsx file which consists of product variable and some data. Import this context file lastestcollection.jsx component and
  add <ShopContextProvider> tag in the main.jsx
 Latest Collection - Data Flow Using React Context API-->
  1. ShopContext.js – Creating and Providing Context:
     Creates a global context using createContext().
     Provides shared data (products, currency, delivery_fee) to the entire app using the ShopContext.Provider.
     This file makes product data accessible from any component without prop drilling.
  2. ProductItem.jsx – Reusable Product Card Component:
     Accepts props: id, image, name, price.
     Uses useContext() to fetch the currency symbol from ShopContext.
     Uses React Router's Link to enable navigation to the detailed product page.
     This is a reusable UI component used for rendering each product in the list.
   3. LatestCollection.jsx – Rendering the Latest Products on Home Page:
     Uses useContext() to access the global products array from ShopContext.
     on initial render (useEffect), it slices the first 10 products and stores them in local state.
     Maps through the latestProducts array and renders a ProductItem for each one.


Lets Begin backend
create server.js file , open terminal 
  cd backend
  npm init
package name will be backend itself, just place enter
click enter on version to use default value, on description click enter
click enter on all things, at the end , you will have package.json file:
{
  "name": "backend",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  "author": "",
  "license": "ISC",
  "description": ""
}

remove  "test": "echo \"Error: no test specified\" && exit 1", from it








