"use server";

import { redirect } from "next/navigation";
import db from "../db/database";

export type BlogPost = {
  id: number;
  title: string;
  date: string;
  content: string;
};

export async function getPosts(): Promise<BlogPost[]> {
  return db.prepare("SELECT * FROM posts ORDER BY id DESC").all() as BlogPost[];
}

export async function createPost(formData: FormData) {
  const title = String(formData.get("title"));
  const date = String(formData.get("date"));
  const content = String(formData.get("content"));

  db.prepare(
    "INSERT INTO posts (title, date, content) VALUES (?, ?, ?)"
  ).run(title, date, content);
  redirect("/CV");
}
