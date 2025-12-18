"use server";

import { redirect } from "next/navigation";
import db from "../db/database";

export type BlogPost = {
  id: number;
  title: string;
  date: string;
  content: string;
  section: string;
};

export async function getPosts(section: string): Promise<BlogPost[]> {
  return db.prepare("SELECT * FROM posts WHERE section = ? ORDER BY id DESC").all(section) as BlogPost[];
}

export async function createPost(formData: FormData) {
  const title = String(formData.get("title"));
  const date = String(formData.get("date"));
  const content = String(formData.get("content"));
  const section = String(formData.get("section"));

  db.prepare(
    "INSERT INTO posts (title, date, content, section) VALUES (?, ?, ?, ?)"
  ).run(title, date, content, section);
  redirect("/CV");
}

export async function deletePost(id: number) {
  db.prepare("DELETE FROM posts WHERE id = ?").run(id);
  redirect("/CV");
}

