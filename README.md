# socket-server-cmsc207

## Scripts
- Run `npm install`
- Run `npm start dev`

## Deployment
- ssh root@<ip>
- cd socket-server-cmsc207
- git fetch, git pull origin main //pull latest commit
- pm2 kill, pm2 start server.js
- sudo systemctl restart nginx
