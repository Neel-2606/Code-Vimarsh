import prisma from "../../config/prisma.js";
export const getAll = async () => prisma.teamMember.findMany({ orderBy: { created_at: "desc" } });
export const create = async (data) => prisma.teamMember.create({ data });
export const update = async (id, data) => prisma.teamMember.update({ where: { id }, data });
export const remove = async (id) => prisma.teamMember.delete({ where: { id } });