import {
  createReadableStreamFromReadable,
  type LoaderArgs,
} from "@remix-run/node";
import { fs, path } from "~/libs/node.server";

export const loader = async ({ request }: LoaderArgs) => {
  const filename = path.join(process.cwd(), "public/images/remix.png");
  const stream = fs.createReadStream(filename);
  return new Response(createReadableStreamFromReadable(stream), {
    headers: { "Content-Type": "image/png" },
  });
};
