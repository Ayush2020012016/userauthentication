# POC for  User authentication.

### first create run create the project using 
      npm init

### create client.
     
     npx create-react-app .
     
     
### clean the repo.
    
    cd ../
    npm i cors express jwt dotenv

### folder structure Screenshot

![alt text](https://github.com/Ayush2020012016/userauthentication/blob/master/images/folderstructure.png)

    
### add the tailwind (in the client)

    npm install tailwind 
    npm init 

### tailwindcss 
![alt text](https://github.com/Ayush2020012016/userauthentication/blob/master/images/tailwindcss.png)


    
### login to userfront.com

    npm install @userfront/react --save

- add configuration for userfront.

![alt text](https://github.com/Ayush2020012016/userauthentication/blob/master/images/configuration.png)

- update the dashboard to redirect to login page if the user have not loggedin. other wise show the user data.

![alt text](https://github.com/Ayush2020012016/userauthentication/blob/master/images/Dashboardupdated.png)

- now create a server.js file 
- add dotevn to the server.js 
- add authenticate middleware

![alt text](https://github.com/Ayush2020012016/userauthentication/blob/master/images/serverjs.png)


- now on frontend page add a make a request to the server
![alt text](https://github.com/Ayush2020012016/userauthentication/blob/master/images/frontend.png)
