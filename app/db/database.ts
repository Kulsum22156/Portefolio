import Database from "better-sqlite3";

const db = new Database("blog.db");

// Crée la table des blogs (une fois)
db.prepare(`CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    date TEXT NOT NULL,
    content TEXT NOT NULL,
    section TEXT NOT NULL)`).run();

export default db;
