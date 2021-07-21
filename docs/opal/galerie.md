# Vylepšená galerie 🎉

Nová galerie umožňuje širší pohled na fotografie v plné šířce a s vytažením fotografie samotné. Její nastavení je velmi snadné. 


<!-- Nahradit obrázek -->
![An image](https://ik.imagekit.io/alexborecky/shoptetak/Docs/Opal/gallery_ps1gOXOhb.png)

## Administrace Shoptetu
V první řadě je důležité nalézt sekci, kam budeme přidávat kód. Tuto část administrace najdete podle cesty níže.

<Box-TextBox 
    :msg="msg"
/>

## Přidání kódu

Kód níže stačí zkopírovat do textového pole. Nastaveny mohou být dvě hodnoty - `true` a `false`. Hodnota `true` aktivuje vylepšenou galerii obrázku, hodnota `false` nebo smazání kódu vylepšenou galerii vypne.

```html
<script>
    var wideGallery = true;
</script>
```

## Uložení

Pro projevení změny na šabloně je třeba uložit kód a znovu načíst stránku vašeho e-shopu.

<script>
export default {
    data () {
        return {
            msg: 'Administrace > VZHLED A OBSAH > Editor > HTML kód > Záhlaví'
        }
    }
}
</script>