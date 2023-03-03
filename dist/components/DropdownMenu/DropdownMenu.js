"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _propTypes = require("prop-types");
var _react = require("react");
require("./DropdownMenu.css");
function DropdownMenu(props) {
  const {
    id,
    label,
    dataOptions,
    error,
    onUpdate
  } = props;
  const defaultOption = "Choose ".concat(label);
  const [isOpen, setIsOpen] = (0, _react.useState)(false);
  const [selectedOption, setSelectedOption] = (0, _react.useState)(null);
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
  const useOutsideAlert = ref => {
    (0, _react.useEffect)(() => {
      /**
       * If the user clicks outside of the dropdown menu, then close the dropdown menu
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsOpen(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };
  const wrapperRef = (0, _react.useRef)(null);
  useOutsideAlert(wrapperRef);
  return /*#__PURE__*/React.createElement("div", {
    className: isOpen ? 'custom-select open' : 'custom-select',
    ref: wrapperRef
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: id
  }, label), /*#__PURE__*/React.createElement("div", {
    className: isOpen ? 'choice-button open' : 'choice-button',
    id: "choice-button-".concat(id),
    onClick: () => toggling()
  }, /*#__PURE__*/React.createElement("span", {
    id: id
  }, selectedOption || defaultOption), /*#__PURE__*/React.createElement("span", {
    className: "fa-solid fa-angle-down select-arrow"
  })), isOpen && /*#__PURE__*/React.createElement("ul", {
    className: "dropdown-list"
  }, dataOptions.map((dataOption, index) => {
    return /*#__PURE__*/React.createElement("li", {
      className: "list-item",
      onClick: () => onOptionClicked(dataOption.name, dataOption.abbreviation),
      key: index
    }, dataOption.name);
  })), /*#__PURE__*/React.createElement("p", {
    className: "error-text"
  }, error));
}
;
DropdownMenu.propTypes = {
  id: _propTypes.PropTypes.string,
  label: _propTypes.PropTypes.string,
  dataOptions: _propTypes.PropTypes.array
};
var _default = DropdownMenu;
exports.default = _default;