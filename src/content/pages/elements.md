---
title: Элементы
description: Элементы которые можно использовать в системе
---

Как было замечено во [Введении](index.md#flavours) Markdown имеет много вариантов дополнительного синтаксиса, причем часто он будет взаимоисключать и противоречить другому.

Поэтому в нашей системе рендеринга документации будет использоваться синтаксис, описаный в этом подразделе.


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

Pandoc supports task lists, using the syntax of GitHub-Flavored Markdown.

- [ ] an unchecked task list item
- [x] checked item


## Attributes

* allowedAttributes: `id`, `class`

!!!caution Caution
    There's must be a [[space]] between `{` and `#` in case if `id` specification!

```md

text { #ttt .ttt}

```

<figure class="example"><div>

text { #ttt .ttt}

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
- code highlighting^
  - https://www.npmjs.com/package/markdown-it-prism, https://prismjs.com/#basic-usage
  - https://www.npmjs.com/package/markdown-it-code-section
  - https://www.npmjs.com/package/markdown-it-code-block
- investigate https://www.npmjs.com/package/markdown-it-auto-crosslinker
- Clash with `--` ndash replacement rule (https://www.npmjs.com/package/markdown-it-small)
- https://www.npmjs.com/package/markdown-it-emph
- https://mdit-plugins.github.io/align.html
    - Tabs -- https://mdit-plugins.github.io/tab.html
- treelist https://www.npmjs.com/package/markdown-it-treelist
- https://www.npmjs.com/package/markdown-it-playground
- https://www.npmjs.com/package/markdown-it-multicolumn

