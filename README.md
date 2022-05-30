# RESTful API in Express Node.Js using Redis In-memory Database to cache items

**A user can;**
- server running { get: / }
- redis home { get: /redis }
- set name { bodyparam: name[str] } { post: /redis/setname }
- get name { get: /redis/getname }
- add to list { bodyparam: field[str] } { post: /redis/addtolist }
- get list { get: /redis/getlist }
- post from list top  { get: /redis/poplist }
- delete list { get: /redis/deletelist }

_Prerequisite;
Redis must be installed locally and running on port 6379_

_To run the project;_ 
- clone the repo
- run npm install in the root directory of the cloned directory(where package.json is)
- fill config.env file appropriately 
- then in the root directory of the clone directory(where app.js is) run 'npm run dev'
