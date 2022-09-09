// Global Type
declare module "*.module.scss";

export interface ICard {
  pic: string,
  name: string,
  id: number,
  company: string,
  handleToggle: (param: any, e: any) => void,
  favorite: number[],
  username: string,
  onClick: () => void
}

export interface ILayout {
  children?: ReactNode
}

