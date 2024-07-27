export const sassLanguage = {
    defaultToken: '',
    tokenPostfix: '.sass',
  
    keywords: [
      '@import', '@media', '@mixin', '@include', '@function', '@return', '@if', '@else', '@for', '@each', '@while',
    ],
  
    builtins: [
      'adjust-color', 'scale-color', 'change-color', 'transparentize', 'rgba', 'hsla', 'lighten', 'darken', 'saturate', 'desaturate', 'fade-in', 'fade-out', 'mix', 'grayscale', 'complement', 'invert', 'opacity', 'position', 'replace', 'abs', 'round', 'ceil', 'floor', 'min', 'max', 'random', 'percentage', 'unit', 'length', 'width', 'height', 'image-width', 'image-height', 'image-url', 'unquote', 'quote', 'str-length', 'str-insert', 'str-index', 'str-slice', 'to-upper-case', 'to-lower-case', 'unique-id', 'selector-nest', 'selector-append', 'selector-replace', 'selector-unify', 'is-superselector', 'simple-selectors', 'selector-parse', 'selector-extend', 'selector-list', 'selector-merge', 'selector-each', 'selector-exists', 'selector-until', 'selector-filter', 'selector-join',
    ],
  
    operators: [
      '=', '>', '<', '!', '~', '?', ':', '==', '<=', '>=', '!=', '<=>', '===', '&&', '||', '+=', '-=', '*=', '/=', '&=', '|=', '^=', '%=', '<<=', '>>=', '**=', '//='
    ],
  
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
  
    escapes: /\\(?:[abefnrtv\\"'0-7]|x\h{1,2}|u\{\h{1,6}\})/,
  
    tokenizer: {
      root: [
        [/[a-z_$][\w$]*/, {
          cases: {
            '@keywords': 'keyword',
            '@builtins': 'type',
            '@default': 'identifier'
          }
        }],
        { include: '@whitespace' },
        [/[{}()\[\]]/, '@brackets'],
        [/[<>](?!@symbols)/, '@brackets'],
        [/[@](?:[a-zA-Z_]\w*)?/, 'metatag'],
        [/[a-zA-Z_$][\w$]*/, 'identifier'],
        [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
        [/0[xX][0-9a-fA-F]+/, 'number.hex'],
        [/\d+/, 'number'],
        [/[;,.]/, 'delimiter'],
        [/"([^"\\]|\\.)*$/, 'string.invalid'],
        [/'([^'\\]|\\.)*$/, 'string.invalid'],
        [/"/, 'string', '@string_double'],
        [/'/, 'string', '@string_single'],
        [/[#].*$/, 'comment'],
      ],
  
      whitespace: [
        [/\s+/, 'white'],
        [/(^#.*$)/, 'comment'],
      ],
  
      string_double: [
        [/[^\\"]+/, 'string'],
        [/@escapes/, 'string.escape'],
        [/\\./, 'string.escape.invalid'],
        [/"/, 'string', '@pop']
      ],
  
      string_single: [
        [/[^\\']+/, 'string'],
        [/@escapes/, 'string.escape'],
        [/\\./, 'string.escape.invalid'],
        [/'/, 'string', '@pop']
      ],
    },
  };
  