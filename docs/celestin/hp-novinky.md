# Novinky na hlavní straně

Celestin obsahuje výpis novinek na hlavní straně. Ty je samozřejmě možné nepřidávat, nicméně vřele doporučujeme jejich nastavení. Můžete tak oživit svojí hlavní stranu a přidat možnost navigace na sekce, které jsou pro vás důležité.

<!-- ![An image](https://ik.imagekit.io/alexborecky/shoptetak/Doplnky/Celestin/categories_xrupxS6Vl.png) -->

## Administrace Shoptetu

V administraci Shoptetu budeme pracovat se dvěma kategoriemi, a to [Editor Kódu](./hp-novinky.html#editor-kodu) a [Články](./hp-novinky.html#clanky)


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

Hodnotu za symbolem rovná se je možné nastavit podle názvu URL novinek (v našem případě `nase-novinky`). 

### Články

Přejďeme do sekce článků, a to následovně.

<Box-TextBox 
    :msg="msgTwo"
/>


:::danger 
Ujistěte se, že URL rubriky novinek se shoduje s dříve zadaným názvem! (V našem případě nase-novinky)
:::

## Přidání novinek

Novinky můžete nyní přidávat do rubriky libovolně.

## Smazání části kódu

Nyní je třeba se vrátit zpět do sekce: 

<Box-TextBox 
    :msg="msg"
/>

Jakmile jsme upravili kategorie podle našich potřeb, můžeme smazat třetí řádek kódu, a to níže označený. Tento kód sloužil jako pomocník při nastavení kategorií a jejich cache při prvotním nastavení. Jeho smazáním se výrazně zlepší výkon webu.

```js
var hpNewsTestMode = 'false';
```

V našem kompletním kódu:

```html{3}
<script>
   var hpNewsUrl = 'nase-novinky';
   var hpNewsTestMode = 'false';
</script>
```
 Kód v Editoru by pak měl vypadat takto: 
```html
<script>
   var hpNewsUrl = 'nase-novinky';
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