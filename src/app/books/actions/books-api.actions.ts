import { createAction, props } from "@ngrx/store";
import { BookModel } from "src/app/shared/models";

// const actionGroup = '[Books API]'

// export const booksLoaded = createAction(
//   `{actionGroup} Books Loaded Success`,
//   props<{ books: BookModel[]}>()
// );

// export const bookCreated = createAction(
//   `{actionGroup} Book Created`,
//   props<{ book: BookModel }>()
// );

// export const bookUpdated = createAction(
//   `{actionGroup} Book Updated`,
//   props<{ book: BookModel }>()
// );

// export const bookDeleted = createAction(
//   `{actionGroup} Book Deleted`,
//   props<{ bookId: string }>()
// );

export const booksLoaded = createAction(
  '[Books API] Books Loaded Success',
  props<{ books: BookModel[]}>()
);

export const bookCreated = createAction(
  '[Books API] Book Created',
  props<{ book: BookModel }>()
);

export const bookUpdated = createAction(
  '[Books API] Book Updated',
  props<{ book: BookModel }>()
);

export const bookDeleted = createAction(
  '[Books API] Book Deleted',
  props<{ bookId: string }>()
);
