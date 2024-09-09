// This is an automatically generated file. Please do not change its contents manually!
import * as __ from './_';
export function _VIEWSAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class VIEWS extends Base {
        declare SCHEMA_NAME?: string | null;
        declare VIEW_NAME?: string | null;
        declare VIEW_OID?: string;
        declare COMMENTS?: string | null;
        declare columns?: __.Association.to.many<VIEW_COLUMNS_>;
      declare static readonly actions: Record<never, never>
  };
}
export class VIEWS extends _VIEWSAspect(__.Entity) {}
Object.defineProperty(VIEWS, 'name', { value: 'VIEWS' })
Object.defineProperty(VIEWS, 'is_singular', { value: true })
export class VIEWS_ extends Array<VIEWS> {$count?: number}
Object.defineProperty(VIEWS_, 'name', { value: 'VIEWS' })

export function _OBJECTSAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class OBJECTS extends Base {
        declare SCHEMA_NAME?: string | null;
        declare OBJECT_NAME?: string | null;
        declare OBJECT_TYPE?: string | null;
        declare OBJECT_OID?: string | null;
        declare view?: __.Association.to<VIEWS> | null;
      declare static readonly actions: Record<never, never>
  };
}
export class OBJECTS extends _OBJECTSAspect(__.Entity) {}
Object.defineProperty(OBJECTS, 'name', { value: 'OBJECTS' })
Object.defineProperty(OBJECTS, 'is_singular', { value: true })
export class OBJECTS_ extends Array<OBJECTS> {$count?: number}
Object.defineProperty(OBJECTS_, 'name', { value: 'OBJECTS' })

export function _VIEW_COLUMNSAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class VIEW_COLUMNS extends Base {
        declare SCHEMA_NAME?: string;
        declare VIEW_NAME?: string;
        declare COLUMN_NAME?: string;
        declare POSITION?: number | null;
        declare DATA_TYPE_ID?: string | null;
        declare DATA_TYPE_NAME?: string | null;
        declare LENGTH?: number | null;
        declare SCALE?: number | null;
        declare COMMENTS?: string | null;
      declare static readonly actions: Record<never, never>
  };
}
export class VIEW_COLUMNS extends _VIEW_COLUMNSAspect(__.Entity) {}
Object.defineProperty(VIEW_COLUMNS, 'name', { value: 'VIEW_COLUMNS' })
Object.defineProperty(VIEW_COLUMNS, 'is_singular', { value: true })
export class VIEW_COLUMNS_ extends Array<VIEW_COLUMNS> {$count?: number}
Object.defineProperty(VIEW_COLUMNS_, 'name', { value: 'VIEW_COLUMNS' })
