"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./DropdownMenu.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
  return /*#__PURE__*/_react.default.createElement("div", {
    className: isOpen ? 'custom-select open' : 'custom-select',
    ref: wrapperRef
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: id
  }, label), /*#__PURE__*/_react.default.createElement("div", {
    className: isOpen ? 'choice-button open' : 'choice-button',
    id: "choice-button-".concat(id),
    onClick: () => toggling()
  }, /*#__PURE__*/_react.default.createElement("span", {
    id: id
  }, selectedOption || defaultOption), /*#__PURE__*/_react.default.createElement("span", {
    className: "fa-solid fa-angle-down select-arrow"
  })), isOpen && /*#__PURE__*/_react.default.createElement("ul", {
    className: "dropdown-list"
  }, dataOptions.map((dataOption, index) => {
    return /*#__PURE__*/_react.default.createElement("li", {
      className: "list-item",
      onClick: () => onOptionClicked(dataOption.name, dataOption.abbreviation),
      key: index
    }, dataOption.name);
  })), /*#__PURE__*/_react.default.createElement("p", {
    className: "error-text"
  }, error));
}
;
DropdownMenu.propTypes = {
  id: _propTypes.default.string,
  label: _propTypes.default.string,
  dataOptions: _propTypes.default.array,
  error: _propTypes.default.string,
  onUpdate: _propTypes.default.func
};
var _default = DropdownMenu;
exports.default = _default;