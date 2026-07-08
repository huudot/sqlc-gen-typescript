import { copyAuthors } from "../examples/node-postgres/src/db/query_sql";

async function useCopyfrom(client: Parameters<typeof copyAuthors>[0]) {
  const copiedCount: number = await copyAuthors(client, [
    { name: "Octavia E. Butler", bio: "Earthseed" },
  ]);
  void copiedCount;
}

void useCopyfrom;
