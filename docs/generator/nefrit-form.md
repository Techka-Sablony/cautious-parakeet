# Formulář pro nastavení vzhledu

Pomocí možností níže si můžete zvolit svůj vlastní vzhled. Stačí vždy zvolit jednu z variant a kód se vám automaticky vygeneruje níže v sekci [Váš kód](#vas-kod)

<div class="selection-box text-align">
    <div class="section-title">
        <h3>Zarovnání textu</h3>
        <Tooltip 
            img="https://ik.imagekit.io/alexborecky/shoptetak/Docs/eas/Screenshot_2021-04-08_at_10.51.56_llMUF8DC2T.png"
            content="Po zkušenostech s předchozími šablonami jsme pro vás připravili nastavení zarovnání textu, a to do několika pozic. Výchozí je na střed, další možnosti jsou pak doleva a doprava."
            msgType="Upozornění"
            msg="Toto nastavení se promítne na všech bannerech na hlavní straně"
        />
    </div>
    <div class="options">
    <Selection 
        v-for="option in options" :key="option.title"
        :name="option.name"
        :id="option.id"
        :value="option.value"
        :forID="option.id"
        :title="option.title"
        :onChange="() => selectedOption = option"
        :img="option.img"
    />
    <DefaultButton
        title="Na střed"
        name="text-align"
        id="defaultText"
        forID="defaultText"
        img="https://ik.imagekit.io/alexborecky/shoptetak/Docs/eas/Screenshot_2021-04-08_at_10.43.09_RcTiI1XL8.png"
        :onChange="() => selectedOption = null"
    />
    </div>
</div>

<div class="selection-box text-align">
    <div class="section-title">
        <h3>Úprava podkladů</h3>
        <Tooltip 
            img="https://ik.imagekit.io/alexborecky/shoptetak/Docs/eas/colourScheme_qajj3vjkF.png"
            content="Nově jsme pro vás připravili tři barevná témata podkladů pro šablonu Nefrit - černé, bez podkladu a bílé (výchozí). Tímto nastavením můžete web přiblížit vzhledu vaší identity."
            msgType="Upozornění"
            msg="Toto nastavení se promítne na všech bannerech na hlavní straně"
        />
    </div>
    <div class="options">
    <Selection 
        v-for="background in backgrounds" :key="background.title"
        :name="background.name"
        :id="background.id"
        :value="background.value"
        :forID="background.id"
        :title="background.title"
        :onChange="() => selectedBackground = background"
        :img="background.img"
    />
    <DefaultButton
        title="Bílý"
        name="radio-background"
        id="defaultBackground"
        forID="defaultBackground"
        img="https://ik.imagekit.io/alexborecky/shoptetak/Docs/eas/Screenshot_2021-04-08_at_10.43.09_RcTiI1XL8.png"
        :onChange="() => selectedBackground = null"
    />
    </div>
</div>

<div class="selection-box text-align">
    <div class="section-title">
        <h3>Vypnutí animací</h3>
        <Tooltip 
            img="https://ik.imagekit.io/alexborecky/shoptetak/Docs/eas/ezgif.com-gif-maker__2__AGQGav4UK.gif"
            content="Výchozí nastavení Nefritu je s animacemi textů. Tento pohyb dodává webu dynamiku a interakce s ním je tak zábavnější. Může se ale stát, že tyto animace budou uživatele rozptylovat, a proto jsme přidali možnost je vypnout."
            msgType="Upozornění"
            msg="Toto nastavení se promítne na všech bannerech na hlavní straně"
        />
    </div>
    <div class="options">
    <Selection 
        v-for="animation in animations" :key="animation.title"
        :name="animation.name"
        :id="animation.id"
        :value="animation.value"
        :forID="animation.id"
        :title="animation.title"
        :onChange="() => selectedAnimation = animation"
        :img="animation.img"
    />
    <DefaultButton
        title="S animacemi"
        name="radio-animation"
        id="defaultAnimation"
        forID="defaultAnimation"
        img="https://ik.imagekit.io/alexborecky/shoptetak/Docs/eas/animation_n-_MzCPAZ.svg"
        :onChange="() => selectedAnimation = null"
    />
    </div>
</div>

<div class="selection-box text-align">
    <div class="section-title">
        <h3>Počet viditelných variant</h3>
        <Tooltip 
            img="https://ik.imagekit.io/alexborecky/shoptetak/Docs/eas/variants_UnPfGSbwy.png"
            content="Shoptet umožňuje zobrazovat varianty produktů ve výpisu kategorií. Toto nastavení jsme obohatili o neomezené množství variant, které můžete na svém e-shopu zobrazovat."
            msgType="Upozornění"
            msg="Velké množství zobrazených variant bude působit neesteticky a z toho důvodu doporučujeme zobrazovat max. 6 variant"
        />
    </div>
    <div class="options">
    <input 
        type="number" 
        min="1"
        placeholder="Zadejte pouze čísla"
        v-model="selectedVariant"
        :onChange="() => selectedVariant = variant"/>
    </div>
</div>

## Váš kód

<pre>
    <code>
    <span class="punct">&lt;</span><span class="tag">script</span><span class="punct">></span>
    <span v-if="selectedOption">
        <br><span class="reg">{{selectedOption && selectedOption.value}}</span>
    </span>
    <span v-if="selectedBackground">
        <br><span class="reg">{{selectedBackground && selectedBackground.value}}</span>
    </span>
    <span v-if="selectedAnimation">
        <br><span class="reg">{{selectedAnimation && selectedAnimation.value}}</span>
    </span>
    <span v-if="selectedVariant !== ''">
        <br><span class="reg">var productsVariantsCount = {{selectedVariant}};</span>
    </span>
        <br><span class="punct">&lt;/</span><span class="tag">script</span><span class="punct">></span>
    </code>
</pre>

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

<style lang="scss" scoped>

.punct {
    color: #89ddff!important;
}

.selection-box {
    margin: 40px 0;
    .options {
        display: flex
    }
    .section-title {
        display: flex;
    }
}

input {
    height: 40px;
    border: solid 2px rgba($color: black, $alpha: .2);
    border-radius: 5px;
    &[type=number] {
        width: 240px;
        padding-left: 16px;
        font-weight: 600;
    }
}

pre {
    margin: 24px 0;
    background-color: #2f495e;
    white-space: nowrap;
    overflow: auto;
    margin: 0;
    border-radius: 5px;
    code {
        .wrapper {
            margin-left: 24px;
        }
    }
}

</style>