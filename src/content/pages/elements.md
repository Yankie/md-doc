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
