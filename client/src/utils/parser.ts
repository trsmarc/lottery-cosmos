import { load } from "js-yaml";
import { Config } from "../types/config";

export async function readYamlFile(filePath: string): Promise<Config> {
  const response = await fetch(filePath);
  const raw = await response.text();
  const data = (await load(raw)) as Config;

  return data;
}
