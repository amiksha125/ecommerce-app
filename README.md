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

Lets install some dependencies
   #run command
    npm i cors dotenv express jsonwebtoken mongoose multer nodemon razorpay stripe validator cloudinary bcrypt
  cors - allows frontend to access backend
  dotenv - to use environment variable in project
  exoress - create API's
  jsonwebtoken - to enable user authentication 
  mongoose - to manage database connectivity
  multer - to store images in cloudary image
  nodemon - restart the backend whenever we will make any change in the code
  razorpay - to set up online payment intervation
  stripe - to set up online payment
  validator - to check data coming from user is valid or not
  cloudinary -  cloud-based media management platform that helps you store, manage, manipulate, and deliver images and videos
  bcrypt - encrypt user password and store in database
all the dependencies are there in node_modules

now create some folders in backend folder:
 config : to store all configurations
 middleware: store  all the backend middleware
 models - to store all models of mongoose for schemas
 controllers  : manage all the logic of our backend
 routes : manage  express server's route
 now go to package.json file
 add in "scripts: :{
   "start" : ""
   "server" : "nodemon server.js"
 }
 when we command npm run server , then server.js script executed
 when we command npm run start , then node server is started

 use start command while deployement, but at local server use npm run server , which will start the server using nodemon
 & when we make any change in backend, nodemon will restart the server, then is same filea add
 "type" : "module", this will allow importing different modules.

craete .env file in backend folder to create secret keys and api keys

Do setup at server.js :
  
import express from 'express'
import cors from 'cors'
import 'dotenv/config'

// App Config
const app = express()
const port = process.env.PORT || 4000   //if PORT available in .env else use 4000

// Middlewares
app.use(express.json()) //request will get pass using json
app.use(cors()) //we can access the package from any IP

// API endpoints
app.get('/', (req, res) => {
    res.send("API Working")
})

app.listen(port, () => {
    console.log("Server started on port: ", port)
})


  after that run command 'npm run server' you wil get a message at terminal about port
  then paste this url http://localhost:4000/ on browser to see output API working
will use thunder storm to test api's, not working , I am using postman

Now do database configuration open mongodb atlast, create a new project, then create a new free MO cluster inside it, choose any proviider ,then create deployement. Then, 
create a database user id to access database, took ss, then connect to your application using drivers, select node.js  then version 6.7 later, then COPY CONNECTION STRING TILL mongodb.net and paste it in .env file like, avoid adding @ in your password
MONGODB_URL = MONGODB_URL = "mongodb+srv://amikshagajbhiye:amiksha@cluster0.okrgpqy.mongodb.net" last @cluster0.... is cluster's address
//now we can connect the mongoose package with mongodb
at mongodb atlas close the page and go to network access , we have to access data base with any IP , click ADD IP ADDRESS then click ALLow ACCESS FROM  ANYWHERE. then close website
create mongodb.js in config folder
after coding this file, import this file server.js

Now, create cloudinary.js file in config folder, and go to cloudinary webiste login with your own google
go to dashboard, then click on get api keys button, then click on generate new APi key
enter verification code,name it, copy API KEY and create a new environment variable in .env , paste for it, then copy api secret key also and  paste in a same way, then copy cloud name website from top-left and do the same


we send a token to client when success ful register or login =>
Once the user logs in (with correct credentials), the server:
Confirms the user is valid
Generates a JWT token (like a digital ID card)
Sends it to the client (browser/app)
🧠 This token acts as proof that the user is logged in.

ok now we will create userModel and productModel in model, then userController.js in controller folder, this files defines login, signup functions and route , now create userRoute.js in route folder, and create route(like url path) using expresss, export those routes , then import same routes in server.js to define api endpoints
test api from postman with post , see you cant test it without running npm run server
completed register user of userController.jsx, generates strong password error, user already exists error, ans please enter a valid email.You can see accounts created on mongodb

ok now code controller function for login user, test it, api is working

Now create product controller to add products, total product list, remove product, getting single product details
we defined function body, then create their routes with productRoute.js with express and import these funcs,
define routes and export this file, our server will import this file and create /api/product route with it, setup
controller -> routes -> server.js

before addProduct function create a multer middleware, so that if we send any file as form data then this will send using multer, add upload to addProduct route in productRoute.js bcoz we on that route we have to send multiple images

test product/add appi with form data, it did work, but image1, 2, 3, 4 are optional , only if it is available in request file then only store it.Now we have to store new product data into database but we dont have to store image ,
we will store images into cloudinary then its url will be stores in mongodb.see postman treats all data as string i gave price as number after receiving it forcefully convert it to Number().similarly convert string boolean to actual boolean for bestseller and string to array using JSOn.parse(sizes).

successfully got array of urls of images , these urls are made by cloudinary. see when you add product in productModel () then the format should be same as productModel and if there is price then add price : priceNum.autometically product collection is created with data,for remove product function testing , make a pos request on api/product/remove and add object id in body {"id" : "___" }, while testing product/single add json body {"productId" : "___" }, added admin login logic 
Now create a middleware to authenticate admin for allowing only admin to add product, remove products etc.
export adminAuth and add it productRoute.js to /add and /remove route
andd Now if we try to add/remove product we get unauthorized error. we have to give token : " " (without " ") property IN HEADER OF POSTMAN to access this api.

