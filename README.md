# socket-server-cmsc207

## Scripts
- Run `npm install`
- Run `npm start dev`

## Deployment
- ssh root@IP-ADDRESS //Credentials: https://docs.google.com/spreadsheets/d/1lnCUyfLbzwuI5Ow5fDrosry-7qdeCNCbDbq4eC4U9qI/edit#gid=512255264
- cd socket-server-cmsc207
- git fetch, git pull origin main //pull latest commit
- pm2 kill, pm2 start server.js
- sudo systemctl restart nginx
