export interface ICardDto {
  id: number;
  cardName: string;
  cardDescription: string;
  originalSetName: string;
  yearReleased: number;
  numberInSet: number;
  fullImageGuid: string;
  thumbnailImageGuid: string;
  cardTags: ICardTag[];
  tags: string[];
  rowNumber: number;
  orderNumber: number;
  image: Blob;
  thumbnail: string | ArrayBuffer;
  imageFilePath: string;
  cardObtained: boolean;

  selected: boolean; // front-end only
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
  cards: ICardDto[];
  defaultSet: boolean;
  binderLayout: string;
}

export interface ISearchDto {
  cardName: string;
}
