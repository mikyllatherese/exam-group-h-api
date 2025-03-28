# exam-group-h-api

This is for our Quiz 4 - Semi Final.

Leader:
Mikylla Therese Dinauanao - set up the server and routes and merged.

Group Members:
Marcelo Cagara Jr. - implemented the GET /exams.
Rafael Caballero - implemented the POST /exams.
Allana Felize Salar - implemented the PUT /exams.

API Documentation
Base URL: http://localhost:3000/api

Endpoints

1. GET All Exams
   Endpoint: GET /api/exams
   Response:
   [
   { "id": 1, "name": "INTPROG Exam" },
   { "id": 2, "name": "SYSAD Exam" }
   ]

2. Add a New Exam
   Endpoint: POST /api/exams
   Request Body:
   {
   "id": 3,
   "name": "DATABASE Exam"
   }
   Response:
   {
   "message": "Exam added successfully",
   "exam": { "id": 3, "name": "DATABASE Exam" }
   }

3. Update an Exam
   Endpoint: PUT /api/exams/:id
   Request Body:
   {
   "name": "Updated Exam Name"
   }
   Response:
   {
   "message": "Exam updated successfully",
   "exam": { "id": 1, "name": "Updated Exam Name" }
   }
