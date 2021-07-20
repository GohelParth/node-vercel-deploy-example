# node-vercel-deploy-example

--> This is node.js project , this created for the purpose of 
    serverless deployment on "vercel.com"

Step for serverless deployment
    - when we create our main "server.js" file ,it file must have to exports
        ex: module.exports = app;
    
    - Then we need to create one more file , which name is "vercel.json" , 
      which is contains src and routes , destination , our main server file


      // vercel.json

      {
            "version": 2,
             "builds": [
        {
            "src": "[name of main server file]",
            "use": "@vercel/node"
        }
    ],
        "routes": [
        {
            "src": "/(.*)",
            "dest": "[name of main server file]"
        }
    ]
    }