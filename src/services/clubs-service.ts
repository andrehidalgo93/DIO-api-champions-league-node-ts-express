import * as HttpResponse from '../utils/http-helper';
import * as ClubRepository from '../repositories/clubs-repository';

export const getClubService = async() => {
  const data = await ClubRepository.findAllClubs();
   
  const response = HttpResponse.ok(data);
  return response
}