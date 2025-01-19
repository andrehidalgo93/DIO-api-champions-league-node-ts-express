import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";
import * as PlayerRepository from "../repositories/players-repository";
import * as HttpResponse from "../utils/http-helper";

export const getPlayerService = async() => {
  const data = await PlayerRepository.findAllPlayers();

  if (!data) return await HttpResponse.noContent();
    
  return await HttpResponse.ok(data);
}

export const getPlayerByIdService = async(id: number) => {
  const data = await PlayerRepository.findPlayerById(id);

  if (!data) return await HttpResponse.noContent();

  return await HttpResponse.ok(data);
}

export const createPlayerService = async(player: PlayerModel) => {
  if (Object.keys(player).length === 0) {
    return await HttpResponse.badRequest();
  }
  
  await PlayerRepository.insertPlayer(player);
  return await HttpResponse.created();  
}

export const updatePlayerService = async(id:number, statistics: StatisticsModel) => {
  const data = await PlayerRepository.findAndModifyPlayer(id, statistics);

  if (!data) return await HttpResponse.badRequest();

  return await HttpResponse.ok(data);
}

export const deletePlayerService = async(id: number) => {
  const isDeleted = await PlayerRepository.deleteOnePlayer(id);
  
  if (!isDeleted) return await HttpResponse.badRequest();

  return await HttpResponse.ok({ message: "deleted" });
}