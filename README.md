# React Component

![Author](<https://img.shields.io/badge/Author-Virginie G-initial>)

React dropdown menu component.

**This is an OpenClassrooms project, not intended to be maintained over time!**

[French version](README_fr.md)


## Summary

- [Prerequisites](#prerequisites)
- [Properties](#properties)
- [`dropdown-menu-component`](#dropdown-menu-component)
- [Example](#example)

---

### Prerequisites

- An IDE like `VSCode, Vim, IntelliJ...`
- [Node.js > v.18](https://nodejs.org/en/)
- [Git](https://git-scm.com/)


### Properties

**All properties with a * are required** :

### `dropdown-menu-component`

- `id` *: {String} `htmlFor` label and the `id` span that contains selected option
- `label` *: {String} `label` text content
- `dataOptions` *: {Array} Options' list array
- `error` *: {String} Error text when submit form without any choice
- `onUpdate` *: {Function} Action to do when an option is selected

---

[*to summary*](#summary)

---

### Example

We take the example of a US state selector :

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
        // Add as many states as necessary
    ];

    const errorText = "Please select a state";

    const handleState = (newValue, newAbbreviation) => {
        console.log(newValue, newAbbreviation);
        // Do what you want with newValue and newAbbreviation
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

[*to summary*](#summary)

---