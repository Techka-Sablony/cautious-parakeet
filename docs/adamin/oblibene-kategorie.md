# Oblíbené kategorie na hlavní straně

Podobně jako u jiných novějších šablon jsme přidali oblíbené kategorie na hlavní stránku a nastavením vás nyní provedeme.

## Vytvoření rubriky

Pro správné nastavení je potřeba v sekci <b>Články</b> vytvořit novou sekci s libovolným názvem (např.: Oblíbené kategorie), ale s URL adresou `hp-kategorie`.

![An image](https://ik.imagekit.io/alexborecky/shoptetak/Docs/Screenshot_2021-03-03_at_10.28.48_UJX-OenVLA.png)

:::danger
Je opravdu důležité, aby byl název URL adresy `hp-kategorie`!
:::

## Přídání kategorie (článku)

Pro přidání kategorie je potřeba vytvořit nový článek s názvem kategorie, na kterou chcete odkazovat. Pokud tedy budeme chtít zobrazit kategorii Nápoje, nazveme článek "Nápoje". V článku je pak nutné nastavit URL adresu, která je shodná s adresou na kterou má kategorie odkazovat - v našem případě jde `napoje` a v externí URL adrese pak v následujícím tvaru: `/napoje/`.

![An image](https://ik.imagekit.io/alexborecky/shoptetak/Docs/Screenshot_2021-03-03_at_10.31.00_6-KSW9ACfF2Ho.png)

#### Tabluka hodnot:

| Sekce | Vkládaná hodnota |
| :----- | :---------------- |
|Název| Nápoje |
|Rubrika|Oblíbené kategorie|
|URL adresa|napoje|
|Externí URL|/napoje/|
|Obrázek|libovolný|


## Vkádaný kód

Ke kompletními dokončení je potřeba do sekce uvedené v [První kapitole](/adamin/administrace-shoptetu/) vložit následující kód.

```html
<script>
    hpCategoriesUrl = "hp-kategorie";
</script>
```

Po uložení se sekce objeví na hlavní straně.

:::warning
Někdy chvíli trvá, než se promažou cache a funkce bude plnohodnotně pracovat. Prosíme tedy o trpělivost.
:::