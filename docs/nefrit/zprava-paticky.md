# Zpráva v patičce

Nefrit disponuje bohatou patičkou a jednou z jejích součástí je i vlastní text, který je nyní možné přidat. Postup nalezente níže.

![An image](https://ik.imagekit.io/alexborecky/shoptetak/Docs/Nefrit/zprava_zP-qVcwlph.png)


## Vytvoření banneru

Banner je nejdříve potřeba vytvořit a poté vložit do patičky. Začněte tedy jeho vytvořením.

#### 1. Administrace Shoptetu

Nejdříve se podíváme do sekce administrace Shoptetu, se kterou budeme pracovat. Tu najdeme následovně:

<Box-TextBox 
    :msg="banner"
/>

#### 2. Přidání banneru

V této sekci vytvoříme nový banner s názvem např.: `Máte nápad`. 

#### 3. Přidání kódu

Ujistěte se, že Typ banneru je nastavený na `Textový banner` a je viditelný jak na desktopu, tak na telefonu. Poté stačí vložit kód níže do textového pole banneru. Kód obsahuje textovou část a tlačítko. Pokud chcete, aby obsahoval pouze text, stačí smazat řádek `3`. Pokud chcete pouze button, stačí smazat řádek `2`

```html{2,3}
<div class="napad">
    <h3>Máte nápad na zlepšení, nebo jakýkoliv dotaz? Neváhejte nás kontaktovat!</h3>
    <a href="mailto:info@shoptetak.cz" class="button">Kontakt</a>
</div>
```

:::warning
Pro vyplnění banneru použijte náš [generátor kódu](/generator/)!
:::

## Přidání banneru do patičky

Nyní můžeme platební metody zadat do patičky Shoptetu.

#### 1. Administrace Shoptetu

V administraci Shoptetu přejděte do sekce níže:

<Box-TextBox 
    :msg="prvky"
/>

#### 2. Přidání prvku do patičky

Vyhledejte banner s názvem, který jste vytvořili (v našem případě "Máte nápad") a přetáhněte jej do patičky.

![An image](https://ik.imagekit.io/alexborecky/shoptetak/Docs/Nefrit/Screenshot_2021-04-12_at_12.48.34_cHCZZrcPI.png)


#### 3. Uložení

Po uložení a refreshi e-shopu se platební metody zobrazí v patičce.

<script>
export default {
    data () {
        return {
            banner: 'Administrace > VZHLED A OBSAH > Bannery > Bannery',
            prvky: 'Administrace > VZHLED A OBSAH > Šablony > Prvky'
        }
    }
}
</script>