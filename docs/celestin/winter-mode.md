# Winter Mode

A jako bonus jsme si pro vás připravili tématickou vychytávku, která neodmyslitelně patří k Vánocům - padání sněhu ❄️! Jde o jednoduchou animaci, kdy vločky sněhu padají na vašem e-shopu dolů, směrem od hlavní navigace. Nastavení je velmi podobné nastavení dynamckých bannerů, nebo Light Mode.

![An image](https://ik.imagekit.io/alexborecky/shoptetak/Doplnky/Celestin/winter_mode_tTjDLwjhvq29.png)

## Administrace Shoptetu
V administraci se musíme dostat do sekce editoru kódu, a to pomocí následující cesty.

<Box-TextBox 
    :msg="msg"
/>

## Přidání kódu
Jakmile jsme v sekci editoru HTML kódu, zkopírujeme kód uvedený níže do sekce Záhlaví (před koncovým tagem HEAD)

```html
<script src="https://cdn.myshoptet.com/usr/shoptet.tomashlad.eu/user/documents/extras/celestin/snow.js"></script>
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