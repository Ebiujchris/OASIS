import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Oasis website")
    .items([
      S.listItem()
        .title("Homepage content")
        .id("homePage")
        .child(
          S.document()
            .schemaType("homePage")
            .documentId("homePage"),
        ),
      S.divider(),
      S.documentTypeListItem("product").title("Products"),
      S.documentTypeListItem("service").title("Services"),
      S.documentTypeListItem("sitePhoto").title("Field & project photos"),
    ]);
