# Nastavení úvodního carouselu

Carousel můžete klasicky nahrát obrázkový banner, jako u běžných šablon. Dnes je však trend používat HTML bannery, neboť text bannerů je ostrý a dá se snadněji editovat a zvyšuje výkonnost vaší SEO (optimalizace vyhledatelnosti).

## Administrace Shoptetu

V administraci se musíme dostat do sekce editoru kódu, a to pomocí následující cesty.

<Box-TextBox 
    :msg="msg"
/>

## Nastavení carouselu

Pro nastavení HTML carouselu při jeho editaci nastavte `Typ banneru` na `Textový banner`. Do nastavení vložte kód níže. Editovat můžete pouze barevně podtržené obsahy. Červeně podtržený text je URL adresa vašeho obrázku, kterou nahradíte za jakoukoliv jinou. Zeleně podtržené texty jsou texty, které můžete libovolně přepsat. Modře podtržený hashtag nebo-li tento znak `#` můžete nahradit cílovou adresou, kam se proklik tlačítka má směrovat.

![An image](https://shoptet.tomashlad.eu/user/documents/upload/html-rubin_1.png)

```html
<div class="carousel-slide-box">
    <img src="https://shoptetak.cz/modul/kodl/spinel/build/img/hp-slide1.png"/>

    <div class="carousel-slide-caption">
       <p>Vítejte na ukázkové šabloně›</p>
        <h2>Rubin Blank</h2>

        <p>Jedná se o ukázkovou šablonu, kterou můžete mít i vy na Shoptetu</p>

        <a href="#" class="button">Koupit šablonu</a>
    </div>
</div>
```

::: tip
Připravujeme pro vás generátor, který vám usnadní práci a již brzy jej spustíme!
:::

<script>
export default {
    data () {
        return {
            msg: 'Administrace > VZHLED A OBSAH > Bannery > Carousel'
        }
    }
}
</script>