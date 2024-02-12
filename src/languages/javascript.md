# JavaScript <Badge type="tip" text="JS" />

![logoJS](../images/JavaScript-logo.png)

**JavaScript is a programming language mainly used to make web \
pages interactive. It enables dynamic content such as animations, \
interactive forms, real-time updates, etc. to be added to websites.**


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemple JavaScript</title>
</head>
<body>

<button id="monBouton">Cliquez-moi</button>

<!-- Script JavaScript -->
<script>
    // Sélectionner le bouton par son ID
    var bouton = document.getElementById("monBouton");

    
    bouton.addEventListener("click", function() {
        
        alert("Bonjour ! Vous avez cliqué sur le bouton.");
    });
</script>

</body>
</html>
```

**We can copy this code into an HTML file and open it in our\
browser to see how it works. This illustrates the basic\
principle of event handling in JavaScript.**


[Grade-View-JS](../projects/Grade-View-JS.md)