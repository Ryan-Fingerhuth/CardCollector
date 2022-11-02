export class LoaderState {
  displayLoader: boolean;
  isLoading: boolean;
  loaderId: number;
}

export interface IBooleanDialogProperties {
  message: string;
  header: string;
  okText: string;
  cancelText: string;
  dialogType: 'Danger' | 'Info' | 'Warn' | 'Success' | 'Primary' | 'Secondary';
  headerCss: string;
  okCss: string;
}

export interface IApiResponse<T> {
  isSuccess: boolean;
  hasErrors: boolean;
  errors: string[];
  result: T;
}

export const enum ToastPositions {
  BottomLeft = 'toast-bottom-left',
  BottomCenter = 'toast-bottom-center',
  BottomRight = 'toast-bottom-right',
  BottomFullWidth = 'toast-bottom-full-width',
  TopLeft = 'toast-top-left',
  TopCenter = 'toast-top-center',
  TopRight = 'toast-top-right',
  TopFullWidth = 'toast-top-full-width'
}

export enum SCREEN_SIZE {
  XS,
  SM,
  MD,
  LG,
  XL,
  XXL
}
