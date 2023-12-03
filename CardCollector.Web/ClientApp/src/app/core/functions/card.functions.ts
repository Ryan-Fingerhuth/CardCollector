import { ICardDto } from "..";

const emptyCard = (): ICardDto => ({
  id: 0,
  cardName: "",
  cardDescription: "",
  originalSetName: "",
  yearReleased: 0,
  numberInSet: 0,
  fullImageGuid: "",
  thumbnailImageGuid: "",
  cardTags: [],
  tags: [],
  image: null,
  thumbnail: "",
  imageFilePath: "",
  cardObtained: false,
  selected: false,
  index: 0,
  pageNumber: 0,
  rowNumber: 0,
  columnNumber: 0,
  uniqueId: "",
});

export const createCardDto = <T extends Partial<ICardDto>>(
  initialValues: T
): ICardDto & T => {
  return Object.assign(emptyCard(), initialValues);
};
