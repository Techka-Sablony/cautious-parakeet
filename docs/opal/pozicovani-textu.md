# Pozice textů v Carouselu

Nově je možné nastavit pozice textu v bannerech a carouselech, a to na pravou stranu. Nastavení je velmi jednoduché a nyní vás jím provedeme.


## Administrace Shoptetu
V první řadě je nutné dostat se do sekce v administraci, do které budeme kód vkládat. Ta je následující:

<Box-TextBox 
    :msg="msg"
/>


## Kód pro nastavení pozice

Jsou možná různá nastavení, a to pro nastavení pozice u carouselu a u bannerů. Je nutné je rozlišit, neboť kódy se liší.

|Typ banneru      |`kód`             |
|-----------------|:----------------:|
|Carousel         |`var carouselCaptionRight = true`|
|Top bannery      |`var bannersCaptionRight = true`|

### Bannery 

Pro nastavení textu na pravou stranu banneru, je nutné do výše zmíněné sekce vložit tento kód:

```html
<script>
    var bannersCaptionRight = true;
</script>
```

Tento kód samotný nám nastaví pozici textu na pravou stranu a další nastavení již není potřeba.


### Carousel
U Carouselu se pozastavíme, neboť je nutné myslet na to, že je možné nastavit jich více. Proto jsme přidali funkci, která umožňuje výběr konkrétního banneru v carouselu, u kterého se bude text zobrazovat napravo.

#### Obecné povolení pozice
Pro povolení tohoto nastavení je nutné přidat náledující kód: 

```html
<script>
    var carouselCaptionRight = true;
</script>
```

#### Výběr banneru v carouselu

Jakmile budete chtít vybrat konkrétní banner, který má mít pozici textu vpravo, je nutné přidat následující kód:

```html
<script>
    var rightSlide2 = true;
    var rightSlide4 = true;
    var rightSlide6 = true;
    ...
</script>
```

Číslo za `rightSlide` je nutné nahradit číslem banneru, u kterého chcete mít pozici textu vpravo.

#### Příklad

Řekněme, že budu mít ve svém carouselu nastavených 5 bannerů a budu chtít, aby text vpravo byl na bannerech <b>1</b> a <b>3</b>. Kód, který tak budu vkládat to sekce Zápatí, bude vypadát následovně:


```html
<script>
    var carouselCaptionRight = true;
    var rightSlide1 = true;
    var rightSlide3 = true;
</script>
```

<script>
export default {
    data () {
        return {
            msg: 'Administrace > VZHLED A OBSAH > Editor > HTML kód >  Zápatí (před koncovým tagem BODY)'
        }
    }
}
</script>

<!-- this  -->