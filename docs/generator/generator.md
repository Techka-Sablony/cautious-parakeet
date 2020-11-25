# Bannery

Následující kódy budeme přidávat do následujících sekcí

<Box-TextBox
    :msg="msgOne"
/>

nebo 

<Box-TextBox
    :msg="msgTwo"
/>


Detailní postup k nastavení Carouselu naleznete v sekci [Nastavení carouselu](/opal/nastaveni-carouselu/) a nastavení bannerů pak v [Nastavení bannerů](/opal/nastaveni-banneru/)

#### Typy bannerů

[[toc]]


## Carousel 🌆
Následující generátor vám pomůže ve vytvoření kódu pro Carousel šablony [Opal](/opal/).

<div class="input-field flex column">
    <label for="">Adresa obrázku</label>
    <input type="text" placeholder="Text tlačítka" v-model="url">
</div>
<div class="input-field flex column">
    <label for="">Nadpis banneru</label>
    <input type="text" placeholder="Text tlačítka" v-model="title">
</div>
<div class="input-field flex column">
    <label for="">Popisek banneru</label>
    <input type="text" placeholder="Text tlačítka" v-model="description">
</div>
<div class="input-field flex column">
    <label for="">URL tlačítka</label>
    <input type="text" placeholder="Text tlačítka" v-model="buttonUrl">
</div>
<div class="input-field flex column">
    <label for="">Text tlačítka</label>
    <input type="text" placeholder="Text tlačítka" v-model="buttonText">
</div>
<pre>
    <code class="lowered-code">
        <div class="lowered-code">
            &lt;div  class="carousel-slide-box"> <br>
                <div class="wrapper lowered-code">
                    &lt;img src="<span class="white">{{url}}</span>"> <br>
                        <div class="wrapper lowered-code">
                            &lt;div class="carousel-slide-caption"> <br>
                             <div class="wrapper lowered-code">
                                    &lt;h2><span class="white">{{title}}</span>&lt;/h2> <br>
                                    &lt;p><span class="white">{{description}}</span>&lt;/p> <br>
                                </div>
                                &lt;a href="<span class="white">{{buttonUrl}}</span>" class="button"><span class="white">{{buttonText}}</span>&lt;/a> <br>
                            </div>
                    &lt;/div> <br>
                </div>
            &lt;/div>
        </div>
    </code>
</pre>

## Vrchní bannery 👆
Následující generátor vám pomůže ve vytvoření kódu pro top bannery šablony [Opal](/opal/).

<div class="input-field flex column">
    <label for="">Adresa obrázku</label>
    <input type="text" placeholder="Text tlačítka" v-model="url">
</div>
<div class="input-field flex column">
    <label for="">Nadpis banneru</label>
    <input type="text" placeholder="Text tlačítka" v-model="title">
</div>
<div class="input-field flex column">
    <label for="">Popisek banneru</label>
    <input type="text" placeholder="Text tlačítka" v-model="description">
</div>
<div class="input-field flex column">
    <label for="">URL tlačítka</label>
    <input type="text" placeholder="Text tlačítka" v-model="buttonUrl">
</div>
<div class="input-field flex column">
    <label for="">Text tlačítka</label>
    <input type="text" placeholder="Text tlačítka" v-model="buttonText">
</div>
<pre>
    <code class="lowered-code">
        <div class="lowered-code">
            &lt;div  class="custom-banner"> <br>
                <div class="wrapper lowered-code">
                    &lt;img src="<span class="white">{{url}}</span>"> <br>
                        <div class="wrapper lowered-code">
                            &lt;div class="banner-caption"> <br>
                             <div class="wrapper lowered-code">
                                    &lt;h3><span class="white">{{title}}</span>&lt;/h3> <br>
                                    &lt;p><span class="white">{{description}}</span>&lt;/p> <br>
                                </div>
                                &lt;a href="<span class="white">{{buttonUrl}}</span>" class="button"><span class="white">{{buttonText}}</span>&lt;/a> <br>
                            </div>
                    &lt;/div> <br>
                </div>
            &lt;/div>
        </div>
    </code>
