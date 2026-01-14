import { z } from 'zod';
import { insertContactSchema, insertMenuItemSchema, menuItems, contactSubmissions } from './schema';

export const api = {
  menu: {
    list: {
      method: 'GET' as const,
      path: '/api/menu',
      responses: {
        200: z.array(z.custom<typeof menuItems.$inferSelect>()),
      },
    },
  },
  contact: {
    submit: {
      method: 'POST' as const,
      path: '/api/contact',
      input: insertContactSchema,
      responses: {
        200: z.custom<typeof contactSubmissions.$inferSelect>(),
        400: z.object({ message: z.string() }),
      },
    },
  },
};
