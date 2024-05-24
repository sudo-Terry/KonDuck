## [KonDuck](http://localhost/)

### 1. Setting up server

Nginx setup <br/>
`sudo nginx` <br/><br/>

Rails Setup <br/>
`-> KonDuck rails s` <br/> <br/>

NextJS Setup <br/>
`-> KonDuck/front-view npm run dev` <br/> <br/> 

### 2. Nginx Configuration
```
http {
    server {
        listen       80;
        server_name  localhost;
        
        # Rails API 서버로의 프록시 설정
        location /api {
            proxy_pass http://localhost:3000;  # Rails 서버
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }

        # Next.js 서버로의 프록시 설정
        location / {
            proxy_pass http://localhost:4000;  # Next.js 서버
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }
    }
}
```

### 3. About
Using <br/>
Node v22.1.0 <br/>
Rails 6.1.7.7 <br/>
ruby 3.1.0p0 (2021-12-25 revision fb4df44d16) [arm64-darwin23] <br/>