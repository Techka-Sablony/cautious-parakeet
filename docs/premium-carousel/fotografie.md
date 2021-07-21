# Poměr stran fotografie
Toto nastavení umožní zapnutí dynamického řešení obrázku nahraných do Premium Carouselu a poskytne vám tak možnost nahrát obrázky, které mohou mít jiné rozměry než doporučené

## Administrace Shoptetu
V první řadě budeme chtít přidat kód do patřičného místa v naší Shoptet administraci. Toto místo najdeme následovně:
<Box-TextBox 
    :msg="msg"
/>

## Přidání stylu
Zkopírujte kód níže do pole <b>Zápatí (před koncovým tagem BODY)</b>

![An image](https://ik.imagekit.io/alexborecky/shoptetak/Docs/Screenshot_2020-11-19_at_13.14.57_MG9up3YnRRAe.png)

```html
<script src="https://cdn.myshoptet.com/usr/shoptet.tomashlad.eu/user/documents/extras/premium-carousel/dynamicka-vyska.js"></script>
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