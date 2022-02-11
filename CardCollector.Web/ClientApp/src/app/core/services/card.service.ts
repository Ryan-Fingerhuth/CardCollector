import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ICardDto, ISearchDto} from "../models";
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

  public cardLookUp(request: string): Observable<any> {
    return this.apiService.get(`api/query/cardLookUp/${encodeURI(request)}`);
  }
}