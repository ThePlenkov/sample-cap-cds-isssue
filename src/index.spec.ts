import { test } from "@jest/globals";
import cds from "@sap/cds";

test("CDS typer issue", async () => {

  const env = cds.env;
  //await cds.load();
  await cds.connect.to('db', {model:"."});

  const { OBJECTS } = await import("../@cds-models/index");

  await SELECT.from(OBJECTS, (o) => {
    o.OBJECT_TYPE, o.OBJECT_OID, o.SCHEMA_NAME, o.OBJECT_NAME;
    o?.view?.((t) => {
      t("*");
      t?.columns?.("*");
    });
  });
});
