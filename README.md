### build img
- docker build -t app-1:0.0.1 .
- docker run -p 3000:3000 --name=app-1 app-1:0.0.1
- docker build -t app-2:0.0.1 .
- docker run -p 4000:4000 --name=app-2 app-2:0.0.1