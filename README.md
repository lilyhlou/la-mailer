# Politician Mailer

Website is up! www.blacklives.email

Generates a randomized message to raise awareness about and provide solutions to racism and sends to over 200 elected officials. 

To run source code : 

1. Install NPM, Flask, Node.js, Gatsby, and Nginx 
2. Run 'npm run build && npm run serve' in terminal
3. cd into emails folder (in assets folder)
4. Run 'export FLASK_APP=messages.py'
5. Run 'flask run'
6. Implement a reverse proxy (so that flask and npm servers can communicate without CORS issues due to their different ports)

To implement the reverse proxy, 
assuming npm is on port 9000 and flask on 5000:

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

6. Run nginx
7. Then, the website will be visible at http://localhost:8080
