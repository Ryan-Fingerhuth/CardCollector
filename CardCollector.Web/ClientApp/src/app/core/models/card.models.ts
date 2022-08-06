export interface ICardDto {
  id: number;
  cardName: string;
  cardDescription: string;
  originalSetName: string;
  yearReleased: number;
  numberInSEt: number;
  fullImageGuid: string;
  thumbnailImageGuid: string;
  cardTags: ICardTag[];
  tags: string[];
  rowNumber: number;
  orderNumber: number;
  image: Blob;
  thumbnail: string | ArrayBuffer;
  imageFilePath: string;
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

