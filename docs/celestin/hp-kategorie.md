# Kategorie na hlavní straně

Celestin obsahuje výpis kategorií na hlavní straně. Ty je samozřejmě možné nepřidávat, nicméně vřele doporučujeme jejich nastavení. Můžete tak oživit svojí hlavní stranu a přidat možnost navigace na sekce, které jsou pro vás důležité.

![An image](https://ik.imagekit.io/alexborecky/shoptetak/Doplnky/Celestin/categories_xrupxS6Vl.png)

## Administrace Shoptetu

V administraci Shoptetu budeme pracovat se dvěma kategoriemi, a to [Editor Kódu](./hp-kategorie.html#editor-kodu) a [Články](./hp-kategorie.html#clanky)


### Editor kódu

Pro správné nastavení je potřeba vložit následující kód 

```html
<script>
   var hpCategoriesUrl = 'hp-kategorie';
   var hpCategoriesTestMode = 'true';
</script>
```

do kategorie

<Box-TextBox 
    :msg="msg"
/>

Hodnotu za symbolem rovná se je možné nastavit libovolně (v našem případě `hp-kategorie`). 

### Články

Nastavení v této části bude trochu složitější, ale provedeme vás jím detailně ☝️.

Nejdříve přejděme do následující sekce administrace Shoptetu.

<Box-TextBox 
    :msg="msgTwo"
/>

## Přidání rubriky
Jakmile se dostaneme do sekce článku, musíme přidat novou rubriku a pojemnovat ji stejně, jako hodnotu, kterou jsme vložili do editoru kódu za symbol rovná se (v našem případě je to `HP Kategorie`).

![An image](https://ik.imagekit.io/alexborecky/shoptetak/Doplnky/Celestin/category_Dr94D3topV8z.png)

:::danger 
⚠️ Je důležité, aby rubrika byla pojmenováná stejně, jako hodnota vložená v Editoru kódu pro správné fungování navigace.
:::

:::warning
Pojmenujte rubriku bez speciálních symbolů, jako jsou pomlčky a zachovejte pouze název. Pomlčka se díky administraci shoptetu vygeneruje sama po vtyvoření rubriky.
:::

## Přidání článku (kategorie)
V nově vytvořené kategorii můžeme přidat článek. Jeho pojmenování bude stejné, jako jméno kategorie, která bude zobrazena na hlavní straně.
![An image](https://ik.imagekit.io/alexborecky/shoptetak/Doplnky/Celestin/Screenshot_2021-01-06_at_9.30.13_vuOYzRlZG.png)

## Nastavení článku (kategorie)
Pro správné fungování je opět nutné mít nastavení tak, jak jej vidíte níže.

#### Název 
Odpovídá názvu kategorie, která bude zobrazovat na hlavní stránce e-shopu.
#### Datum zveřejnění
Podle data zveřejnění se budou řadit kategorie na hlavní straně. Nejnovější se pak budou řadit na začátek.
#### Rubrika 
Musí být nastavená tak, aby článek patřil do zmíněné HP Kategorie
#### URL adresa
Nyní nastavuje směřování kategorie uvnitř našeho e-shopu. Název můžeme nechat tak, jak je.
#### Externí URL 
Adresa, kterou vyplňujeme sami, a která bude směřovat na danou kategorii. Tzn., musíme zkopírovat URL kategorie produktů našeho e-shopu a přiřadit ji do tohoto pole.
#### Obrázek
Ten, který se opět bude objevovat na hlavní straně a můžeme jej nahrát z našho počítače.

![An image](https://ik.imagekit.io/alexborecky/shoptetak/Doplnky/Celestin/article_XGDwu1-fv.png)


:::danger 
Je opravdu podstatné, aby tyto kroky byly dodrženy. Pouze tak bude možné přidat kategorie správně. Ujistěte se také, že jsou vaše články v rubrice viditelné.
:::

:::warning
Další kategorie přidáte opakováním tohoto procesu.
:::

## Smazání části kódu

Nyní je třeba se vrátit zpět do sekce: 

<Box-TextBox 
    :msg="msg"
/>

Jakmile jsme upravili kategorie podle našich potřeb, můžeme smazat třetí řádek kódu, a to níže označený. Tento kód sloužil jako pomocník při nastavení kategorií a jejich cache při prvotním nastavení. Jeho smazáním se výrazně zlepší výkon webu.

```js
var hpCategoriesTestMode = 'true';
```

V našem kompletním kódu:

```html{3}
<script>
   var hpCategoriesUrl = 'hp-kategorie';
   var hpCategoriesTestMode = 'true';
</script>
```
 Kód v Editoru by pak měl vypadat takto: 
```html
<script>
   var hpCategoriesUrl = 'hp-kategorie';
</script>
```


<script>
export default {
    data () {
        return {
            msg: 'VZHLED A OBSAH > Editor > HTML kód > Záhlaví (před koncovým tagem HEAD)',
            msgTwo: 'VZHLED A OBSAH > Články',
        }
    }
}
</script>