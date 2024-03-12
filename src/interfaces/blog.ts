export interface Blog {
  _id: string;
  title: string;
  articles?: Article[];
}

export interface Article {
  _id?: string;
  title?: string;
  text?: string;
  images?: string[];
}
