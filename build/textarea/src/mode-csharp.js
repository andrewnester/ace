__ace_shadowed__.define("ace/mode/csharp",["require","exports","module","pilot/oop","ace/mode/text","ace/tokenizer","ace/mode/csharp_highlight_rules","ace/mode/matching_brace_outdent"],function(a,b,c){var d=a("pilot/oop"),e=a("ace/mode/text").Mode,f=a("ace/tokenizer").Tokenizer,g=a("ace/mode/csharp_highlight_rules").CSharpHighlightRules,h=a("ace/mode/matching_brace_outdent").MatchingBraceOutdent,i=function(){this.$tokenizer=new f((new g).getRules()),this.$outdent=new h};d.inherits(i,e),function(){this.getNextLineIndent=function(a,b,c){var d=this.$getIndent(b),e=this.$tokenizer.getLineTokens(b,a),f=e.tokens,g=e.state;if(f.length&&f[f.length-1].type=="comment")return d;if(a=="start"){var h=b.match(/^.*[\{\(\[]\s*$/);h&&(d+=c)}return d},this.checkOutdent=function(a,b,c){return this.$outdent.checkOutdent(b,c)},this.autoOutdent=function(a,b,c){this.$outdent.autoOutdent(b,c)},this.createWorker=function(a){return null}}.call(i.prototype),b.Mode=i}),__ace_shadowed__.define("ace/mode/csharp_highlight_rules",["require","exports","module","pilot/oop","pilot/lang","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(a,b,c){var d=a("pilot/oop"),e=a("pilot/lang"),f=a("ace/mode/doc_comment_highlight_rules").DocCommentHighlightRules,g=a("ace/mode/text_highlight_rules").TextHighlightRules,h=function(){var a=new f,b=e.arrayToMap("abstract|event|new|struct|as|explicit|null|switch|base|extern|object|this|bool|false|operator|throw|break|finally|out|true|byte|fixed|override|try|case|float|params|typeof|catch|for|private|uint|char|foreach|protected|ulong|checked|goto|public|unchecked|class|if|readonly|unsafe|const|implicit|ref|ushort|continue|in|return|using|decimal|int|sbyte|virtual|default|interface|sealed|volatile|delegate|internal|short|void|do|is|sizeof|while|double|lock|stackalloc|else|long|static|enum|namespace|string|var|dynamic".split("|")),c=e.arrayToMap("null|true|false".split("|"));this.$rules={start:[{token:"comment",regex:"\\/\\/.*$"},a.getStartRule("doc-start"),{token:"comment",regex:"\\/\\*",next:"comment"},{token:"comment",regex:"\\/\\*\\*",next:"comment"},{token:"string.regexp",regex:"[/](?:(?:\\[(?:\\\\]|[^\\]])+\\])|(?:\\\\/|[^\\]/]))*[/]\\w*\\s*(?=[).,;]|$)"},{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"constant.language.boolean",regex:"(?:true|false)\\b"},{token:function(a){return a=="this"?"variable.language":b.hasOwnProperty(a)?"keyword":c.hasOwnProperty(a)?"constant.language":"identifier"},regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\b(?:in|instanceof|new|delete|typeof|void)"},{token:"lparen",regex:"[[({]"},{token:"rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],comment:[{token:"comment",regex:".*?\\*\\/",next:"start"},{token:"comment",regex:".+"}],qqstring:[{token:"string",regex:'(?:(?:\\\\.)|(?:[^"\\\\]))*?"',next:"start"},{token:"string",regex:".+"}],qstring:[{token:"string",regex:"(?:(?:\\\\.)|(?:[^'\\\\]))*?'",next:"start"},{token:"string",regex:".+"}]},this.addRules(a.getRules(),"doc-"),this.$rules["doc-start"][0].next="start"};d.inherits(h,g),b.CSharpHighlightRules=h}),__ace_shadowed__.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","pilot/oop","ace/mode/text_highlight_rules"],function(a,b,c){var d=a("pilot/oop"),e=a("ace/mode/text_highlight_rules").TextHighlightRules,f=function(){this.$rules={start:[{token:"comment.doc",regex:"\\*\\/",next:"start"},{token:"comment.doc.tag",regex:"@[\\w\\d_]+"},{token:"comment.doc",regex:"s+"},{token:"comment.doc",regex:"TODO"},{token:"comment.doc",regex:"[^@\\*]+"},{token:"comment.doc",regex:"."}]}};d.inherits(f,e),function(){this.getStartRule=function(a){return{token:"comment.doc",regex:"\\/\\*(?=\\*)",next:a}}}.call(f.prototype),b.DocCommentHighlightRules=f}),__ace_shadowed__.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(a,b,c){var d=a("ace/range").Range,e=function(){};(function(){this.checkOutdent=function(a,b){if(!/^\s+$/.test(a))return!1;return/^\s*\}/.test(b)},this.autoOutdent=function(a,b){var c=a.getLine(b),e=c.match(/^(\s*\})/);if(!e)return 0;var f=e[1].length,g=a.findMatchingBracket({row:b,column:f});if(!g||g.row==b)return 0;var h=this.$getIndent(a.getLine(g.row));a.replace(new d(b,0,b,f-1),h)},this.$getIndent=function(a){var b=a.match(/^(\s+)/);if(b)return b[1];return""}}).call(e.prototype),b.MatchingBraceOutdent=e})