"use client";

import React from 'react';
import styles from "./LanguageSelector.module.css";
import cn from 'classnames'; 

const languageS = ["javascript", "typescript", "csharp", "php", "java", "ruby", "html", "css", "sass", "python", "cpp", "c", "go", "solidity", "rust"];

type Prop = {
  onSelect: (language: string) => void;
};

const LanguageSelector = ({ onSelect }: Prop) => {
  return (
    <div>
      <select onChange={onSelect} className={cn(" cursor-pointer", styles.select)}>
        {
          languageS.map((item, index) => (
            <option key={index} value={item} className={cn(" cursor-pointer", styles.option)}>
              {item}
            </option>
          ))
        }
      </select>
    </div>
  );
};

export default LanguageSelector;
