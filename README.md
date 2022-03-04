# Real-Time-Chat

## Installation

  ```sh
   git clone https://github.com/KyleKreil/Real-Time-Chat.git
   ```
   ```sh
   npm install
   ```
   ```sh
   node server.js
   ```
navigate to [localhost](http://localhost:3000)

## Q/A
How would you deploy this application?
Windows or Linux Server, or an Amazon EC2 instance.

What is your full tech-stack?
NodeJS with the Express framework, socket.io for user connection handling, raw HTML/CSS frontend/

What would you add to improve the application if you had more time?
Error handling and a reconnection function for unsuccessful connections, a counter for current connections, a database so users can see previous messages as they join, as well as finishing the disconnection message as it only works when the server is shut down.
