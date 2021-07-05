import { PrismaClient } from "@prisma/client";
import { Router, Request, Response } from "express";

const prisma = new PrismaClient();
const router = Router();

// GET /users
router.get("/", async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json({ users });
});

// GET /users/:id
router.get("/:id", async (req: Request, res: Response) => {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(req.params?.id) },
  });
  res.json({ user });
});

// POST /users
router.post("/", async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const user = await prisma.user.create({
    data: { name, email },
  });
  res.json({ user });
});

// PUT /users/:id
router.put("/:id", async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const user = await prisma.user.update({
    where: { id: parseInt(req.params?.id) },
    data: { name, email },
  });
  res.json({ user });
});

// DELETE /users/:id
router.delete("/:id", async (req: Request, res: Response) => {
  const user = await prisma.user.delete({
    where: { id: parseInt(req.params?.id) },
  });
  res.json({ user });
});

export default router;
