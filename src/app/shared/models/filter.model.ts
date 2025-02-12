import { Signal } from '@angular/core';

export interface FilterModel {
  query: Signal<string>;
  order: Signal<'asc' | 'desc'>;
}
