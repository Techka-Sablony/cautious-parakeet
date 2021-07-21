# Light mode 🎉

Light mode je nová varianta šablony Celestin, kterou přidáváme zdarma! Tím pádem máte možnost nastavit si vzhled, který vyhovuje vám a vaším zákazníkům. Nastavení tohoto vzhledu je velmi jednoduché a v této kapitole vás jím provedeme.

![An image](https://ik.imagekit.io/alexborecky/shoptetak/Doplnky/Celestin/light_mode_RXBVk9W2n.png)

## Administrace Shoptetu

Nejdříve přejdeme do sekce administrace Shoptetu, podle cesty níže. 

<Box-TextBox 
    :msg="msg"
/>

## Přidání kódu
Jakmile jsme v sekci editoru HTML kódu, zkopírujeme kód uvedený níže do sekce Záhlaví (před koncovým tagem HEAD)

```html
<link rel="stylesheet" href="https://cdn.myshoptet.com/usr/shoptet.tomashlad.eu/user/documents/extras/celestin/light-mode.css?v09">
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