</pre>

## Středový banner 👈
Následující generátor vám pomůže ve vytvoření kódu pro středové bannery šablony [Opal](/opal/).

<div class="input-field flex column">
    <label for="">Adresa obrázku</label>
    <input type="text" placeholder="Text tlačítka" v-model="url">
</div>
<div class="input-field flex column">
    <label for="">Nadpis banneru</label>
    <input type="text" placeholder="Text tlačítka" v-model="title">
</div>
<div class="input-field flex column">
    <label for="">Popisek banneru</label>
    <input type="text" placeholder="Text tlačítka" v-model="description">
</div>
<div class="input-field flex column">
    <label for="">URL tlačítka</label>
    <input type="text" placeholder="Text tlačítka" v-model="buttonUrl">
</div>
<div class="input-field flex column">
    <label for="">Text tlačítka</label>
    <input type="text" placeholder="Text tlačítka" v-model="buttonText">
</div>
<pre>
    <code class="lowered-code">
        <div class="lowered-code">
            &lt;div  class="hp-middle-banner"> <br>
                <div class="wrapper lowered-code">
                    &lt;img src="<span class="white">{{url}}</span>"> <br>
                        <div class="wrapper lowered-code">
                            &lt;div class="banner-caption"> <br>
                             <div class="wrapper lowered-code">
                                    &lt;h2><span class="white">{{title}}</span>&lt;/h2> <br>
                                    &lt;p><span class="white">{{description}}</span>&lt;/p> <br>
                                </div>
                                &lt;a href="<span class="white">{{buttonUrl}}</span>" class="button"><span class="white">{{buttonText}}</span>&lt;/a> <br>
                            </div>
                    &lt;/div> <br>
                </div>
            &lt;/div>
        </div>
    </code>
</pre>

## Spodní banner 👇
Následující generátor vám pomůže ve vytvoření kódu pro spodní bannery šablony [Opal](/opal/).

<div class="input-field flex column">
    <label for="">Adresa obrázku</label>
    <input type="text" placeholder="Text tlačítka" v-model="url">
</div>
<div class="input-field flex column">
    <label for="">Nadpis banneru</label>
    <input type="text" placeholder="Text tlačítka" v-model="title">
</div>
<div class="input-field flex column">
    <label for="">Popisek banneru</label>
    <input type="text" placeholder="Text tlačítka" v-model="description">
</div>
<div class="input-field flex column">
    <label for="">URL tlačítka</label>
    <input type="text" placeholder="Text tlačítka" v-model="buttonUrl">
</div>
<div class="input-field flex column">
    <label for="">Text tlačítka</label>
    <input type="text" placeholder="Text tlačítka" v-model="buttonText">
</div>
<pre>
    <code class="lowered-code">
        <div class="lowered-code">
            &lt;div  class="hp-bottom-banner"> <br>
                <div class="wrapper lowered-code">
                    &lt;img src="<span class="white">{{url}}</span>"> <br>
                        <div class="wrapper lowered-code">
                            &lt;div class="banner-caption"> <br>
                             <div class="wrapper lowered-code">
                                    &lt;h2><span class="white">{{title}}</span>&lt;/h2> <br>
                                    &lt;p><span class="white">{{description}}</span>&lt;/p> <br>
                                </div>
                                &lt;a href="<span class="white">{{buttonUrl}}</span>" class="button"><span class="white">{{buttonText}}</span>&lt;/a> <br>
                            </div>
                    &lt;/div> <br>
                </div>
            &lt;/div>
        </div>
    </code>
</pre>



<script>
export default {
    data () {
        return {
            url: 'https://shoptet.tomashlad.eu/user/documents/extras/opal/img/banner1.png',
            title: 'Nahradíme nadpisem',
            description: 'Nahradíme popiskem',
            buttonUrl: '#',
            buttonText: 'Kliknutí na odkaz',
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
    &[type=text] {
        padding-left: 16px;
        font-weight: 600;
    }
}

label {
    font-size: 12px !important;
    margin: 8px 0;
}

.input-field {
    margin-top: 16px;
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