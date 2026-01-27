import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),

  emailAndPassword: {
    enabled: true,
  },

  trustedOrigins: [process.env.APP_URL!],

  user: {
    additionalFields: {
      role: {
        type: "string",
        required: true,
        defaultValue: "STUDENT",
      },
      phone: {
        type: "string",
        required: false,
      },
      status: {
        type: "string",
        defaultValue: "ACTIVE",
        required: false,
      },
    },
  },
});
declare module "better-auth" {
    interface User {
        role: string;
        phone?: string;
        status?: string;
    }
}
