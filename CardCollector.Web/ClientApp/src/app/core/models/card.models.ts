export interface ICardDto {
  id: number;
  cardName: string;
  cardDescription: string;
  originalSet: string;
  yearReleased: number;
  fullImageGuid: string;
  fullImageName: string;
  thumbnailImageGuid: string;
  thumbnailImageName: string;
  cardTags: ICardTag[];
  tags: string[];
  rowNumber: number;
  orderNumber: number;
  image: Blob;
  thumbnail: string | ArrayBuffer;
}

export interface ICardTag {
  cardId: number;
  tagId: number;
}

export interface ITag {
  description: string;
}

export interface ISet {
  id: number;
  setDescription: string;
  numberOfRows: number;
  numberOfColumns: number;
  cards: ICardDto[];
}

export interface ISearchDto {
  cardName: string;
}

