import hljs from 'highlight.js/lib/core';
import js from 'highlight.js/lib/languages/javascript';
import ts from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import 'highlight.js/styles/github.css';
import { KeyboardEventHandler } from 'react';

hljs.registerLanguage('javascript', js);
hljs.registerLanguage('javascript', ts);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('css', css);

export default function CodeEditor({
  language,
  code,
  setCode,
  editable = true,
}: {
  language: string;
  code: string;
  setCode: (code: string) => void;
  editable?: boolean;
}) {
  // const { highlightedCode, handleKeyDown } = useEditor(code, setCode, language);
  let highlightedCode = hljs.highlight(code, { language }).value;

  return (
    // <div className="code-editor overflow-x-scroll bg-slate-50 shadow rounded-t-lg">
    <div className="code-editor overflow-x-auto bg-gray-100 rounded-xl border">
      <div className="relative h-fit min-h-full w-fit min-w-full p-4 text-sm leading-[1.4rem]">
        <pre
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
          className="h-full w-full text-nowrap font-firacode not-italic"
        />
        {/* <textarea
          name="code"
          aria-label="editor"
          defaultValue={code}
          onKeyDown={handleKeyDown}
          onChange={(e) => {
            setCode(e.target.value);
          }}
          autoCapitalize="off"
          autoComplete="off"
          spellCheck="false"
          className="absolute top-0 left-0 p-4 resize-none bg-transparent text-transparent caret-sky-500 outline-none border-none font-firacode h-fit min-h-full w-fit min-w-full text-sm leading-[1.4rem] focus:ring-transparent"
          disabled={!editable}
        /> */}
      </div>
    </div>
  );
}

const useEditor = (
  code: string,
  _setCode: (val: string) => void,
  language: string,
) => {
  let highlightedCode = hljs.highlight(code, { language }).value;

  if (highlightedCode === '') highlightedCode = ' ';
  // TODO: 해결책 찾기
  if (highlightedCode[highlightedCode.length - 1] === '\n')
    highlightedCode += ' ';

  const handleKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    const textarea = e.target as HTMLTextAreaElement;
    const code = textarea.value;
    const isCtrlZ = (e.metaKey || e.ctrlKey) && e.key === 'z';

    const setCode = (code: string) => {
      textarea.value = code;
      _setCode(code);
    };

    if (e.key === 'Tab') {
      e.preventDefault();

      const { selectionStart, selectionEnd } = textarea;

      const indent = '  ';
      const newValue = insertAt(code, indent, selectionStart);

      setCode(newValue);

      textarea.selectionStart = selectionStart + indent.length;
      textarea.selectionEnd = selectionEnd + indent.length;
    } else if (isCtrlZ) {
      // TODO
      e.stopPropagation();
    }
  };

  return { handleKeyDown, highlightedCode };
};

const insertAt = (str1: string, str2: string, idx: number) =>
  `${str1.slice(0, idx)}${str2}${str1.slice(idx)}`;
