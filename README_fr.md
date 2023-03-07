# React Component

![Author](<https://img.shields.io/badge/Auteur-Virginie G-initial>)

Composant menu déroulant React.

[Version anglaise](README.md)


## Sommaire

- [Prérequis](#prérequis)
- [Propriétés](#propriétés)
- [`dropdown-menu-component`](#dropdown-menu-component)
- [Exemple](#exemple)

---

### Prérequis

- Un EDI comme `VSCode, Vim, IntelliJ...`
- [Node.js > v.18](https://nodejs.org/fr/)
- [Git](https://git-scm.com/)


### Propriétés

**Toutes les propriétés avec un * sont requises** :

### `dropdown-menu-component`

- `id` *: {String} Le `htmlFor` du label et l'`id` du span qui contient l'option sélectionnée
- `label` *: {String} Le texte contenu dans le `label`
- `dataOptions` *: {Array} Le tableau contenant la liste des options
- `error` *: {String} Le texte de l'erreur quand on soumet le formulaire sans aucun choix
- `onUpdate` *: {Function} L'action à effectuer quand une option est sélectionnée

---

[*Sommaire*](#Sommaire)

---

### Exemple

Nous prenon l'exemple d'un sélecteur d'états aux États-Unis :

```javascript
import React from "react";
import { DropdownMenu } from "dropdown-menu-component";

const MyForm = () => {
    const dataDropdown = [
        {
            id: "state",
            label: "State"
        }
    ];

    const states = [
        {
            name: "Alabama",
            abbreviation: "AL"
        },
        {
            name: "Alaska",
            abbreviation: "AK"
        },
        {
            name: "American Samoa",
            abbreviation: "AS"
        },
        // Ajouter autant d'états que nécessaire
    ];

    const errorText = "Please select a state";

    const handleState = (newValue, newAbbreviation) => {
        console.log(newValue, newAbbreviation);
        // Faites ce que vous voulez avec newValue et NewAbbreviation
    };

    return(
        <div>
            <form>
                <DropdownMenu
                    id={dataDropdown.id}
                    label={dataDropdown.label}
                    dataOptions={states}
                    error={errorText}
                    onUpdate={handleState}
                />

                <Button type="submit">Save</Button>
            </form>
        </div>
    )
}
```

---

[*Sommaire*](#Sommaire)

---