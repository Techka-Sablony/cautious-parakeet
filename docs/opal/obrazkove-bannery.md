# Obrázkové bannery

V Opalu je možné nastavit bannery obrázkové tak, aby velikost odpovídala ukázkové šabloně. Kód níže stačí zkopírovat do sekce: 

<Box-TextBox 
    :msg="msg"
/>

Kód, který budete kopírovat.

```html
<link rel="stylesheet" href="https://cdn.myshoptet.com/usr/shoptet.tomashlad.eu/user/documents/extras/opal/banners-default.css?v=9">
```

:::tip
Je možné nastavit bannery textové, jejichž dokumentaci naleznede zde 👉 [Nastavení bannerů](/opal/nastaveni-banneru), nebo můžete vyzkoušet náš [Genrátor kódu](../generator) ☝️.
:::


<script>
export default {
    data () {
        return {
            msg: 'Administrace > VZHLED A OBSAH > Editor > HTML kód >  Záhlaví (před koncovým tagem HEAD)'
        }
    }
}
</script>