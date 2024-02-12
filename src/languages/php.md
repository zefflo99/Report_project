# HyperText Preprocessor <Badge type="tip" text="PHP" />

![Php-logo](../images/php-logo.png)



## PHP Introduction
PHP est un langage de script côté serveur conçu pour le 
développement web, mais également utilisé comme langage de 
programmation général. Le code PHP est généralement traité sur 
un serveur web par un interpréteur PHP implémenté sous forme de 
module, de démon ou d'exécutable CGI (Common Gateway Interface). 
Sur un serveur web, le résultat de l'interprétation et de l'exécution 
du code PHP, qui peut être n'importe quel type de données, comme du 
HTML généré ou des données d'images binaires, constitue tout ou partie d'une 
réponse HTTP. Il existe différents systèmes de modèles web, de gestion de contenu web
et de cadres web qui peuvent être utilisés pour orchestrer ou faciliter la génération 
de cette réponse. En outre, PHP peut être utilisé pour de nombreuses tâches de 
programmation en dehors du contexte web, telles que les applications 
graphiques autonomes et le contrôle de drones robotisés.


## PHP Syntaxe
La syntaxe PHP est basée sur celle du langage C, et comprend de nombreuses
fonctions spécifiques à la gestion des variables, des tableaux et des chaînes de caractères.
Les blocs de code PHP sont délimités par des balises spéciales, qui permettent de passer 
du mode HTML au mode PHP. Les balises les plus couramment utilisées sont `<?php` et `?>`,
qui permettent d'ouvrir et de fermer un bloc de code PHP.


## Variables PHP

```php
<?php
    $txt = "Hello world!";
    $x = 5;
    $y = 10.5;
?>
```

## PHP Fonctions
```php
<?php
    function writeMsg() {
        echo "Hello world!";
    }
    writeMsg(); // call the function
?>
```

## PHP Conditions
```php
<?php
    $t = date("H");

    if ($t < "20") {
        echo "Have a good day!";
    }
?>
```


## PHP Loops
```php
<?php
    $x = 1;

    while($x <= 5) {
        echo "The number is: $x <br>";
        $x++;
    }
?>
```

### Todo-list
- [Todo-list with PHP](../projects/Todo-list-php.md)




