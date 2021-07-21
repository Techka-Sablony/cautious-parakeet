# Nastavení bannerů a carouselu

V šabloně Nefrit jsme přistoupili k jednoduchému nastavení bannerů, kterým vás nyní provedeme. 

![An image](https://ik.imagekit.io/alexborecky/shoptetak/Docs/Nefrit/bannery_SfIuN0U7e.jpg?updatedAt=1626872071212)

## Základní nastavení

V administraci vašeho e-shopu přejděte do záložky doplňkových bannerů, a to dle cesty níže 👇

<Box-TextBox 
    :msg="banner"
/>

v případě nastavování carouselu pak 👇

<Box-TextBox 
    :msg="carousel"
/>

### Přidání banneru

V této sekci zvolte možnost "Přidat", kterou naleznete v pravém horním rohu. Banner pak můžete pojmenovat libovolně. 

![An image](https://ik.imagekit.io/alexborecky/shoptetak/Docs/Nefrit/Screenshot_2021-07-21_at_14.57.58_wSZeJEjofG.png?updatedAt=1626872303791)

:::tip 
Doporučujeme bannery kvůli lepší organizaci pojemnovat srozumitelně a jasně 😉
:::

### Typ banneru

Po vytvoření banneru by se automaticky měl načíst formulář s poli pro vyplnění. Je důležité mít nastavený <b>Typ banneru</b> jako <b>Obrázek</b>. 

### Pozice banneru 

Zvolením pozice se nám banner zobrazí v dané části e-shopu. Např. banner v pozici Top se zobrazuje hned pod carouselem na hlavní stránce. Nově jsme přidali banner v pozici <b>Kategorie</b>, který se zobrazuje ve výpisu kategorie. 

### Ostatní pole

Aby byl banner zobrazen správně, je potřeba vyplnit všechna další pole. Níže jsme pro ilustraci přiložili obrázek vyplněného formuláře našeho Top banneru 👇

![An image](https://ik.imagekit.io/alexborecky/shoptetak/Docs/Nefrit/Screenshot_2021-07-21_at_15.02.48_uUIvWTpNoj.png)

<script>
export default {
    data () {
        return {
            banner: 'Administrace > VZHLED A OBSAH > Bannery > Doplňkové Bannery',
            carousel: 'Administrace > VZHLED A OBSAH > Bannery > Carousel',
        }
    }
}
</script>