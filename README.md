# Personal API

this project aims to build a simple RESTful API with Node.js an express. it serves to expose information about myself aswel as projects i am working on and allows feedback to be posted

---

## Setup Instructions

### Requirements
- Node.js
- npm

### Dependancies
- Express - web framework for building the api
- Body-Parser - middleware used for parsing incoming requests

### Installation

 clone the repo
```
https://github.com/Jbizzy6/Personal-API.git
```

Running the server

the server can be ran on local host
```
http://localhost:3000
```

however the API is also deployed using render
```
https://personal-api-zcba.onrender.com
```

### API Endpoints

GET /about
- returns information about myself

GET /projects
- returns information about my projects

POST /feedback
- submit feedback (Requires JSON body with two parameters "name:", and "feedbackDetails")

here is what an example of posting feedback would look like
```
{
	"name": "Josh",
    "feedbackDetails": "Example feedback"
}
```

PUT /feedback
- update submited feedback (requires feedback id in the URL, and a JSON body for the new feedback)
here is an example of what PUTing feedback would look like
```
https://personal-api-zcba.onrender.com/feedback/1

{
"feedbackDetails": "updated feedback"
}
```

DELETE /feedback
- delete submitted feedback by id in the URL

### Testing

- test endpoints with postman
