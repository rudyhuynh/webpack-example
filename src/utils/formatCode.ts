import * as prettier from "prettier/standalone";
import typescriptPlugin from "prettier/plugins/typescript";
import * as prettierPluginEstree from "prettier/plugins/estree";

export async function formatCode(input: string) {
  return await prettier.format(input, {
    parser: "typescript",
    plugins: [typescriptPlugin, prettierPluginEstree],
  });
}
