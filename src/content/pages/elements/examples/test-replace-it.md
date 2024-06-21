
## Simple typographic replacements


    `(c)`, `(C)` → © // disabled

    `(tm)`, `(TM)` → ™ // disabled

    `(r)`, `(R)` → ® // disabled

    `+-` → ±

    `...` → …

    `?....` → ?..

    `!....` → !..

    `????????` → ???

    `!!!!!` → !!!

    `,,` → 

    `--` → –

    `---` → —

---

## TODO

 - [arrows](https://symbl.cc/en/unicode-table/#arrows) `->`, `=>` → `→`, `⇒`
 - [fractionals](https://symbl.cc/en/search/?q=fraction) `1/2, 1/4, 3/4` → `½, ¼, ¾`
 - [multiplications / dimensions ](https://symbl.cc/en/00D7/) `2 x 4` → `2 × 4`
 - [degrees](https://symbl.cc/en/00B0/) `20deg` → `20°`



## Test

| Case                          | MD Src code                                     | MD Src code Rendered                                       | Result that should be                |
| :============================ | :=============================================: | :========================================================: | :==================================: |
| test                          | `(bad)`                                         | <code>(bad)</code>                                         | `(bad)`                              |
| copyright (c) (C)             | `(c) (C)`                                       | <code>(c) (C)</code>                                       | `© ©`                                |
| reserved (r) (R)              | `(r) (R)`                                       | <code>(r) (R)</code>                                       | `® ®`                                |
| trademark (tm) (TM)           | `(tm) (TM)`                                     | <code>(tm) (TM)</code>                                     | `™ ™`                                |
| plus-minus                    | `+-5`                                           | <code>+-5</code>                                           | `±5`                                 |
| ellipsis                      | `test.. test... test..... test?..... test!....` | <code>test.. test... test..... test?..... test!....</code> | `test… test… test… test?.. test!..`  |
| dupes                         | `test!!!!!! ???? ,,`                            | <code>test!!!!!! ???? ,,</code>                            | `test!!! ??? ,`                      |
| copyright should be escapable | `\(c)`                                          | <code>\(c)</code>                                          | `(c)`                                |
| shouldn't replace entities    | `&#40;c) (c&#41; (c)`                           | <code>&#40;c) (c&#41; (c)</code>                           | `(c) (c) ©`                          |
| dashes                        | `---markdownit --- super---`                    | <code>---markdownit --- super---</code>                    | `—markdownit — super—`               |
| ^^                            | `markdownit---awesome`                          | <code>markdownit---awesome</code>                          | `markdownit—awesome`                 |
| ^^                            | `abc ----`                                      | <code>abc ----</code>                                      | `abc ----`                           |
| ^^                            | `--markdownit -- super--`                       | <code>--markdownit -- super--</code>                       | `–markdownit – super–`               |
| ^^                            | `markdownit--awesome`                           | <code>markdownit--awesome</code>                           | `markdownit–awesome`                 |
| dashes should be escapable    | `foo \-- bar`                                   | <code>foo \-- bar</code>                                   | `foo \-\- bar`                       |
| ^^                            | `foo -\- bar`                                   | <code>foo -\- bar</code>                                   | `foo \-\- bar`                       |
| regression tests for #624     | `1--2--3`                                       | <code>1--2--3</code>                                       | `1–2–3`                              |
| ^^                            | `1 -- 2 -- 3`                                   | <code>1 -- 2 -- 3</code>                                   | `1 – 2 – 3`                          |
| ^^                            | `1---2---3`                                     | <code>1---2---3</code>                                     | `1—2—3`                              |
| ^^                            | `1 --- 2 --- 3`                                 | <code>1 --- 2 --- 3</code>                                 | `1 – 2 – 3`                          |
| ^^                            | `1 -- -- 3`                                     | <code>1 -- -- 3</code>                                     | `1 – – 3`                            |
| ^^                            | `1 --- --- 3`                                   | <code>1 --- --- 3</code>                                   | `1 — — 3`                            |

{style="font-size:2rem;"}
