# Novinky na hlavní straně

Celestin obsahuje výpis kategorií na hlavní straně. Ty je samozřejmě možné nepřidávat, nicméně vřele doporučujeme jejich nastavení. Můžete tak oživit svojí hlavní stranu a přidat možnost navigace na sekce, které jsou pro vás důležité.

<!-- ![An image](https://ik.imagekit.io/alexborecky/shoptetak/Doplnky/Celestin/categories_xrupxS6Vl.png) -->

## Administrace Shoptetu

V administraci Shoptetu budeme pracovat se dvěma kategoriemi, a to [Editor Kódu](./hp-kategorie.html#editor-kodu) a [Články](./hp-kategorie.html#clanky)


### Editor kódu

Pro správné nastavení je potřeba vložit následující kód 

```html
<script>
   var hpNewsUrl = 'nase-novinky';
   var hpNewsTestMode = 'false';
</script>
```

do kategorie

<Box-TextBox 
    :msg="msg"
/>

Hodnotu za symbolem rovná se je možné nastavit libovolně (v našem případě `hp-kategorie`). 

### Články

<Box-TextBox 
    :msg="msgTwo"
/>

V sekci články stačí pak v liště "Novinky" přidávat libovolně články. 


## Smazání části kódu

Nyní je třeba se vrátit zpět do sekce: 

<Box-TextBox 
    :msg="msg"
/>

Jakmile jsme upravili články podle našich potřeb, můžeme smazat třetí řádek kódu, a to níže označený. Tento kód sloužil jako pomocník při nastavení článků a jejich cache při prvotním nastavení. Jeho smazáním se výrazně zlepší výkon webu. 

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