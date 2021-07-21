# Sekce administrace Shoptetu

Nově budeme všchny kódy a nastavení vkládat do následující sekce: 

<Box-TextBox 
    :msg="msg"
/>

![An image](https://ik.imagekit.io/alexborecky/shoptetak/Docs/admin-zahlavi_HABGMvqTPKBDZ.jpg)

## Příkad nastavení

Všechna nastavení jsou pro vás připravena ve formátu `<script>`, proto není nutné pokaždé tyto atributy kopírovat. Níže můžete vidět příklad nastavení pro funkci [Skrytí počítadel](/adamin/skryti-pocitadel) a [Výchozí množství produktů na řádek](/adamin/produkty-na-radek). Každé zválšť jsou zabaleny mezi `<script>` a `</script>`, nicméně pokud se rozhodnete aplikovat více nastavení, stačí mít tento "obal" v sekci HEAD pouze jednou.

```html
<script>
    hideProductsQuantity = true;
    var defaultProductsCount = true;
</script>
```

<script>
export default {
    data () {
        return {
            msg: 'Administrace > VZHLED A OBSAH > Editor > HTML Kód > Záhlaví (před koncovým tagem HEAD)'
        }
    }
}
</script>