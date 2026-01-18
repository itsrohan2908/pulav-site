import { connectDB, MenuItem, ContactSubmission } from "./db";
import {
  type MenuItem as MenuItemType,
  type InsertMenuItem,
  type ContactSubmission as ContactSubmissionType,
  type InsertContactSubmission
} from "@shared/schema";

export interface IStorage {
  getMenuItems(): Promise<MenuItemType[]>;
  createContactSubmission(contact: InsertContactSubmission): Promise<ContactSubmissionType>;
  seedMenu(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getMenuItems(): Promise<MenuItemType[]> {
    await connectDB();
    return await MenuItem.find({});
  }

  async createContactSubmission(contact: InsertContactSubmission): Promise<ContactSubmissionType> {
    await connectDB();
    const submission = new ContactSubmission({
      ...contact,
      createdAt: new Date(),
    });
    await submission.save();
    return submission.toObject() as ContactSubmissionType;
  }

  async seedMenu(): Promise<void> {
    await connectDB();
    const existing = await MenuItem.countDocuments();
    if (existing === 0) {
      await MenuItem.insertMany([
        { name: "Special Mag Pulav", description: "Our signature rice dish cooked with secret spices and premium meat.", price: "₹350", category: "Signature" },
        { name: "Chicken Biryani", description: "Classic aromatic biryani with tender chicken pieces.", price: "₹280", category: "Main" },
        { name: "Mutton Pulao", description: "Rich and flavorful mutton rice prepared in traditional style.", price: "₹320", category: "Main" },
        { name: "Dal Makhani", description: "Creamy black lentils simmered overnight.", price: "₹180", category: "Sides" },
        { name: "Butter Naan", description: "Soft clay oven baked bread with butter.", price: "₹40", category: "Breads" },
        { name: "Gulab Jamun", description: "Sweet milk dumplings dipped in rose syrup.", price: "₹80", category: "Dessert" }
      ]);
    }
  }
}

export const storage = new DatabaseStorage();
