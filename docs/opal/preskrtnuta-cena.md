# Přeškrtnutá cena před slevou 🎉

Tato funkce umožní přeškrtnout standardní cenu v případě, že je zboží v akci, nebo levnější, než původní cena. 

![An image](https://ik.imagekit.io/alexborecky/shoptetak/Docs/Opal/Screenshot_2021-03-16_at_16.05.21_FoMRemsdmkylW.png)

## Administrace Shoptetu
V první řadě je důležité nalézt sekci, kam budeme přidávat kód. Tuto část administrace najdete podle cesty níže.

<Box-TextBox 
    :msg="msg"
/>

## Přidání kódu

Kód níže stačí zkopírovat do textového pole. Nastaveny mohou být dvě hodnoty - `true` a `false`. Hodnota `true` umožňuje přeškrtnutí ceny, takže pokud toto nastavení na šabloně chcete mít, je třeba mít tuto hodnotu v kódu.

```html
<script>
    var productsOldPriceMove = true;
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