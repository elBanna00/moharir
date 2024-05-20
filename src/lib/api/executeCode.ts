import { LanguangeOption } from "@/config/config";
import axios from "axios";

export async function executeCode(
  languageOption: LanguangeOption,
  sourceCode: string,
  setload: React.Dispatch<React.SetStateAction<boolean>>
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
    console.log("Request:", data);
    const response = await axios.post(url, data);
    console.log("Response:", response);
    setload(false);

    return response.data;
  } catch (error) {
    console.error("Error executing code:", error);
    setload(false);
    throw error;
  }
}
