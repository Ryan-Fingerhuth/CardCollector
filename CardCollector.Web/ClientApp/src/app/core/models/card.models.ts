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
  image: Blob;
  thumbnail: string | ArrayBuffer;
  imageFilePath: string;
  cardObtained: boolean;

  uniqueId: string; // front-end only
  selected: boolean; // front-end only
  index: number; // front-end only

  // binder
  pageNumber: number;
  rowNumber: number;
  columnNumber: number;
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
