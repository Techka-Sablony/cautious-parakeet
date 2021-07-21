# Výpis novinek na titulní straně

Nově jsme redesignovali blog, aby odpovídal best practices zobrazování textu na webu. Blog je nově obohacen o středový layout a maximální šířku, která odpovídá maximálnímu počtu znaků, které uživatel dokáže na obrazovce vstřebat. 

Toto nastevení vám pomůže vytvořit vlastní URL adresu, pod kterou bude blog veden. Je důležité, aby v sekci <b>Články</b>, kterou naleznete ve VZHLED & OBSAH, byla vytvořena sekce, se stejnou URL adresou. 

:::tip
Jakmile vytvoříte rubriku článků a zadáte kód níže s tou samou adresou do administrace, blog se automaticky zobrazí na titulní stránce.
:::

## Vkládaný kód

Následující kód pouze zkopírujeme do výše zmíněné sekce, uložíme a vše je tak připraveno.

```html
<script>
    hpBlogUrl = "nazev-url-adresy";
</script>
```

## Příklad

V následujícím příkladu vás provedeme nastavením rubriky nazvané <b>Recepty</b>.

### Vytvoření rubriky

Pro nastavení a odkazování na tuto URL adresu je potřeba vytvořitu rubriku s názevem <b>Recepty</b> a URL adresou `recepty` (viz. obrázky níže).

![An image](https://ik.imagekit.io/alexborecky/shoptetak/Docs/Screenshot_2021-03-03_at_10.14.38_yub7WcAImAmZ.png)
![An image](https://ik.imagekit.io/alexborecky/shoptetak/Docs/Screenshot_2021-03-03_at_10.14.52_ZvmPVg47-uC_.png)

### Vložení kódu do Editoru

Jak jsme již uvedli v [První kapitole](/adamin/administrace-shoptetu) kód vždy vkládáme na stejné místo, a to HEAD (Zápatí) Editoru HTML kódu. V našem případě jsme vytvořili url adresu nazvanou `recepty` a proto je nutné vložit kód, který bude vypadat následovně: 

```html
<script>
    hpBlogUrl = "recepty";
</script>
```

Po uložení se blog automaticky objeví na hlavní straně šablony.