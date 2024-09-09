import { it, test } from "@jest/globals";
import cds from "@sap/cds";
import { SqliteError } from "better-sqlite3";

const connected = cds.connect.to('db', {model:"."});

test("CDS typer issue", async () => {

  await connected;

  const { OBJECTS } = await import("../@cds-models/index");

  await SELECT.from(OBJECTS, (o) => {
    o.OBJECT_TYPE, o.OBJECT_OID, o.SCHEMA_NAME, o.OBJECT_NAME;
    o?.view?.((t) => {
      t("*");
      t?.columns?.("*");
    });
  });
});

test("CDS typer issue workaround", async () => {
 
  await connected;

  const { OBJECTS } = await import("../@cds-models/index");

  try {

    await SELECT.from(OBJECTS, (o) => {
      o.OBJECT_TYPE, o.OBJECT_OID, o.SCHEMA_NAME, o.OBJECT_NAME;
      o.view && o.view((t) => {
        t("*");
        t.columns && t.columns("*");
      });
    });
    
  } catch (error) {

    if (error instanceof SqliteError) {

      console.log("SqliteError occured, but the actuial call has been done! Code works");

    } else {

      throw error;

    }
    
  }

  
});
