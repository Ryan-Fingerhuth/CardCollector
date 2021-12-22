export interface ICardDto {
  id: number;
  cardName: string;
  cardDescription: string;
  rowNumber: number;
  orderNumber: number;
}

export interface ICardSet {
  id: number;
  numberOfRows: number;
  numberOfColumns: number;
  cards: ICardDto[];
}
