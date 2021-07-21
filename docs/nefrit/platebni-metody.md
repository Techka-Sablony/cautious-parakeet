# Banner platebních metod

Do patičky jsme umístili vlastní zobrazení platebních metod. Postup je stejný, jako u šablony [Opal](/opal/).

![An image](https://ik.imagekit.io/alexborecky/shoptetak/Docs/Nefrit/platby_XDP63OBCvp.png)

## Vytvoření banneru

Banner je nejdříve potřeba vytvořit a poté vložit do patičky. Začněte tedy jeho vytvořením.

#### 1. Administrace Shoptetu

Nejdříve se podíváme do sekce administrace Shoptetu, se kterou budeme pracovat. Tu najdeme následovně:

<Box-TextBox 
    :msg="banner"
/>

#### 2. Přidání banneru

V této sekci vytvoříme nový banner s názvem např.: `Online Platby`. 

#### 3. Přidání kódu

Ujistěte se, že Typ banneru je nastavený na `Textový banner` a je viditelný jak na desktopu, tak na telefonu. Poté stačí vložit kód níže do textového pole banneru.

```html
<div class="online-platby">
<img src="https://cdn.myshoptet.com/usr/shoptet.tomashlad.eu/user/documents/extras/opal/img/payments/visa.svg" />
<img src="https://cdn.myshoptet.com/usr/shoptet.tomashlad.eu/user/documents/extras/opal/img/payments/mastercard.svg" />
<img src="https://cdn.myshoptet.com/usr/shoptet.tomashlad.eu/user/documents/extras/opal/img/payments/paypal.svg" />
</div>
```

:::warning
Odkazy za tagem `src=` načítají obrázky platebních metod, které používáme na [ukázkové šabloně](https://nefrit.shoptetak.cz). Pokud byste chtěli jiné, je potřeba nahradit URL adresu v kódu.
:::

## Přidání banneru do patičky

Nyní můžeme platební metody zadat do patičky Shoptetu.

#### 1. Administrace Shoptetu

V administraci Shoptetu přejděte do sekce níže:

<Box-TextBox 
    :msg="prvky"
/>

#### 2. Přidání prvku do patičky

Vyhledejte banner s názvem, který jste vytvořili (v našem případě "Online platby") a přetáhněte jej do patičky.

![An image](https://ik.imagekit.io/alexborecky/shoptetak/Docs/Nefrit/Screenshot_2021-04-12_at_12.27.50_UsboXkKMWY.png)


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