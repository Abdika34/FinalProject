# this is our Final Project that is developed by MERN Stack for our first Degree Graduetion From Addis Ababa University, it is Web App that used for sold Ethiopian Cultural Dress it's Admin Panel and User Panel
## We make fully free this project

## to run this project:

### For Frontend 
Follow the below steps to run the project: 
- Firstly clone or unzip the project folder.
* Go to the frontend directory by using the following command ``` cd frontend ```.
* * create a **.env.local** file in the backend root directory as the same level where the **package.json** is located and keep the following environment variables there:
```
>>> Stepup firebase app and configure the environment

VITE_API_KEY="AIzaSyCXvDIC4MPrkaMdeg_O2iij88wLpfj3qBA"
VITE_Auth_Domain="book-store-mern-app.firebaseapp.com"
VITE_PROJECT_ID="book-store-mern-app"
VITE_STORAGE_BUCKET="book-store-mern-app.appspot.com"
VITE_MESSAGING_SENDERID= "205632822247"
VITE_APPID="1:205632822247:web:b0db0ec66bf6de0bbb3b42"
```
+ Then run `` npm install `` commend to install node dependencies.
- Finally, to run the project, use ``npm run dev`` command.


### For Backend
Follow the below steps to run the project: 
- Firstly clone or unzip the project folder.
* Go to the backend directory by using the following command ``` cd backend```.
+ Then run `` npm install `` commend to install node dependencies.
* create a **.env** file in the backend root directory as the same level where the **package.json** is located and keep the following environment variables there: 
```
DB_URL = ""

JWT_SECRET_KEY = ''

Note: Please setup mongodb and change the MongoDB url and set your jwt secret key above.
```

- Finally, to run the project, use ``npm run start:dev`` command.
