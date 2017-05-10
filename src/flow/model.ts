export interface Article {
  readonly id: string;
  readonly title: string;
  readonly value: number;
};

export type ArticlesEditingMode = 'NORMAL' | 'ADDING' |'DELETING';

export namespace State {
  export type articles = ReadonlyArray<Article>;
  export type articlesEditingMode = ArticlesEditingMode;
}