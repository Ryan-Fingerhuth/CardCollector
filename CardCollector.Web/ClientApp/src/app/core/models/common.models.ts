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
