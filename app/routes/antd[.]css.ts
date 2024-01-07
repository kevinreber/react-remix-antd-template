import { extractStyle } from "@ant-design/static-style-extract";

export const loader = async () => {
  const css = extractStyle();

  return new Response(css, {
    status: 200,
    headers: {
      "Content-Type": "text/css",
    },
  });
};
