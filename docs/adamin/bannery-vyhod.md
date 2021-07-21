# Bannery výhod

V této kapitole vás provedeme nastavením Bannerů výhod, které naleznete na hlavní straně

![An image](https://ik.imagekit.io/alexborecky/shoptetak/Docs/Screenshot_2021-03-04_at_14.50.49_qpBuM0poL9.png)

## Administrace Shoptetu
V první řadě je důležité nalézt sekci, kam budeme bannery přidávat. Tuto část administrace najdete podle cesty níže.

<Box-TextBox 
    :msg="msg"
/>

## Nastavení banneru
Jakmile je banner přidán, nastavní provedme podle obrázku níže. Konkrétně se soustřeďme na TYP BANNERU, POZICE BANNERU a zviditelnění na všech zařízeních.

![An image](https://ik.imagekit.io/alexborecky/shoptetak/Doplnky/Celestin/settings_OvDSfVnHp.png)

## Upravovaní kódu
Podívejme se nejdříve na kód, který budeme přidávat do editoru našeho nově přidaného banneru

```html
<div class="benefit-banner">
    <div class="icon-box">
        <img src="https://cdn.myshoptet.com/usr/shoptet.tomashlad.eu/user/documents/extras/adamin/img/truck.svg">
    </div>
    <div class="desc-box">
        <h3> Nahradíme textem </h3>
        <p> Nahradíme textem </p>
    </div>
</div>
```

Věnujme pozornost konkrétně třema atributům, které můžeme měnit, a to <b>obrázek</b>, jehož url vkládáme v řádce začánající atributem `img`. Odkaz vždy vkládáme mezi uvozovky za atributem `src`.

Další dvě proměnné pak jsou `h3` a `p`. <b>Text</b> mezi nimi můžeme upravovat dle libosti.

## Přidání kódu
Nyní známe atributy, které můžeme upravovat a nic nám tedy nebrání nahrát kód do administrace Shoptetu k nově přidanému banneru, a to do textové sekce Nastavení.

![An image](https://ik.imagekit.io/alexborecky/shoptetak/Doplnky/Celestin/html_MnGgQfUyW8Vv.png)

Po přidání můžeme libovolně měnit text i obrázek v banneru. Posledním krokem je tak <b>ULOŽIT</b> změny a banner se vám začne postupně přidávat na hlavní stránku.

:::warning
Další výhody do svého banneru přidáte opakováním stejného procesu.
:::

## Naše ikonky

Níže naleznete odkazy na ikonky, které používáme v šabloně my. Adresa zůstává následující, pouze za poslední lomítko zadáte název ikony.

`https://cdn.myshoptet.com/usr/shoptet.tomashlad.eu/user/documents/extras/adamin/img/(název ikony)`

### Příklad

Pokud chci ikonku s náklaďákem, bude odkaz vypadat následovně: 
`https://cdn.myshoptet.com/usr/shoptet.tomashlad.eu/user/documents/extras/adamin/img/truck.svg`

| Ikonka | Obrázek | Název |
|:------|---------|:------|
|Náklaďák|![An image](https://ik.imagekit.io/alexborecky/shoptetak/Docs/Screenshot_2021-03-04_at_14.54.49_2shLfZuhO2.png)|`truck.svg`|
|Vrácení|![An image](https://ik.imagekit.io/alexborecky/shoptetak/Docs/Screenshot_2021-03-04_at_14.54.58_-qcGrV2AawKQy.png)|`refresh.svg`|
|Telefon|![An image](https://ik.imagekit.io/alexborecky/shoptetak/Docs/Screenshot_2021-03-04_at_14.55.06_-xAtw8GRRu7oq.png)|`phone.svg`|
|Ocenění|![An image](https://ik.imagekit.io/alexborecky/shoptetak/Docs/Screenshot_2021-03-04_at_14.55.12_rqJ1ZR_UQG.png)|`award.svg`|

::: tip
Ikony čerpáme z několika zdrojů, tyto konkrétní pochází z dílny [Feather Icons](https://feathericons.com). Návod na nahrání na url nebo Shoptet naleznete v sekci [Vygenerování URL obrázku](/opal/url-obrazku).
:::


<script>
export default {
    data () {
        return {
            msg: 'Administrace > VZHLED A OBSAH > Doplňkové bannery > Přidat'
        }
    }
}
</script>

<style lang="scss">
tr {
    img {
        max-height: 120px;
    }
}
</style>