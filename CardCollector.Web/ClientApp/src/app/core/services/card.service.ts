import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ICardDto } from "../models";
import { IApiResponse } from "../models/common.models";
import { ApiService } from "./api.service";

@Injectable()
export class CardService {
  constructor(private apiService: ApiService) {
  }

  public createCard(request: ICardDto): Observable<IApiResponse<ICardDto>> {
    return this.apiService.post('api/card/createCard', request);
  }
}