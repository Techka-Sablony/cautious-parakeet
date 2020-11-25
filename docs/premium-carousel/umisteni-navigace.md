# Umístění navigace
Premium Carousel je obohacen o možnost pozicování navigace. Různá nastavení a kódy, které jsou potřeba, naleznete v sekcích níže.

[[toc]]

## Administrace Shoptetu
Kódy budeme přidávat do stejné sekce, a to HTML kódy, kterou najdeme následovně:
<Box-TextBox 
    :msg="msg"
/>

## Navigace nahoře ⬆️
![An image](https://ik.imagekit.io/alexborecky/shoptetak/Doplnky/Premium_carousel/Screenshot_2020-11-16_at_10.37.19_enaQacxIGJ-Om.png)
Pro zobrazení navigace v <b>horní části</b> banneru zkopírujte kód níže do sekce v administraci Shoptetu, která je zmíněna výše.

```html
<script src="https://cdn.myshoptet.com/usr/shoptet.tomashlad.eu/user/documents/extras/premium-carousel/navigace-nahore.js"></script>
```

## Navigace dole ⬇️
![An image](https://ik.imagekit.io/alexborecky/shoptetak/Doplnky/Premium_carousel/Screenshot_2020-11-16_at_10.38.17_1lnlRcwJF_FLD.png)
Pro zobrazení navigace ve <b>spodní části</b> banneru zkopírujte kód níže do sekce v administraci Shoptetu, která je zmíněna výše.

```html
<script src="https://cdn.myshoptet.com/usr/shoptet.tomashlad.eu/user/documents/extras/premium-carousel/navigace-dole.js"></script>
```

## Navigace vlevo ⬅️
![An image](https://ik.imagekit.io/alexborecky/shoptetak/Doplnky/Premium_carousel/Screenshot_2020-11-16_at_10.37.48_RFKr28yj8LUC.png)
Pro zobrazení navigace ve <b>spodní části</b> banneru zkopírujte kód níže do sekce v administraci Shoptetu, která je zmíněna výše.

```html
<script src="https://cdn.myshoptet.com/usr/shoptet.tomashlad.eu/user/documents/extras/premium-carousel/navigace-vlevo.js"></script>
```

<script>
export default {
    data () {
        return {
            msg: 'Administrace > VZHLED A OBSAH > Editor > HTML Kód > Zápatí (před koncovým tagem BODY)'
        }
    }
}
</script>