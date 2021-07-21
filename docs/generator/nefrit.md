# Rozšířené nastavení

Nově jsme pro vás připravili mini aplikaci, díky které už nebudete muset vymýšlet a složitě kopírovat nastavení z různých sekcí. Tato aplikace vygeneruje kompletní kód vašich nastavení, který jednoduše zkopírujete do administrace vašeho e-shopu, a podle cesty níže:

<Box-TextBox 
    :msg="msg"
/>

![An image](https://ik.imagekit.io/alexborecky/shoptetak/Docs/Nefrit/look01_6akiVpQNQB.png)

:::tip
Plánujeme postupně rozšiřovat funkcionalitu Rozšířeného nastavení! Sledujte proto naše sociální sítě a dokumentaci.
:::

<script>
import data from './data-nefrit/text.js'
import background from './data-nefrit/pozadi.js'
import animation from './data-nefrit/animations.js'
import variants from './data-nefrit/variants.js'
export default {
    data () {
        return {
            options: data,
            backgrounds: background,
            animations: animation,
            selectedOption: null,
            selectedBackground: null,
            selectedAnimation: null,
            selectedVariant: '',
            msg: 'Administrace > VZHLED A OBSAH > Editor > HTML Kód > Záhlaví (před koncovým tagem HEAD)'
        }
    }
}
</script>
