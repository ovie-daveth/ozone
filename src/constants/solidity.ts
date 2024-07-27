export const solidityLanguage = {
    defaultToken: 'text',
    tokenPostfix: '.sol',
  
    // Define the language's regular expressions for tokens
    tokenizer: {
      root: [
        // Comments
        [/\b\/\/.*/, 'comment'],
        [/\b\/\*.*\*\//, 'comment'],
  
        // Strings
        [/"[^"]*"/, 'string'],
        [/'[^']*'/, 'string'],
  
        // Numbers
        [/\b\d+(\.\d+)?/, 'number'],
  
        // Keywords (Add as needed)
        [/\b(?:contract|function|return|if|else|for|while|emit|event|modifier)\b/, 'keyword'],
  
        // Punctuation
        [/[{}()\[\].,;:+\-*/]/, 'delimiter'],
  
        // Identifiers (e.g., variable names, function names)
        [/\b[a-zA-Z_][a-zA-Z_0-9]*\b/, 'identifier'],
      ],
  
      // Define patterns for inside strings, comments, etc.
      string: [
        [/[^"]+/, 'string'],
        [/"/, 'string', '@pop']
      ],
  
      comment: [
        [/[^\/*]+/, 'comment'],
        [/\/\*/, 'comment', '@push'],
        [/\*\//, 'comment', '@pop'],
        [/[\/*]/, 'comment']
      ],
    },
  };
  