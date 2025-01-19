import { Request, Response } from "express";
import * as service from "../services/players-service";
import { StatisticsModel } from "../models/statistics-model";

export const getPlayer = async(req: Request, res: Response) => {
  const httpResponse = await service.getPlayerService();

  res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const getPlayerById = async(req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const httpResponse = await service.getPlayerByIdService(id);

  res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const postPlayer = async(req: Request, res: Response) => {
  const body = req.body;
  const httpResponse = await service.createPlayerService(body);

  res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const updatePlayer = async(req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const body: StatisticsModel = req.body;
  const httpResponse = await service.updatePlayerService(id, body);
  
  res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const deletePlayer = async(req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const httpResponse = await service.deletePlayerService(id);

  res.status(httpResponse.statusCode).json(httpResponse.body);
}