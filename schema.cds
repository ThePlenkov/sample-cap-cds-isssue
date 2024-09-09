using {VIEWS} from './cds/VIEWS';
using {OBJECTS} from './cds/OBJECTS';
using {VIEW_COLUMNS} from './cds/VIEW_COLUMNS';

extend VIEWS with {
    columns : Association to many VIEW_COLUMNS
                  on  columns.SCHEMA_NAME = SCHEMA_NAME
                  and columns.VIEW_NAME   = VIEW_NAME;
};


extend OBJECTS with {
    view : Association to one VIEWS
               on  view.VIEW_OID = OBJECT_OID
               and OBJECT_TYPE   = 'VIEW';
}
