import { useState } from "react";
import { DropdownMenu } from "./lib/components/DropdownMenu";

function App() {
    const [state, setState] = useState('');
    const [errors, setErrors] = useState({});

    /**
     * \p{L} : Unicode character class that corresponds to all letters of all languages.
     * The u option at the end of the regex indicates that the regular expression uses Unicode characters.
     * \-' : Corresponds to hyphens, apostrophes.
     */
    const regexText = /^[\p{L}\-']+$/u;

    /**
     * [\w] : Corresponds to an alphanumeric character (letter or number). The \w is a shortcut for [a-zA-Z0-9_]
     */
    const regexStreet = /^[\w]+/;
    const regexZip = /^\d{1,5}$/;

    const validateInput = (value, regex, errorMessage) => {
        if (!value) {
            return errorMessage;
        }
        if (regex && !value.match(regex)) {
            return "Please enter a valid value";
        }
        return "";
    };

    const setErrorFunction = (newValue, newAbbreviation = null, stringKey, errorMessage, regex = null, settingFunction) => {
        const finalErrorMessage = validateInput(newValue, regex, errorMessage);
        setErrors((prevErrors) => ({ ...prevErrors, [stringKey]: finalErrorMessage }));
        if (!finalErrorMessage) {
            typeof settingFunction === "function" && settingFunction(newAbbreviation ?? newValue);
        }
    };

    const handleState = (newValue, newAbbreviation) => {
        setErrorFunction(newValue, newAbbreviation, "state", "Please choose state", null, setState);
    };

    const example = {
        id: "state",
        label: "State",
    };

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
        }
    ];

    return (
        <div className="app">
            <DropdownMenu id={example.id} label={example.label} dataOptions={states} error={errors[example.id]} onUpdate={handleState} />
        </div>
    )
}

export default App;