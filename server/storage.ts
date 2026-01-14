import { db } from "./db";
import {
  menuItems,
  contactSubmissions,
  type MenuItem,
  type InsertMenuItem,
  type ContactSubmission,
  type InsertContactSubmission
} from "@shared/schema";

export interface IStorage {
  getMenuItems(): Promise<MenuItem[]>;
  createContactSubmission(contact: InsertContactSubmission): Promise<ContactSubmission>;
  seedMenu(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getMenuItems(): Promise<MenuItem[]> {
    return await db.select().from(menuItems);
  }

  async createContactSubmission(contact: InsertContactSubmission): Promise<ContactSubmission> {
    const [submission] = await db.insert(contactSubmissions).values(contact).returning();
    return submission;
  }

  async seedMenu(): Promise<void> {
    const existing = await this.getMenuItems();
    if (existing.length === 0) {
      await db.insert(menuItems).values([
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
