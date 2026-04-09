const connectDB = require("./config/db");

require("./models/users");
require("./models/courses");
require("./models/enrollments");
require("./models/materials");
require("./models/quizzes");
require("./models/quizAttempts");
require("./models/assignments");
require("./models/assignmentSubmissions");
require("./models/chatSessions");
require("./models/messages");
require("./models/activityLogs");
require("./models/documents");
require("./models/embeddingsMeta");
require("./models/aiInteractions");

const startServer = async () => {
  await connectDB();
  console.log("All database models loaded successfully.");
};

startServer();
