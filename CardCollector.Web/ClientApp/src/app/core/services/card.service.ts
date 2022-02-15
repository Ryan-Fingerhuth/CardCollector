import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ICardDto, ISet, ISearchDto } from "../models";
import { IApiResponse } from "../models/common.models";
import { ApiService } from "./api.service";

@Injectable()
export class CardService {
  constructor(private apiService: ApiService) {
  }

  public createCard(imageFile, request): Observable<IApiResponse<ICardDto>> {
    const formData = new FormData();

    if (imageFile) {
      formData.append('imageFile', imageFile);
    }

    formData.append('cardRequest', JSON.stringify(request));

    return this.apiService.post('api/card/createCard', formData);
  }
  
  public searchCard(request: ISearchDto): Observable<IApiResponse<ISearchDto>> {
    return this.apiService.get(`api/query/searchCard/${encodeURI(request.cardName)}`);
  } 

  public getSet(setId: number): Observable<IApiResponse<ISet>> {
    return this.apiService.get(`api/query/getSet/${setId}`);
  }

  public getCardImage(imageGuid: string) {
    return this.apiService.file(`api/card/getCardImage/${imageGuid}`);
  }
}