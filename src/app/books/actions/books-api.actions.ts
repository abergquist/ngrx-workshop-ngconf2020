import { createAction, props } from "@ngrx/store";
import { BookModel } from "src/app/shared/models";

const actionGroup = '[Books API]'

export const booksLoaded = createAction(
  `{actionGroup} Books Loaded Success`,
  props<{ books: BookModel[]}>()
);

export const bookCreated = createAction(
  `{actionGroup} Book Created`,
  props<{ book: BookModel }>()
);

export const bookUpdated = createAction(
  `{actionGroup} Book Updated`,
  props<{ book: BookModel }>()
);

export const bookDeleted = createAction(
  `{actionGroup} Book Deleted`,
  props<{ bookId: string }>()
);
