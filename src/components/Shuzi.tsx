"use client";

import { NumberFormat } from "shuzi";
import React, { useState } from "react";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";

export default function Shuzi(): React.JSX.Element {
  const [inputValue, setInputValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(event.target.value));
  };

  const computedValue = new NumberFormat("zh-CN-big", { style: "currency" }).format(inputValue);

  return (
    <div className="flex flex-col gap-4 not-prose">
      <div className="flex flex-row items-center gap-8">
        <label htmlFor="number-input">请输入金额:</label>
        <input
          type="number"
          id="number-input"
          value={inputValue}
          onChange={handleChange}
          placeholder="请输入..."
          className="p-2 border border-gray-400 rounded-lg text-right grow px-4"
        />
      </div>
      <DynamicCodeBlock lang="text" code={computedValue} />
    </div>
  );
}
