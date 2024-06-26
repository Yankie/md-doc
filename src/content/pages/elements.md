---
title: Элементы
description: Элементы которые можно использовать в системе
---

Как было замечено во [Введении](index.md#flavours) Markdown имеет много вариантов дополнительного синтаксиса, причем часто он будет взаимоисключать и противоречить другому.

Поэтому в нашей системе рендеринга документации будет использоваться синтаксис, описаный в этом подразделе.

## Шрифты

Используем шрифты фирмы Паратайп
- PT Astra Sans (https://www.paratype.ru/fonts/pt/pt-astra-sans)
- PT Astra Serif (https://www.paratype.ru/fonts/pt/pt-astra-serif)
- PT Mono (https://www.paratype.ru/fonts/pt/pt-mono)
- PT Root UI (https://www.paratype.ru/fonts/pt/pt-root-ui)

## Внутренние ссылки {id=internalLink123}

Можно делать ссылки на заголовки как в текущем, так и в других файлах. В общем случае якорь для ссылки будет иметь вид строки заголовка, в нижнем регистре и с дефисом(`-`) вместо небуквенно-цифровых символов.

Например, заголовок `Продвинутые варианты` будет преобразован в `продвинутые-варианты`, и таким образом ссылка на этот заголовок в статье про таблицы будет выглядеть так:

```md
[Продвинутые варианты разметки таблиц](./elements/table.md#продвинутые-варианты)
```

<figure class="example"><div>

[Продвинутые варианты разметки таблиц](./elements/table.md#продвинутые-варианты)

</div></figure>


!!!note ПРИМЕЧАНИЕ
    Обраитите внимание, что в коде разметки указан путь до файла статьи в исходном коде, который в процессе рендеринга автоматически будет преобразован к нужному конечному URL статьи.

### Именование якоря для ссылок

Можно принудительно задавать имя якоря для последующей ссылки на него. Это делается с помощью задания дополнительного аттрибуда заголовку.

Например, так задан якорь для заголовка этой статьи:

```md
## Внутренние ссылки {id=internalLinks123}
```

Тогда можно сослаться на этот заголовок вот так:

```md
[Ссылка на именованный якорь](#internalLink123)
```

<figure class="example"><div>

[Ссылка на именованный якорь](#internalLink123)

</div></figure>

## Верхние и нижние индексы

Надстрочные индексы могут быть написаны путем окружения надстрочного текста символами `^`; индексы могут быть написаны путем окружения текста с индексами символами `~`.

Так, например,

```md
H~2~O is a liquid.

2^10^ is 1024.
```

<figure class="example"><div>

H~2~O is a liquid.

2^10^ is 1024.

</div></figure>


Текст между `^...^` или `~...~` не может содержать пробелы или символы новой строки.
Если текст с надстрочным или подстрочным индексом содержит пробелы, эти пробелы необходимо экранировать обратной косой чертой(`\`).
(Это сделано для предотвращения случайного надстрочного и нижнего индекса при обычном использовании ~и ^, а также неправильного взаимодействия со сносками.)

Таким образом, если вы хотите, чтобы буква **P** была с нижним индексом  **a cat**, то есть так:  **P~a\ cat~** --- используйте `P~a\ cat~`, а не `P~a cat~`.

## Task lists

MERI Doc supports task lists, using the syntax of GitHub-Flavored Markdown.

```md
- [ ] an unchecked task list item
- [x] checked item
```

<figure class="example"><div>

- [ ] an unchecked task list item
- [x] checked item
</div></figure>

## Definition lists

MERI doc supports definition lists, using the syntax of PHP Markdown Extra with some extensions.2

```md
Term 1

:   Definition 1

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.
```

<figure class="example"><div>

Term 1

:   Definition 1

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

</div></figure>

Each term must fit on one line, which may optionally be followed by a blank line, and must be followed by one or more definitions. A definition begins with a colon or tilde, which may be indented one or two spaces.

A term may have multiple definitions, and each definition may consist of one or more block elements (paragraph, code block, list, etc.), each indented four spaces or one tab stop. The body of the definition (not including the first line) should be indented four spaces. However, as with other Markdown lists, you can “lazily” omit indentation except at the beginning of a paragraph or other block element:

```md
Term 1

:   Definition
with lazy continuation.

    Second paragraph of the definition.
If you leave space before the definition (as in the example above), the text of the definition will be treated as a paragraph. In some output formats, this will mean greater spacing between term/definition pairs. For a more compact definition list, omit the space before the definition:

Term 1
  ~ Definition 1

Term 2
  ~ Definition 2a
  ~ Definition 2b
```

<figure class="example"><div>

Term 1

:   Definition
with lazy continuation.

    Second paragraph of the definition.
If you leave space before the definition (as in the example above), the text of the definition will be treated as a paragraph. In some output formats, this will mean greater spacing between term/definition pairs. For a more compact definition list, omit the space before the definition:

Term 1
  ~ Definition 1

Term 2
  ~ Definition 2a
  ~ Definition 2b

</div></figure>

!!!note ПРИМЕЧАНИЕ
    Note that space between items in a definition list is required. (A variant that loosens this requirement, but disallows “lazy” hard wrapping, can be activated with the compact_definition_lists extension.)



## Attributes

* allowedAttributes: `id`, `class`

!!!caution ВНИМАНИЕ
    Между `{` и `#` должен быть [[space]] в случае, если необходимо задать `id`!
```md

<style>
  .ttt {
    text-decoration: underline;
  }
</style>

Plain text 

Underlined text with #ttt anchor { #ttt .ttt}

Plain again

```

<figure class="example"><div>

<style>
  .ttt {
    text-decoration: underline;
  }
</style>

Plain text 

Underlined text with #ttt anchor { #ttt .ttt}

Plain again

</div></figure>


## Keyboard keys

Renders `[[x]]` as `<kbd>x</kbd>`.
(`<kbd>` is the tag for keystrokes).

```md
Press [[Ctrl]] + [[V]]
```

<figure class="example"><div>

Press [[Ctrl]] + [[V]]

</div></figure>



## TODO
- investigate https://www.npmjs.com/package/markdown-it-auto-crosslinker
- Clash with `--` ndash replacement rule (https://www.npmjs.com/package/markdown-it-small)
- https://www.npmjs.com/package/markdown-it-emph
- https://mdit-plugins.github.io/align.html
    - Tabs -- https://mdit-plugins.github.io/tab.html
- treelist https://www.npmjs.com/package/markdown-it-treelist
- https://www.npmjs.com/package/markdown-it-playground
- https://www.npmjs.com/package/markdown-it-multicolumn