Now we have created enough api, now we will create a separate admin react project for admin portal its react - javascript , do npm install, install some dependencies npm i axios 
react-router-dom react-toastify 
axios - make api call
react-router-dom - create route
toastify - toast notification

Noww our backend is running at 4000 port, frontend at 5173 and admin at 5174
fix this port means admin must be at 5174 and frontend at 5173 go to vite.config.js and 
add server: {port :    } accordingly.

now lets start with admin react project
first remove all the default code from app.jsx, delete app.css file and clear index.css,
then search "tailwind css guide vite react js" this and run below two commands 
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
do tailwind css configuration in tailwind.config.js and start by creating navbar component and then create side bar
add path to /add page using NavLink tag of react-router-dom

NavLink to = __ definesthe path but to load the content of the component we need to refer them by active class
experiment => click on orders link and then inspect , you will see an additional active class added to navlink!!!
target this .active { } in index.css to add styles, now sidebar elements are highlighted when we clicked.

get link of external custom font called -> Outfit. from google, get embed codecopy import statemnt and paste in index.css at top
add * { font-family: outfit }

Now setup routes in App.jsx. import route , routes from react-router-dom package, Route tag has path for route and element attribute for component to be loaded there , and NavLink has to specify /paths, and Route to load component at that path

Now lets do authentication for adminpanel, if not authenticated then Login.jsx component is loaded, add this logic to app.jsx create token state variable, check token with ternary operator, then create login and in this page
now call the api to authenticate the admin

create onSubmitHandler() function in login.jsx this function will be called when we submit login form. add e.preventDefault() so that when we submit the form the page wil not be reloaded.create two state variables for email and pass, and add to form onChange (setting state variables) and onSubmit property (for handler func). Now we will do api call before that import some variables in app.jsx, get
backend url from environment variable create .env file, now run the backend folder with npm start and then login you will get response ok
now we will create token state and store token in state variable of app component, set the token when res is success in login component
if not success then give a toastify first do its setup in app.jsx, it is working

now we logged in but when we reload the web page we logged out automatically, fix it
using localStorage and useEffect() in app.jsx and give token state variable as dependency , so when token updates this useEffects is executed, localStorage.setItem('token', token) this stores 'token' key value in local storage & 
useState(localStorage.getItem('token') ? localStorage.getItem('token') : ""); if token is already available in localStorage then assign it to state else " "

now create logout functionality, provide token as props in add, list, orders page , setToken  props in navbar components
whenever the logout button is clicked setToken to " " empty so that you redirected to login page as state variable is empty.
so easy we sent props of setToken and whenever the logout is clicked , we set token to void so that login page occurs 

design add page UI

now create state variables to store data 

Now we are adding images, now make all the input feilds and select option of add product page to have control input field, this CIF will save daata into state variables, for it , add onChange() to input and textarea tags and add value attribute and give value as state variable name. This way we made it control input feild, now sending data to add api backend is not good because we ghave added authentication add url , we have send token with the route so desctructure token as Add({token}) and pass it to axios as header

create list page , feth data from database and display products

Now we ulpoaded 52 products data on database through admin panel, now we will connect frontend with backend so that our data is displayed there:
1. create a .env file inside frontend> , and add backend url to it.
2. create backend url variable in context>ShopContext>  with => backendUrl = import.meta.env.VITE_BACKEND_URL;
3. Add backendUrl to value obj of shopcontext so that we can access it everywhere
4. create getProductData() function in shopcontext
5. create setProduct state variable in shopcontext
6. In getProductData(), we will retrieve data using axios's fetch() , but we forget to install axion in frontend , install it first
7. use axios.get(backendUrl) to get data from api, then call the getProductData() using useEffect

always keep your .env on the same level with vite.config.js so that it can access it, i accidently added it in src and got backendurl as undefined. 

setProducts(response.data.products); just with this line , I can see data on collections page only but it is gone when i refresh the page, to display the products on bestseller open components>BestSeller.jsx and add products as dependency list in its useEffect hook
whenever the products state in shop context is updated the bestseller also updated,
similarly add products in useEffects of latestCollection.jsx and Collection.jsx after this if you reload the site the data is stil there, 

we created login, register api in backend its working well and we also made login sign up pages on frontned . Lets connect them 
go to ShopContext and create a state variable called token, setToken as token is generated after successful logging, add this token to value object and go to login.jsx, here destructure neccassry state using useContext hook and add code on onSubmithandler
before that create 3 state variables to store name, email, password
use these states like this in input tag => onChange = {(e) => setName(e.target.value)} value = {name}, now we can do api call bcause we have name, email , password call it in onSubmithandler try-catch , genertate token and store it on state variable and localStorage

I got type error on setToken bcoz i did not add in value obj of shopcontext
