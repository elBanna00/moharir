import { LanguangeOption } from "@/config/config";
import axios from "axios";

export async function executeCode(
  languageOption: LanguangeOption,
  sourceCode: string
) {
  const url = "https://emkc.org/api/v2/piston/execute";
  const data = {
    language: languageOption.language,
    version: languageOption.version,
    files: [
      {
        content: sourceCode,
      },
    ],
  };

  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    console.error("Error executing code:", error);
    throw error;
  }
}
