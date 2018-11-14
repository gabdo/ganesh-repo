# Azure Functions REST Api with MongoDB Atlas

### Setup Development Environment
1. You need to install azure functions core tools using
```npm i azure-functions-core-tools```

2. Add file ```local-settings.json``` to root directory.
```
{
    "IsEncrypted":false,
    "Values": {
    "AzureWebJobsStorage": "",
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "MongoConnectionString": <Your-Connection-String>
  }
}
```

3. Add ```.env``` file to root directory. (for unit test run)
```MongoConnectionString=<Your-Connection-String>```

4. Run
```npm install```

### Run functions in local environment
```npm start```

#### Run tests in local environment
```npm run test```

### Endpoints 

        createproduct: [POST] http://localhost:7071/api/product

        deleteproduct: [DELETE] http://localhost:7071/api/product/{id}

        getproduct: [GET] http://localhost:7071/api/product/{id?}

        updateproduct: [PUT] http://localhost:7071/api/product/{id}
        
### To change listening port Run 
```func host start -p <Port-Number>```
