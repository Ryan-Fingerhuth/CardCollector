export interface ICardDto {
  id: number;
  cardName: string;
  cardDescription: string;
  originalSet: string;
  year: number;
  fullImageGuid: string;
  thumbnailImageGuid: string;
  cardTags: ICardTag[];
  tags: string[];
  rowNumber: number;
  orderNumber: number;
}

export interface ICardTag {
  cardId: number;
  tagId: number;
}

export interface ITag {
  description: string;
}

export interface ICardSet {
  id: number;
  numberOfRows: number;
  numberOfColumns: number;
  cards: ICardDto[];
}

export interface ISearchDto {
  cardName: string;
}

