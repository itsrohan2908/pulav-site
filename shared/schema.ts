import { z } from "zod";

export const insertMenuItemSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  price: z.string().min(1, "Price is required"),
  category: z.string().min(1, "Category is required"),
});

export const insertContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(1, "Message is required"),
});

export type MenuItem = {
  _id?: string;
  name: string;
  description: string;
  price: string;
  category: string;
};

export type InsertMenuItem = z.infer<typeof insertMenuItemSchema>;

export type ContactSubmission = {
  _id?: string;
  name: string;
  email: string;
  message: string;
  createdAt?: Date;
};

export type InsertContactSubmission = z.infer<typeof insertContactSchema>;
