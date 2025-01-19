// This file defines API routes related to 'company' in a Next.js application.

import { NextApiRequest, NextApiResponse } from "next";

// Example handler for company-related API routes
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json({ message: "Company route working!" });
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
