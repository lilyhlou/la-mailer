# Mailer, for LA County.

To run : 

1. Install NPM, Flask, Node.js, Gatsby 
2. Run 'npm run build && npm run serve' in terminal

site that builds `production` branch: [here](https://emaillosangeles.netlify.app)

staging environment: [here](https://la-mailer-stage.netlify.app)

To implement the reverse proxy
Add the following to server section of nginx.conf 
    server {
        listen       8080;
        server_name  localhost;

        #charset koi8-r;                                                                                                                                                                                                                      

        #access_log  logs/host.access.log  main;                                                                                                                                                                                              

        location / {
            #root   html;                                                                                                                                                                                                                     
            #index  index.html index.htm;                                                                                                                                                                                                     
            proxy_pass http://localhost:9000;
        }

        location /p/ {
            #redirect any url beginning with /p/ to port 5000                                                                                                                                                                                 
          proxy_pass http://localhost:5000;
        }

...rest of server section is irrelevant
This redirects URLs starting with / (so all URLs) to the npm server running on port 9000. Except when a URL starts with /p/ it is directed to the flask server running on port 5000. 

Thus, all calls to the Python scripts running on the flask server must start with /p/, and the python scripts must only take URLs that start with /p/