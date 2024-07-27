export const rubyLanguage = {
    defaultToken: '',
    tokenPostfix: '.ruby',
  
    keywords: [
      'alias', 'and', 'begin', 'break', 'case', 'class', 'def', 'do', 'else',
      'elsif', 'end', 'ensure', 'false', 'for', 'if', 'in', 'module', 'next',
      'nil', 'not', 'or', 'redo', 'rescue', 'retry', 'return', 'self', 'super',
      'then', 'true', 'undef', 'unless', 'until', 'when', 'while', 'yield',
    ],
  
    builtins: [
      'Array', 'Float', 'Integer', 'String', 'at_exit', 'autoload', 'binding',
      'caller', 'catch', 'chomp', 'chomp!', 'chop', 'chop!', 'eval', 'exec',
      'exit', 'exit!', 'fail', 'fork', 'format', 'gets', 'global_variables',
      'gsub', 'gsub!', 'iterator?', 'lambda', 'load', 'local_variables', 'loop',
      'open', 'p', 'print', 'printf', 'proc', 'putc', 'puts', 'raise', 'rand',
      'readline', 'require', 'select', 'sleep', 'split', 'sprintf', 'srand',
      'sub', 'sub!', 'syscall', 'system', 'test', 'trace_var', 'trap', 'untrace_var'
    ],
  
    typeKeywords: [],
  
    operators: [
      '=', '>', '<', '!', '~', '?', ':', '==', '<=', '>=', '!=', '<=>', '===',
      '>>', '<<', '&&', '||', '+=', '-=', '*=', '/=', '&=', '|=', '^=', '%=',
      '<<=', '>>=', '**='
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
  