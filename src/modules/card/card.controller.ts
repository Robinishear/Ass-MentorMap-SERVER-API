import { Request, Response } from "express";
import { CardService } from "./card.service";

const createCard = async (req: Request, res: Response) => {
  try {
    const cardData = req.body;
    const result = await CardService.createCardIntoDB(cardData);

    res.status(200).json({
      success: true,
      message: "Card created successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Failed to create card",
      error: err,
    });
  }
};

const getAllCards = async (req: Request, res: Response) => {
  try {
    const result = await CardService.getAllCardsFromDB();
    res.status(200).json({
      success: true,
      message: "Cards retrieved successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
const deleteCard = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await CardService.deleteCardFromDB(id as string);

    res.status(200).json({
      success: true,
      message: "Card deleted successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Failed to delete card",
    });
  }
};

const updateCard = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await CardService.updateCardIntoDB(id as string, req.body);

    res.status(200).json({
      success: true,
      message: "Card updated successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Failed to update card",
    });
  }
};

const getSingleCard = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await CardService.getSingleCardFromDB(id as string);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Card not found!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Card fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const CardController = {
  createCard,
  updateCard,
  deleteCard,
  getAllCards,
  getSingleCard
};
