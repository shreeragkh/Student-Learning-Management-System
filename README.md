# PLMS Database

This project contains the MongoDB database models and sample seed data for the PLMS (Personalized Learning Management System) project.

## Collections Included

- users
- courses
- enrollments
- materials
- quizzes
- quizAttempts
- assignments
- assignmentSubmissions
- chatSessions
- messages
- activityLogs

## Optional AI Collections

- documents
- embeddingsMeta
- aiInteractions

## Project Structure

- `config/db.js` -> MongoDB connection
- `models/` -> All collection schema files
- `seed/seedData.js` -> Sample data insertion file
- `server.js` -> Main file to load DB connection and models

## How to Run

1. Install dependencies
npm install

2. Make sure MongoDB is running locally

3. Start the project
npm start

4. Insert sample data
npm run seed


## Sample Flow Covered

Admin, teacher, and student users
Teacher creates a course
Student enrolls in the course
Teacher uploads material
Teacher creates quiz
Student attempts quiz
Teacher creates assignment
Student submits assignment
Chat session and messages
Activity logs
Optional AI-related sample records

## Integration Use 

This database layer is designed so the Node.js backend team can directly integrate APIs with these models. The main CRUD flow supported is:

- Teacher creates course
- Student enrolls in course
- Teacher views enrolled students
- Teacher uploads material or creates quiz
- Student submits quiz or assignment
- Teacher and admin view activity and results

## Notes

The project currently uses local MongoDB connection:
mongodb://127.0.0.1:27017/plms

To run this project, MongoDB must be installed and running on the local system
Teammates can integrate their Node.js backend with these models directly

Optional AI collections are included for future RAG-based features