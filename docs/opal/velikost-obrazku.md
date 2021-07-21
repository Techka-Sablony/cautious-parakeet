# Velikost obrázků
<h5>(aktualizováno 01.04.2021)</h5>

Opal je stavěný tak, aby vaše obrázky vynikly a na potenciální zákazníky zapůsobily.

## Doporučené nastavení

<img src="https://ik.imagekit.io/alexborecky/shoptetak/Docs/imageSize_UyeLR4MfELIe.png">

Opal staví na čtvrcovém poměru stran u fotografií produktů. Je samozřejmě možné použít jakékoliv fotografie, avšak pro využití plné síly Opalu doporučujeme použít fotky s poměrem stran 1:1. Výledkem je tak uniformita, která působí jako pevný základ e-shopu, což v uživatelích buduje pocit důvěry v e-shop.

::: warning
Velikosti obrázku jsou libovolné. Poměr 1:1 je pouze doporučený.
:::

## Výchozí nastavení

Pro Opal jsme připravili nastavení, které může být trochu problematické pro uživatele, kteří jsou zvyklí na výchozí nastavení Shoptetu. Proto jsme připravili kód, který umožní výchozí nastavení Shoptetu. Kód níže zkopírujete do textového pole podle této cesty: 

<Box-TextBox 
    :msg="msg"
/>

```html
<script>
    var defaultProductsImages = true;
</script>
```


<script>
export default {
    data () {
        return {
            msg: 'Administrace > VZHLED A OBSAH > Editor > HTML kód > Záhlaví'
        }
    }
}
</script>


<style lang="scss" scoped>
h5 {
    opacity: .24;
}
</style>