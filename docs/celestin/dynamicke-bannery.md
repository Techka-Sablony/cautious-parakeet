# Dynamické bannery

Nastavením dynamických bannerů umožníme automatickou úpravu velikosti obrázků, které zadáváme jako hlavní na naší domácí stránku. Toto nastavení je velmi snadné a je možné jej provést ve dvou krocích

## Administrace Shoptetu
V administraci se musíme dostat do sekce editoru kódu, a to pomocí následující cesty.

<Box-TextBox 
    :msg="msg"
/>


## Přidání kódu
Jakmile jsme v sekci editoru HTML kódu, zkopírujeme kód uvedený níže do sekce Záhlaví (před koncovým tagem HEAD)

```html
<script src="https://cdn.myshoptet.com/usr/shoptet.tomashlad.eu/user/documents/extras/celestin/dynamicke-bannery.js"></script>
```

Po vložení stačí <b>uložit</b> a změny se po znovunačtení vašeho e-shopu automaticky projeví.



<script>
export default {
    data () {
        return {
            msg: 'Administrace > VZHLED A OBSAH > Editor > HTML Kód'
        }
    }
}
</script>