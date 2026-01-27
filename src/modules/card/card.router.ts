import express from "express";
import { CardController } from "./card.controller";

const router = express.Router();

router.post(
    "/create-card",
     CardController.createCard);

router.get(
    "/", 
    CardController.getAllCards);
    
router.delete(
    "/:id",
     CardController.deleteCard);

router.patch(
    "/:id",
     CardController.updateCard);

    router.get(
        "/:id",
         CardController.getSingleCard);

export const CardRoutes = router;
