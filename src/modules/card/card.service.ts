import { prisma } from "../../lib/prisma";

const createCardIntoDB = async (payload: any) => {
  console.log(payload);

  const result = await prisma.card.create({
    data: payload,
  });
  return result;
};

const getAllCardsFromDB = async () => {
  const result = await prisma.card.findMany();
  return result;
};

const updateCardIntoDB = async (id: string, payload: any) => {
  const { id: _, ...updateData } = payload;

  const result = await prisma.card.update({
    where: {
      id: id,
    },
    data: updateData,
  });
  return result;
};


const deleteCardFromDB = async (id: string) => {
  const result = await prisma.card.delete({
    where: { id },
  });
  return result;
};

const getSingleCardFromDB = async (id: string) => {
  const result = await prisma.card.findUnique({
    where: {
      id: id,
    },
  });
  return result;
};

export const CardService = {
  createCardIntoDB,
  updateCardIntoDB,
  deleteCardFromDB,
  getAllCardsFromDB,
  getSingleCardFromDB
};
