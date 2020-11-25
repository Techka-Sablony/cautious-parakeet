# Dark Mode

Dark mode je tmavý vzhled originálního Premium carouselu, který se skvěle hodí na e-shopy s tmavším tématem, nebo větším kontrastem barev. Jeho nastavení je poměrně snadné a naleznete jej níže

![An image](https://ik.imagekit.io/alexborecky/shoptetak/Doplnky/Premium_carousel/main_image_SI0vic2QJIzW.png)


## Administrace Shoptetu
V první řadě budeme chtít přidat kód do patřičného místa v naší Shoptet administraci. Toto místo najdeme následovně:
<Box-TextBox 
    :msg="msg"
/>

## Přidání stylu
Zkopírujte kód níže do pole <b>Zápatí (před koncovým tagem BODY)</b>

![An image](https://ik.imagekit.io/alexborecky/shoptetak/Docs/Screenshot_2020-11-19_at_13.14.57_MG9up3YnRRAe.png)

```html
<script src="https://cdn.myshoptet.com/usr/shoptet.tomashlad.eu/user/documents/extras/premium-carousel/tmavy-vzhled.js"></script>
```

## Uložit a obnovit stránku
Po uložení obnovte stránku svého e-shopu a změna se projeví ihned.

<script>
export default {
    data () {
        return {
            msg: 'Administrace > VZHLED A OBSAH > Editor > HTML Kód > Zápatí (před koncovým tagem BODY)'
        }
    }
}
</script>