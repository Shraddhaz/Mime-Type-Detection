# Mime-Type-Detection

Mime-Type-Detection detects the MIME type of a file when user gives any input file. Currently, it is compatible with approximately 750 file extensions.

## Approach
To summarize the approach, the application takes the file as an input and isolates the file extension. Using this extension, it gets the MIME type from a `File Extension to MIME type mapping`.

## Design
The client is in Angular framework while the server is in Node/Express framework. On uploading the file, the Angular app service sends an HTTP POST request to the server. The server then handles finding the file extension and returns with the MIME type found from the `mime-type.js` object. If the file extension is not present, server returns an error.


## Installation and Execution

1. Clone the repository from https://github.com/Shraddhaz/Mime-Type-Detection.git
```
git clone https://github.com/Shraddhaz/Mime-Type-Detection.git
```

2. Change the directory to the newly cloned folder
```
cd Mime-Type-Detection/
```

3. Install all the npm packages from package.json
```
npm install --save
```

4. Start the server
```
node app.js
```

5. Create new terminal and change directory to  ```/Mime-Type-Detection```

6. Start the client
```
npm start
```
7. Select File

8. Click Upload

9. Get the MIME Type

## Technical Details

* [Angular](https://angular.io/) - Front-End
* [AngularCLI](https://cli.angular.io/) - Front-End
* [Node.js](https://nodejs.org/en/) - Back-End 
* [Express](https://expressjs.com/) - Back-End 
* [Visual Studio Code](https://www.jetbrains.com/idea/) - Platform used
* [Mime Type List](http://svn.apache.org/repos/asf/httpd/httpd/trunk/docs/conf/mime.types) - Mime Type List


## Future Scope

Deploying this web application on a live system by hosting it on a cloud platform like Heroku or Google Cloud. This makes the web application more accessible and easy to use.

## Authors

* **Shraddha Zingade** - *Mime-Type-Detection* - https://github.com/Shraddhaz

## Contact and Bug Tracker

If there are any questions regarding the project, you can contact the author at [shrazing29@gmail.com](shrazing29@gmail.com) or post your queries on [https://github.com/Shraddhaz/Mime-Type-Detection/issues](https://github.com/Shraddhaz/Mime-Type-Detection/issues)
