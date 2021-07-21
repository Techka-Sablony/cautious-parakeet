# Bannery

Nastavení banneru Nefritu je pouze jedno, a to [zprávy v patičce](/nefrit/zprava-paticky/). I tak jsme pro vás připravili krátký generátor, který vám usnadní toto nastavení.


## Zpráva v patičce
Následující generátor vám pomůže ve vytvoření kódu [zprávy v patičce](/nefrit/zprava-paticky/) šablony [Nefrit](/nefrit/).

<div class="input-field flex column">
    <label for="">Zpráva patičky</label>
    <input type="text" placeholder="Jaká bude zpráva patčiky?" v-model="zprava" >
</div>
<div class="input-field flex column">
    <label for="">Text tlačítka</label>
    <input type="text" placeholder="Co bude v tlačítku napsáno?" v-model="buttonText">
</div>
<div class="input-field flex column">
    <label for="">Odkaz tlačítka</label>
    <input type="text" placeholder="Kam bude tlačítko směřovat?" v-model="buttonUrl">
</div>
<pre>
    <code class="lowered-code">
        <div class="lowered-code">
            &lt;div  class="napad">
                         <div class="wrapper lowered-code"> <div v-if="zprava !== ''">&lt;h3><span class="white">{{zprava}}</span>&lt;/h3></div>
                         <div v-if="buttonText !== ''">   
                            &lt;a href="<span class="white">{{buttonUrl}}</span>" class="button"><span class="white">{{buttonText}}</span>&lt;/a> <br> </div>
                        </div>
                    &lt;/div> <br>
                </div>
        </div>
    </code>
</pre>



<script>
export default {
    data () {
        return {
            url: 'https://shoptet.tomashlad.eu/user/documents/extras/opal/img/banner1.png',
            zprava: '',
            description: '',
            buttonUrl: '',
            buttonText: '',
            message: 'Hello there',
            msgOne: 'VZHLED A OBSAH > Bannery > Doplňkové bannery',
            msgTwo: 'VZHLED A OBSAH > Bannery > Carousel',
        }
    }
}
</script>

<style lang="scss" scoped>

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

.first-layer {
    margin: 0;
}
.second-layer {
    margin: 0 24px;
}

.third-layer {
    margin: 0 48px;
}

.fourth-layer {
    margin: 0 72px;
}

input {
    width: 100%;
    height: 40px;
    border: solid 2px rgba($color: black, $alpha: .2);
    border-radius: 5px;
    margin-top: 4px;
    &[type=text] {
        padding-left: 16px;
        font-weight: 600;
    }
}

.input-field {
    margin-top: 16px;
    label {
        font-size: 12px !important;
        font-weight: 600;
    }
}

.lowered-code {
    color: rgba($color: white, $alpha: .4);
}

.white {
    opacity: 1;
}

.white {
    color: white;
}

</style>