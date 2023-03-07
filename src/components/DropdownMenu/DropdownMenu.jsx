import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './DropdownMenu.css';

function DropdownMenu(props) {
    const { id, label, dataOptions, error, onUpdate } = props;
    const defaultOption = `Choose ${label}`;

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = (value, abbreviation) => {
        setSelectedOption(value);
        onUpdate(value, abbreviation);
        setIsOpen(false);
    };

    /**
     * If the user clicks outside of the element, then set the state to false.
     * @param {*} ref 
     */
    const useOutsideAlert = (ref) => {
        useEffect(() => {
            /**
             * If the user clicks outside of the dropdown menu, then close the dropdown menu
             */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setIsOpen(false)
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const wrapperRef = useRef(null);
    useOutsideAlert(wrapperRef);

    return (
        <div className={isOpen ? 'custom-select open' : 'custom-select'} ref={wrapperRef}>
            <label htmlFor={id}>{label}</label>
            <div className={isOpen ? 'choice-button open' : 'choice-button'} id={`choice-button-${id}`} onClick={() => toggling()}>
                <span id={id}>{selectedOption || defaultOption}</span>
                <span className="fa-solid fa-angle-down select-arrow"></span>
            </div>
            {isOpen && (
                <ul className='dropdown-list'>
                    {
                        dataOptions.map((dataOption, index) => {
                            return (
                                <li className="list-item" onClick={() => onOptionClicked(dataOption.name, dataOption.abbreviation)} key={index}>
                                    {dataOption.name}
                                </li>
                            )
                        })
                    }
                </ul>
            )}
            <p className='error-text'>{error}</p>
        </div>
    )
};

DropdownMenu.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    dataOptions: PropTypes.array
};

export default DropdownMenu;