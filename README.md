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


