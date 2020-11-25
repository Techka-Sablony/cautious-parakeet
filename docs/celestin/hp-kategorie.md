# Kategorie na hlavní straně

Celestin obsahuje výpis kategorií na hlavní straně. Ty je samozřejmě možné nepřidávat, nicméně vřele doporučujeme jejich nastavení. Můžete tak oživit svojí hlavní stranu a přidat možnost navigace na sekce, které jsou pro vás důležité.

![An image](https://ik.imagekit.io/alexborecky/shoptetak/Doplnky/Celestin/categories_xrupxS6Vl.png)

## Administrace Shoptetu

Důležité je nalézt sekci administraci, ve které budeme nastavovat kategorie hlavní strany.

<Box-TextBox 
    :msg="msg"
/>

## Přidání rubriky
Jakmile se dostaneme do kategorie článku, musime přidat novou rubriku a pojemnovat ji HP Kategorie

![An image](https://ik.imagekit.io/alexborecky/shoptetak/Doplnky/Celestin/category_Dr94D3topV8z.png)

:::danger 
Je důležité, aby rubrika byla pojmenováná HP Kategorie pro správné fungování navigace.
:::

## Přidání článku (kategorie)
V nově vytvořené kategorii můžeme přidat článek. Jeho pojmenování bude stejné, jako jméno kategorie, která bude zobrazena na hlavní straně.

## Nastavení článku (kategorie)
Pro správné fungování je opět nutné mít nastavení tak, jak jej vidíte na obrázku níže.

![An image](https://ik.imagekit.io/alexborecky/shoptetak/Doplnky/Celestin/article_XGDwu1-fv.png)

#### Název 
Odpovídá názvu kategorie, která bude na hlavní stránce e-shopu.
#### Rubrika 
Musí být nastavená tak, aby článek patřil do zmíněné HP Kategorie
#### URL adresa
Nyní nastavuje směřování kategorie uvnitř našeho e-shopu. Název můžeme nechat tak, jak je.
#### Externí URL 
Adresa, kterou vyplňujeme sami, a která bude směřovat na danou kategorii. Tzn., musíme zkopírovat URL kategorie produktů našeho e-shopu a přiřadit ji do tohoto pole.
#### Obrázek
Ten, který se opět bude objevovat na hlavní straně a můžeme jej nahrát z našho počítače.

:::danger 
Je opravdu podstatné, aby tyto kroky byly dodrženy. Pouze tak bude možné přidat kategorie správně. Ujistěte se také, že jsou vaše články v rubrice viditelné.
:::

:::warning
Další kategorie přidáte opakováním tohoto procesu.
:::

<script>
export default {
    data () {
        return {
            msg: 'VZHLED A OBSAH > Články'
        }
    }
}
</script>