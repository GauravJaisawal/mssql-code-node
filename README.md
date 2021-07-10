1. Install Node.js
2. Clone the project 
3. Go cd MS-SQL-PROJECT Directory
4. Install dependecies
    npm i

5. start the server 
    npm start

6. access the API
    https://localhost:3000

7. API Example

Below is the CURL Request.

POST /api/v1/users/validate-user HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: 8b9dd4c6-a6cb-d029-5042-25ac2bab04b6

{
	"userName" : "gj",
	"password" : "123456"
}