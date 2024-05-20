"use client";
import React, { useEffect, useState } from "react";
import { ModeToggle } from "./modeToggle";
import LanguagesSelect from "./LanguagesSelect";
import EditorInnerPanel from "./EditorInnerPanel";
import {
  LanguangeOption,
  LanguangeOpts,
  exampleSnippets,
} from "@/config/config";

interface editorPaneProps {}

const EditorPane: React.FC<editorPaneProps> = ({}) => {
  const [languageOption, setLanguageOption] = useState(LanguangeOpts[1]);
  const [commentSign, setCommentSign] = useState<string>("//");

  useEffect(() => {
    // Update the comment sign based on the selected language
    if (languageOption.language === "lua") {
      setCommentSign("--");
    } else {
      setCommentSign("//");
    }
  }, [languageOption]);
  useEffect(() => {
    // Update the source code when the comment sign or language option changes
    setSourceCode(
      `${commentSign} Vim mode enabled\n${
        exampleSnippets[languageOption.language]
      }`
    );
  }, [commentSign, languageOption]);

  const [sourceCode, setSourceCode] = useState(
    `${commentSign}Vim mode enabled\n ${
      exampleSnippets[languageOption.language]
    }`
  );
  const onSelect = (value: LanguangeOption) => {
    setLanguageOption(value);
    setSourceCode(
      `${commentSign}Vim mode enabled\n ${exampleSnippets[value.language]}`
    );
  };
  console.log(languageOption);
  console.log(sourceCode);
  return (
    <div className="min-h-screen dark:bg-black bg-slate-300 rounded-2xl shadow-2xl py-6 px-8">
      <div className="flex items-center justify-between pb-3">
        <h2 className="scroll-m-20  text-2xl font-semibold tracking-tight first:mt-0">
          المحرر
        </h2>
        <div className="flex items-center space-x-2 ">
          <ModeToggle />
          <div className="w-[230px]">
            <LanguagesSelect
              onSelect={onSelect}
              selectedOption={languageOption}
            />
          </div>
        </div>
      </div>
      <div className=" bg-slate-300 dark:bg-gray-900 p-3 rounded-xl">
        <EditorInnerPanel
          sourceCode={sourceCode}
          setSourceCode={setSourceCode}
          selectedLanguage={languageOption}
        />
      </div>
    </div>
  );
};

export default EditorPane;
