const mongoose = require("mongoose");
const connectDB = require("../config/db");

const Users = require("../models/users");
const Courses = require("../models/courses");
const Enrollments = require("../models/enrollments");
const Materials = require("../models/materials");
const Quizzes = require("../models/quizzes");
const QuizAttempts = require("../models/quizAttempts");
const Assignments = require("../models/assignments");
const AssignmentSubmissions = require("../models/assignmentSubmissions");
const ChatSessions = require("../models/chatSessions");
const Messages = require("../models/messages");
const ActivityLogs = require("../models/activityLogs");
const Documents = require("../models/documents");
const EmbeddingsMeta = require("../models/embeddingsMeta");
const AiInteractions = require("../models/aiInteractions");

const seedData = async () => {
  try {
    await connectDB();

    await Users.deleteMany();
    await Courses.deleteMany();
    await Enrollments.deleteMany();
    await Materials.deleteMany();
    await Quizzes.deleteMany();
    await QuizAttempts.deleteMany();
    await Assignments.deleteMany();
    await AssignmentSubmissions.deleteMany();
    await ChatSessions.deleteMany();
    await Messages.deleteMany();
    await ActivityLogs.deleteMany();
    await Documents.deleteMany();
    await EmbeddingsMeta.deleteMany();
    await AiInteractions.deleteMany();

    const users = await Users.insertMany([
      {
        name: "Admin User",
        email: "admin@plms.com",
        password: "admin123",
        role: "admin",
        department: "Administration",
        isActive: true,
      },
      {
        name: "Teacher User",
        email: "teacher@plms.com",
        password: "teacher123",
        role: "teacher",
        department: "Computer Science",
        isActive: true,
      },
      {
        name: "Student User",
        email: "student@plms.com",
        password: "student123",
        role: "student",
        department: "Computer Science",
        yearOrSemester: "Semester 4",
        isActive: true,
      },
    ]);

    const teacher = users.find((user) => user.role === "teacher");
    const student = users.find((user) => user.role === "student");
    const admin = users.find((user) => user.role === "admin");

    const course = await Courses.create({
      title: "Full Stack Web Development",
      description: "MERN stack course for PLMS project.",
      teacherId: teacher._id,
      category: "Web Development",
      startDate: new Date("2026-04-01"),
      endDate: new Date("2026-07-01"),
      status: "active",
      thumbnail: "course-thumbnail.jpg",
    });

    await Enrollments.create({
      courseId: course._id,
      studentId: student._id,
      status: "active",
    });

    const material = await Materials.create({
      courseId: course._id,
      teacherId: teacher._id,
      title: "Introduction to MERN Stack",
      description: "Week 1 introduction notes.",
      fileUrl: "uploads/mern-intro.pdf",
      fileType: "pdf",
    });

    const quiz = await Quizzes.create({
      courseId: course._id,
      teacherId: teacher._id,
      title: "MERN Basics Quiz",
      description: "Quiz on MERN fundamentals.",
      questions: [
        {
          question: "What does MERN stand for?",
          options: ["MongoDB, Express, React, Node", "MySQL, Express, React, Node"],
          correctAnswer: "MongoDB, Express, React, Node",
        },
      ],
      totalMarks: 10,
      createdBy: "teacher",
      isPublished: true,
    });

    await QuizAttempts.create({
      quizId: quiz._id,
      courseId: course._id,
      studentId: student._id,
      answers: [
        {
          question: "What does MERN stand for?",
          selectedAnswer: "MongoDB, Express, React, Node",
        },
      ],
      score: 10,
      feedback: "Good work. Strong basics.",
      attemptNumber: 1,
    });

    const assignment = await Assignments.create({
      courseId: course._id,
      teacherId: teacher._id,
      title: "Build Login Page",
      description: "Create a responsive login page using React.",
      dueDate: new Date("2026-04-20"),
      totalMarks: 20,
    });

    await AssignmentSubmissions.create({
      assignmentId: assignment._id,
      courseId: course._id,
      studentId: student._id,
      fileUrl: "uploads/login-page.zip",
      marks: 18,
      feedback: "Good UI and structure.",
      status: "reviewed",
    });

    const chatSession = await ChatSessions.create({
      userId: student._id,
      courseId: course._id,
      role: "student",
    });

    await Messages.insertMany([
      {
        chatSessionId: chatSession._id,
        senderId: student._id,
        senderRole: "student",
        message: "Can you explain React components?",
        messageType: "text",
      },
      {
        chatSessionId: chatSession._id,
        senderId: teacher._id,
        senderRole: "teacher",
        message: "Yes, components are reusable building blocks in React.",
        messageType: "text",
      },
    ]);

    const document = await Documents.create({
      courseId: course._id,
      materialId: material._id,
      uploadedBy: teacher._id,
      documentText: "This is extracted text from the uploaded course PDF.",
      processedStatus: "processed",
    });

    await EmbeddingsMeta.create({
      documentId: document._id,
      chunkIndex: 1,
      vectorId: "vec_001",
      chunkText: "Introduction to MERN stack and its components.",
    });

    await AiInteractions.create({
      userId: student._id,
      courseId: course._id,
      query: "Explain MERN stack",
      response: "MERN stands for MongoDB, Express, React, and Node.js.",
      type: "chat",
    });

    await ActivityLogs.insertMany([
      {
        userId: teacher._id,
        role: "teacher",
        action: "Created course",
        entityType: "course",
        entityId: course._id,
        details: "Created Full Stack Web Development course",
      },
      {
        userId: student._id,
        role: "student",
        action: "Enrolled in course",
        entityType: "course",
        entityId: course._id,
        details: "Student enrolled in Full Stack Web Development",
      },
      {
        userId: admin._id,
        role: "admin",
        action: "Monitored platform activity",
        entityType: "system",
        entityId: admin._id,
        details: "Checked user and course activity",
      },
    ]);

    console.log("Sample data inserted successfully.");
    process.exit();
  } catch (error) {
    console.error("Seeding error:", error.message);
    process.exit(1);
  }
};

seedData();
