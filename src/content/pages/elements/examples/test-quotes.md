## Simple typographic quotes

| Case                                               | MD Src code                          | MD Src code Rendered                         | Result that should be                  |
| :================================================= | :==================================: | :==========================================: | :====================================: |
| Should parse nested quotes:                        | ``"foo 'bar' baz"``                  | <code>"foo 'bar' baz"</code>                 | `“foo ‘bar’ baz”`                      |
| ^^                                                 | ``'foo 'bar' baz'``                  | <code>'foo 'bar' baz'</code>                 | `‘foo ‘bar’ baz’`                      |
| Should not overlap quotes:                         | ``'foo "bar' baz"``                  | <code>'foo "bar' baz"</code>                 | `‘foo "bar’ baz"`                      |
| Should match quotes on the same level:             | ``"foo *bar* baz"``                  | <code>"foo *bar* baz"</code>                 | `“foo <em>bar</em> baz”`               |
| Should handle adjacent nested quotes:              | ``'"double in single"'``             | <code>'"double in single"'</code>            | `‘“double in single”’`                 |
| ^^                                                 | ``"'single in double'"``             | <code>"'single in double'"</code>            | `“‘single in double’”`                 |
| Should not match quotes on different levels:       | ``*"foo* bar"``                      | <code>*"foo* bar"</code>                     | `<em>"foo</em> bar"`                   |
| ^^                                                 | ``"foo *bar"*``                      | <code>"foo *bar"*</code>                     | `"foo <em>bar"</em>`                   |
| ^^                                                 | ``*"foo* bar *baz"*``                | <code>*"foo* bar *baz"*</code>               | `<em>"foo</em> bar <em>baz"</em>`      |
| Smartquotes should not overlap with other tags:    | ``*foo "bar* *baz" quux*``           | <code>*foo "bar* *baz" quux*</code>          | `<em>foo "bar</em> <em>baz" quux</em>` |
| Should try and find matching quote in this case:   | ``"foo "bar 'baz"``                  | <code>"foo "bar 'baz"</code>                 | `"foo “bar 'baz”`                      |
| Should not touch 'inches' in quotes:               | ``"Monitor 21"" and "Monitor""``     | <code>"Monitor 21"" and "Monitor""</code>    | `“Monitor 21"” and “Monitor”"`         |
| Should render an apostrophe as a rsquo:            | ``This isn't and can't be the best   | <code>This isn't and can't be the best       | `This isn’t and can’t be the best      | \
|                                                    | approach to implement this...``      | approach to implement this...</code>         | approach to implement this…`           |
| Apostrophe could end the word, that's why original | ``users' stuff``                     | <code>users' stuff</code>                    | `users’ stuff`                         | \
| smartypants replaces all of them as rsquo:         |                                      |                                              |                                        |
| Quotes between punctuation chars:                  | ``"(hai)".``                         | <code>"(hai)".</code>                        | `“(hai)”.`                             |
| Quotes at the start/end of the tokens:             | ``"*foo* bar"``                      | <code>"*foo* bar"</code>                     | `“<em>foo</em> bar”`                   |
| ^^                                                 | ``"foo *bar*"``                      | <code>"foo *bar*"</code>                     | `“foo <em>bar</em>”`                   |
| ^^                                                 | ``"*foo bar*"``                      | <code>"*foo bar*"</code>                     | `“<em>foo bar</em>”`                   |
| Should treat softbreak as a space:                 | ``"this"                             | <code>"this"                                 | `“this”                                | \
|                                                    | and "that".``                        | and "that".</code>                           | and “that”.`                           |
| ^^                                                 | ``"this" and                         | <code>"this" and                             | `“this” and                            | \
|                                                    | "that".``                            | "that".</code>                               | “that”.`                               |
| Should treat hardbreak as a space:                 | ``"this"\                            | <code>"this"\                                | `“this”<br>                            | \
|                                                    | and "that".``                        | and "that".</code>                           | and “that”.`                           |
| ^^                                                 | ``"this" and\                        | <code>"this" and\                            | `“this” and<br>                        | \
|                                                    | "that".``                            | "that".</code>                               | “that”.`                               |
| Should allow quotes adjacent to other punctuation  | ``The dog---"'man's' best friend"``  | <code>The dog---"'man's' best friend"</code> | `The dog—“‘man’s’ best friend”`        | \
| characters, #643:                                  |                                      |                                              |                                        |
| Should parse quotes adjacent to code block, #677:  | ``"test `code`"``                    | <code>"test `code`"</code>                   | `“test <code>code</code>”`             |
| ^^                                                 | ``"`code` test"``                    | <code>"`code` test"</code>                   | `“<code>code</code> test”`             |
| Should parse quotes adjacent to inline html, #677: | ``"test <br>"``                      | <code>"test <br>"</code>                     | `“test <br>”`                          |
| ^^                                                 | ``"<br> test"``                      | <code>"<br> test"</code>                     | `“<br> test”`                          |
| Should be escapable:                               | ``"foo"``                            | <code>"foo"</code>                           | `“foo”`                                |
| ^^                                                 | ``\"foo"``                           | <code>\"foo"</code>                          | `"foo"`                                |
| ^^                                                 | ``"foo\"``                           | <code>"foo\"</code>                          | `"foo"`                                |
| Should not replace entities:                       | ``&quot;foo&quot;``                  | <code>&quot;foo&quot;</code>                 | `"foo"`                                |
| ^^                                                 | ``&quot;foo"``                       | <code>&quot;foo"</code>                      | `"foo"`                                |
| ^^                                                 | ``"foo&quot;``                       | <code>"foo&quot;</code>                      | `"foo"`                                |

{style="font-size:2rem;"}

