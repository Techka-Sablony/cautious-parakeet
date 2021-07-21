# Výpis variant 🎉

Nově představujeme řešení výpisu variant produktů, které jsme od základního nastavení Shoptetu rozšířili o funkci, ve které si můžete zvolit množství variant, které chcete pod produktem zobrazovat.

<!-- ![An image](https://ik.imagekit.io/alexborecky/shoptetak/Docs/options_WryynkAwOWyh.png) -->


## Administrace Shoptetu

Nejdříve se podíváme do sekce administrace Shoptetu, do které budeme vkládat náš nový kód. Tu najdeme následovně:

<Box-TextBox 
    :msg="msg"
/>


## Kód pro vložení

Do textové sekce <b>Záhlaví (před koncovým tagem HEAD)</b>, budeme vkládat následující kód:

```html
<script>
    var productsVariantsCount = 5;
</script>
```

V tomto kódu je pro nás zásadní číslo, které se vyskytuje hned za symbolem rovná se (`=`). Toto číslo právě určuje množství variant, které se budou zobrazovat pod vypsaným produktem. V  případě kódu výše jich tak bude zobrazeno pět.

### Label "+ další"

Pokud počet vybraných variant neodpovídá počtu variant, kterými produkt disponuje, pak se za poslední značkou varianty automaticky zobrazí label <b>"+ další" </b>.


## Větší množství variant

Pokud chcete, aby na vašem e-shopu byly vidět všechny varianty, pak stačí zadat číslo `99` a všechny vaše varianty se tak zobrazí. 

:::warning
V případě použití většího množství variant počítejte s tím, že po estetické stránkce pak může váš e-shop trpět! 
:::


<script>
export default {
    data () {
        return {
            msg: 'Administrace > VZHLED A OBSAH > Editor > HTML kód >  Záhlaví (před koncovým tagem HEAD)'
        }
    }
}
</script>