webpackJsonp([201,202],{

/***/ 622:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["article", {}, ["h2", "2.4.3"], ["p", ["code", "2016-11-17"]], ["ul", ["li", ["p", "Fix errors in ", ["code", "Anchor"], " about querySelector, and make some experience Optimization .", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3832"
	  }, "#3832"], " ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3844"
	  }, "#3844"]]]], ["h2", "2.4.2"], ["p", ["code", "2016-11-13"]], ["ul", ["li", ["p", "Fix ", ["code", "Dropdown.Button"], " cannot popup menu.", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3815"
	  }, "#3815"]]]], ["h2", "2.4.1"], ["p", ["code", "2016-11-11"]], ["ul", ["li", ["p", "Fix ", ["code", "2.4.0"], " missing index files."]]], ["h2", "2.4.0"], ["p", ["code", "2016-11-11"]], ["ul", ["li", ["p", "Adjust components structure."]], ["li", ["p", "New ", ["a", {
	    "title": null,
	    "href": "https://ant.design/components/anchor"
	  }, "Anchor"], " Component."]], ["li", ["p", "Fix less variables ", ["code", "@font-size-base"], " and ", ["code", "@text-color"], ", add ", ["code", "@font-size-lg"], " ", ["code", "@text-color-secondary"], "."]], ["li", ["p", "Add new props ", ["code", "selectedKeys"], " for ", ["code", "Transfer"], " component ", "[#3729]", ". (", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3729"
	  }, "https://github.com/ant-design/ant-design/issues/3729"], ")"]], ["li", ["p", "Add ", ["code", "Tag"], " selected status."]], ["li", ["p", "Fix ", ["code", "Dropdown.Button"], " not support ", ["code", "visible"], " and ", ["code", "onVisibleChange"], ". ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3779"
	  }, "#3779"]]], ["li", ["p", "Fix ", ["code", "Now"], " button of ", ["code", "DatePicker[showTime]"], ". ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3748"
	  }, "#3748"]]], ["li", ["p", "Fix style of ", ["code", "Steps"], " in vertical mode. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3760"
	  }, "#3760"]]], ["li", ["p", "Fix style compatibility of ", ["code", "Spin"], " in IE10+.", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3755"
	  }, "#3755"]]], ["li", ["p", "Fix default style of ", ["code", "Carousel"], " component."]], ["li", ["p", "Fix focus logic of ", ["code", "Mention"], " component. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3801"
	  }, "#3801"]]], ["li", ["p", "Fix animate bug of ", ["code", "Progress"], " component. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3784"
	  }, "#3784"]]], ["li", ["p", "Fix focus bug of ", ["code", "Select"], " component. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3778"
	  }, "#3778"]]], ["li", ["p", "Fix ", ["code", "TimePicker"], " not support ", ["code", "format=\"HH\""], " bug. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3793"
	  }, "#3793"]]], ["li", ["p", "Improve performance of ", ["code", "Table"], " selection. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/pull/3757"
	  }, "#3757"]]], ["li", ["p", "Improve Carousel default UI style."]], ["li", ["p", "Improve style of ", ["code", "Checkbox"], " and ", ["code", "Radio"], ". ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3590"
	  }, "#3590"]]], ["li", ["p", "Fix style of DatePickek, Form, Table."]]], ["h2", "2.3.2"], ["p", ["code", "2016-11-09"]], ["ul", ["li", ["p", "Fix dead loop while using ", ["code", "getFieldProps"], "."]]], ["h2", "2.3.1"], ["p", ["code", "2016-11-07"]], ["ul", ["li", ["p", "Add missing ", ["code", "dist/antd.css"], " back."]]], ["h2", "2.3.0"], ["p", ["code", "2016-11-04"]], ["ul", ["li", ["p", "Upgrade normalize.css to 5.0."]], ["li", ["p", "Point main file to ", ["code", "lib/index.js"], " in package.json. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/pull/3397"
	  }, "#3397"]]], ["li", ["p", "A brand new ", ["code", "Spin"], " design."]], ["li", ["p", "Add ", ["code", "addon"], " for ", ["code", "TimePicker"], " to allow render some addon to its bottom."]], ["li", ["p", "Add ", ["code", "onDragEnd"], " for ", ["code", "Tree"], "."]], ["li", ["p", "Add ", ["code", "bordered"], " for ", ["code", "Collapse"], "."]], ["li", ["p", "Improve ", ["code", "Tabs"], " switch animation."]], ["li", ["p", "Improve ", ["code", "Radio"], " and ", ["code", "Checkbox"], " style when it's disabled and mouse hovered. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3590"
	  }, "#3590"]]], ["li", ["p", "Optimize ", ["code", "Transfer"], " performance.", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2860"
	  }, "#2860"]]], ["li", ["p", "Fix nested ", ["code", "Popover"], " style issue. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3448"
	  }, "#3448"]]], ["li", ["p", "Fix issue resulting in server side render ", ["code", "Transfer"], " failed. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3686"
	  }, "#3686"]]], ["li", ["p", "Fix issue resulting in preview image not display when ", ["code", "Upload"], " in ", ["code", "picture-card"], " mode. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/pull/3706"
	  }, "#3706"], " ", ["a", {
	    "title": null,
	    "href": "https://github.com/denzw"
	  }, "@denzw"]]], ["li", ["p", "DatePicker"], ["ul", ["li", ["p", ["code", "onChange"], " will be triggered when ", ["code", "DatePicker"], " in ", ["code", "showTime"], " mode on blur now."]], ["li", ["p", "Add ", ["code", "monthCellContentRender"], " and ", ["code", "cellContentRender"], " for ", ["code", "MonthPicker"], "."]], ["li", ["p", ["code", "Rangepicker"], " can input time manually now.", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3718"
	  }, "#3718"]]], ["li", ["p", "Add czech locale/translations."]]]], ["li", ["p", "Badge"], ["ul", ["li", ["p", "Improve number over 99 displaying when mouse hovering. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3645"
	  }, "#3645"]]], ["li", ["p", "Fix moving animation when using ", ["code", "Badge"], " alone. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3709"
	  }, "#3709"]]]]], ["li", ["p", "Mention"], ["ul", ["li", ["p", "Fix issue resulting in ", ["code", "Mention"], " will be covered by ", ["code", "Table"], ". ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3588"
	  }, "#3588"]]], ["li", ["p", "Add ", ["code", "getSuggestionContainer"], " to allow specify container. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/pull/3658"
	  }, "#3658"]]]]], ["li", ["p", "Tag"], ["ul", ["li", ["p", "Deprecate ", ["code", "color"], ". ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3560"
	  }, "#3560"]]], ["li", ["p", "Add ", ["code", "type"], ". ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3560"
	  }, "#3560"]]], ["li", ["p", "Add ", ["code", "checkable"], ". ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3560"
	  }, "#3560"]]]]], ["li", ["p", "Radio.Group"], ["ul", ["li", ["p", "Add ", ["code", "className"], "。"]], ["li", ["p", ["code", "null"], " or ", ["code", "undefined"], " ", ["code", "children"], " will be ignored."]]]], ["li", ["p", "Select"], ["ul", ["li", ["p", "Add ", ["code", "tokenSeparators"], " to support automatic tokenization。", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2071"
	  }, "#2071"]]], ["li", ["p", "Add ", ["code", "onFocus"], " callback. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3587"
	  }, "#3587"]]], ["li", ["p", "Fix issue resulting in Select can't display correct selected item text in ", ["code", "combobox"], " mode. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3401"
	  }, "#3401"]]]]]], ["h2", "2.2.1"], ["p", ["code", "2016-11-02"]], ["ul", ["li", ["p", "Fix controlled DatePicker", "[showtime]", " not working bug. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3665"
	  }, "#3665"]]]], ["h2", "2.2.0"], ["p", ["code", "2016-10-28"]], ["ul", ["li", ["p", "Supports TypeScript@2.0. ", ["a", {
	    "title": null,
	    "href": "https://github.com/AlbertZheng"
	  }, "@AlbertZheng"], " ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3358"
	  }, "#3358"]]], ["li", ["p", "Not rely on specific version of React now. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/pull/3627"
	  }, "#3627"]]], ["li", ["p", "Alert supports ", ["code", "className"], " ", ["code", "style"], "."]], ["li", ["p", "DatePicker & MonthPicker & RangePicker allow developers to set whether to show the clear button. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3618"
	  }, "#3618"]]], ["li", ["p", "Form.Item can generate ", ["code", "validateStatus"], " & ", ["code", "help"], " for nested form control automatically. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3212"
	  }, "#3212"]]], ["li", ["p", "RangePicker can set some hours or minutes or seconds to be not selectable. ", ["a", {
	    "title": null,
	    "href": "https://ant.design/components/date-picker/#components-date-picker-demo-disabled-date"
	  }, "#"]]], ["li", ["p", "Switch"], ["ul", ["li", ["p", "The width of Switch will resize automatically, according to ", ["code", "checkedChildren/unCheckedChildren"], ". ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3380"
	  }, "#3380"]]], ["li", ["p", "Improve the switch animation."]]]], ["li", ["p", "Upload can ", ["a", {
	    "title": null,
	    "href": "https://github.com/react-component/upload#customrequest"
	  }, "customized request"], " now. ", ["a", {
	    "title": null,
	    "href": "https://github.com/edgji"
	  }, "@edgji"]]], ["li", ["p", "Icon"], ["ul", ["li", ["p", "New icons ", ["code", "bulb"], " ", ["code", "select"], " ", ["code", "like-o"], " ", ["code", "dislike-o"], "."]], ["li", ["p", "Adjust existing icons ", ["code", "loading"], " ", ["code", "like"], " ", ["code", "dislike"], "."]]]], ["li", ["p", "Improve the TypeScript definition of Card & DatePicker & Icon & Table. ", ["a", {
	    "title": null,
	    "href": "https://github.com/infeng"
	  }, "@infeng"], " ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/pull/3468"
	  }, "3468"], " ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/pull/3603"
	  }, "#3603"], " ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/pull/3531"
	  }, "#3531"]]], ["li", ["p", "Fix Cascader ", ["code", "defaultValue"], " should work. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3470"
	  }, "#3470"]]], ["li", ["p", "Fix the alignment of Button & Input & DatePicker & Select. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3481"
	  }, "#3481"]]], ["li", ["p", "DatePicker"], ["ul", ["li", ["p", "Fix wrong timing of triggering ", ["code", "onChange"], " while ", ["code", "DatePicker[showTime]"], " is set. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3523"
	  }, "#3523"]]]]], ["li", ["p", "Fix ", ["code", "Dropdown.Button[disabled]"], " doesn't works for behaviour. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3535"
	  }, "#3535"]]], ["li", ["p", "Menu"], ["ul", ["li", ["p", "Fix errors in SSR, thanks to  ", ["a", {
	    "title": null,
	    "href": "https://github.com/xpcode"
	  }, "@xpcode"], " to find the solution. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2061"
	  }, "#2061"], " ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2406"
	  }, "#2406"], " ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3293"
	  }, "#3293"]]], ["li", ["p", "Fix children don't support ", ["code", "null"], ". ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3599"
	  }, "#3599"]]]]], ["li", ["p", "Fix loading status animation for message.", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3536"
	  }, "#3536"]]], ["li", ["p", "Form"], ["ul", ["li", ["p", "Fix style issue while using ", ["code", "Form[inline]"], " and ", ["code", "Input[addonBefore|addonAfter]"], " together. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3524"
	  }, "#3524"]]], ["li", ["p", "Fix style issue for Radio.Button in Form.Item."]], ["li", ["p", "Fix style issue for search button in Form.Item. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3630"
	  }, "#3630"]]], ["li", ["p", "Fix Form.Item should not treat no user input as validate success. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3613"
	  }, "#3613"]]]]], ["li", ["p", "Should not limit the min width of Popover while ", ["code", "Popover[title]"], " is not set."]], ["li", ["p", "Table"], ["ul", ["li", ["p", "Fix style of fixed header of Table while ", ["code", "dataSource"], " is empty.", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3567"
	  }, "#3567"]]], ["li", ["p", "Fix Table will overlap SubMenu while ", ["code", "dataSource"], " is empty. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3521"
	  }, "#3521"]]]]], ["li", ["p", "Tabs"], ["ul", ["li", ["p", "Height of header of ", ["code", "Tabs[type=\"card|editable-card\"]"], " should follow design."]], ["li", ["p", "Fix height of TabPane should follow height of its content. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3304"
	  }, "#3304"]]]]], ["li", ["p", "Fix style of ", ["code", "TreeSelect[showSearch]"], ". ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3520"
	  }, "#3520"]]]], ["h2", "2.1.0"], ["p", ["code", "2016-10-16"]], ["ul", ["li", ["p", "Supports spinning Icon."]], ["li", ["p", "Tabs's switch animation could be disabled now. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3324"
	  }, "#3324"]]], ["li", ["p", "Add Spanish localization for LocaleProvider. @Danjavia"]], ["li", ["p", "Update Russian localization for LocaleProvider. @plandem"]], ["li", ["p", "Add ", ["code", "onSelect"], " event for AutoComplete."]], ["li", ["p", "Improve style of Modal."]], ["li", ["p", "Improve animation of Tooltip."]], ["li", ["p", "Improve style of Transfer's buttons."]], ["li", ["p", "Improve style of Tree."]], ["li", ["p", "Fix some less variables."]], ["li", ["p", "Fix errors while import the whole antd in SSR."]], ["li", ["p", "Fix errors while render Affix and BackTop on server. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3283"
	  }, "#3283"], " ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3343"
	  }, "#3343"]]], ["li", ["p", "Fix conflicts between Cascader search mode and browser's autocomplete behaviour. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3350"
	  }, "#3350"]]], ["li", ["p", "Fix bug that ", ["code", "h3"], " cannot be the value of Card", "[title]", ". ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3388"
	  }, "#3388"]]], ["li", ["p", "DatePicker"], ["ul", ["li", ["p", "Fix bug that ", ["code", "onChange"], " will be trigger twice when ", ["code", "showTime"], " is set. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3376"
	  }, "#3376"]]], ["li", ["p", "Fix differences between overlay's and trigger's date format. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3405"
	  }, "#3405"], " ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3298"
	  }, "#3298"]]], ["li", ["p", "Fix style conflicts with TimePicker. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3312"
	  }, "#3312"], " ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3307"
	  }, "#3307"]]]]], ["li", ["p", "Fix overflow issue for Form.Item label."]], ["li", ["p", "Fix that Icon should not show border in Safari."]], ["li", ["p", "Fix infinite loop while inc/dec InputNubmer with keyboard. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3239"
	  }, "#3239"]]], ["li", ["p", "Fix the style of the arrow of Popover."]], ["li", ["p", "Fix bug Popover and Popconfirm ", ["code", "arrowPointAtCenter"], " doesn't work."]], ["li", ["p", "Select"], ["ul", ["li", ["p", "Fix bug that styles of Select are imported twice. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3332"
	  }, "#3332"]]], ["li", ["p", "Fix bug ", ["code", "notFoundContent"], " cannot be set as ", ["code", "''"], ". ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3345"
	  }, "#3345"]]], ["li", ["p", "Fix the unstable width of table cell with Select", "[showsearch]", ". ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3413"
	  }, "#3413"]]]]], ["li", ["p", "Fix style conflicts while use ", ["code", "border"], " & ", ["code", "title"], " & ", ["code", "footer"], " of Table at the same time. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3301"
	  }, "#3301"]]], ["li", ["p", "Fix that the height of TabPane doesn't follow height of content. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3377"
	  }, "#3377"]]], ["li", ["p", "Fix bug Transfer", "[titles]", " is not under the control of LocaleProvider. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/pull/3264"
	  }, "#3264"]]], ["li", ["p", "Upload"], ["ul", ["li", ["p", "Fix bug users' ", ["code", "onRemove"], " will override default behaviour. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3317"
	  }, "#3317"]]], ["li", ["p", "Fix style for ", ["code", "listType='picture-card'"], ".", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3316"
	  }, "#3316"]]]]], ["li", ["p", "Fix bug that moment locales is not found while built. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3204"
	  }, "#3204"], " ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3411"
	  }, "#3411"]]]], ["h2", "2.0.1"], ["p", ["code", "2016-10-01"]], ["ul", ["li", ["p", "Fix developers cannot call methods of react-slick. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3164"
	  }, "#3164"]]], ["li", ["p", "Fix Steps.Step", "[icon]", " should support React.ReactNode. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3159"
	  }, "#3159"]]], ["li", ["p", "Fix server-side render for Affix. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3216"
	  }, "#3216"]]], ["li", ["p", "Fix Mention should support ", ["code", "onSelect"], " ", ["code", "placeholder"], ". ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3236"
	  }, "#3236"], " ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3226"
	  }, "#3226"]]], ["li", ["p", "Fix Transfer cannot work with ", ["code", "getFieldDecorator"], "."]], ["li", ["p", "Fix LocaleProvider doesn't work for time-related components."]], ["li", ["p", "Fix Cascader doesn't show search text in search mode."]], ["li", ["p", "Fix the animation & text Spin should be placed in vertical middle."]], ["li", ["p", "Fix styles of RangePicker Modal Tag Progress."]]], ["h2", "2.0.0"], ["p", ["code", "2016-09-28"]], ["p", "After four months, ", ["code", "antd@2.0.0"], " is published. We had refactored code and improve functionalities and details of existing components. What's more, we provide English version of the documentation. The antd community help us a lot in developing ", ["code", "antd@2.0.0"], "."], ["p", "If you meet any problem while you try to upgrade from ", ["code", "antd@1.0.0"], ", feel free to ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues"
	  }, "create issues on GitHub"], "."], ["h3", "2.x Major changes"], ["ul", ["li", ["p", "Refactor components with TypeScript, and provide ", ["strong", ["code", ".d.ts"], " files which are officially supported"], ". Thanks to all the developers that contributed to ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1846"
	  }, "#1846"], " and @infeng."]], ["li", ["p", ["strong", "Translate the documentation into English"], ", and we are going to provide both of Chinese and English versions of the documentation in the future. Thanks to all the translators and reviewers that contributed to ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1471"
	  }, "#1471"], "."]], ["li", ["p", "DatePicker, TimePicker, Calendar and other components that are designed to select time ", ["strong", "are refactored to replace ", ["a", {
	    "title": null,
	    "href": "github.com/yiminghe/gregorian-calendar"
	  }, "gregorian-calendar"], " with ", ["a", {
	    "title": null,
	    "href": "http://momentjs.com/"
	  }, "moment"]], "."]], ["li", ["p", "All the ", ["a", {
	    "title": null,
	    "href": "http://ant.design/components/icon/"
	  }, "icons"], " are re-designed."]], ["li", ["p", "New component ", ["a", {
	    "title": null,
	    "href": "http://ant.design/components/mention/"
	  }, "Mention"], "."]], ["li", ["p", "New component ", ["a", {
	    "title": null,
	    "href": "http://ant.design/components/auto-complete/"
	  }, "AutoComplete"], "."]], ["li", ["p", "The ", ["code", "getFieldProps"], " of Form is replaced with ", ["code", "getFieldDecorator"], " which will warn developers if they make mistakes. Related discussion ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1533"
	  }, "#1533"], "."]], ["li", ["p", "Table supports ", ["a", {
	    "title": null,
	    "href": "http://ant.design/components/table/#components-table-demo-grouping-columns"
	  }, "grouping columns"], ". @yesmeck"]], ["li", ["p", "Removed components and features which are deprecated in ", ["code", "antd@1.x"], ", such as QueueAnim, Validation, Form.ValueMixin, Progress.Line, Progress.Circle, Popover", "[overlay]", " and Slider", "[marks]", " will not support array any more."]]], ["h3", "2.x Breaking changes"], ["p", "There are some breaking changes in ", ["code", "antd@2.0.0"], ", and you need to modify your code to work with it."], ["ul", ["li", ["p", ["code", "value"], " and ", ["code", "defaultValue"], " of all the time-related components will not support type ", ["code", "String/Date"], ", please use ", ["a", {
	    "title": null,
	    "href": "http://momentjs.com/"
	  }, "moment"], ":"], ["pre", {
	    "lang": "diff",
	    "highlighted": "<span class=\"token deleted\" >- &lt;TimePicker defaultValue=\"12:08:23\" /></span>\n<span class=\"token inserted\" >+ &lt;TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} /></span>\n\n<span class=\"token deleted\" >- &lt;DatePicker defaultValue=\"2015/01/01\" /></span>\n<span class=\"token inserted\" >+ &lt;DatePicker defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} /></span>\n\n<span class=\"token deleted\" >- &lt;Calendar defaultValue={new Date('2010-10-10')} /></span>\n<span class=\"token inserted\" >+ &lt;Calendar defaultValue={moment('2010-10-10', 'YYYY-MM-DD')} /></span>"
	  }, ["code", "- <TimePicker defaultValue=\"12:08:23\" />\n+ <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} />\n\n- <DatePicker defaultValue=\"2015/01/01\" />\n+ <DatePicker defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} />\n\n- <Calendar defaultValue={new Date('2010-10-10')} />\n+ <Calendar defaultValue={moment('2010-10-10', 'YYYY-MM-DD')} />"]]], ["li", ["p", "Parameters of type ", ["code", "Date/GregorianCalendar"], " of functions such as ", ["code", "onChange"], " and ", ["code", "onPanelChange"], ", plus other callback functions had been changed to type moment. Please consult ", ["a", {
	    "title": null,
	    "href": "https://github.com/yiminghe/gregorian-calendar"
	  }, "APIs of gregorian-calendar"], " and ", ["a", {
	    "title": null,
	    "href": "http://momentjs.com/docs/"
	  }, "APIs of moment"], ", and update your code accordingly. And you can consult this ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/commit/5a4ebe535f0353089b30ac331bc4fb7877963371"
	  }, "commit"], " to see how to update."], ["p", "Because the return value of ", ["code", "JSON.stringy(date: moment)"], " will lost time zone, we should use ", ["code", ".format"], " to convert date to string first, see related issue ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3082"
	  }, "#3082"], " for details:"], ["pre", {
	    "lang": "js",
	    "highlighted": "<span class=\"token function\" >handleSubmit</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n  <span class=\"token keyword\" >const</span> values <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>props<span class=\"token punctuation\" >.</span>form<span class=\"token punctuation\" >.</span><span class=\"token function\" >getFieldsValue</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  values<span class=\"token punctuation\" >.</span>date <span class=\"token operator\" >=</span> values<span class=\"token punctuation\" >.</span>date<span class=\"token punctuation\" >.</span><span class=\"token function\" >format</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'YYYY-MM-DD HH:mm:ss'</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span> <span class=\"token comment\" spellcheck=\"true\">// or other format</span>\n  <span class=\"token keyword\" >const</span> data <span class=\"token operator\" >=</span> JSON<span class=\"token punctuation\" >.</span><span class=\"token function\" >stringify</span><span class=\"token punctuation\" >(</span>values<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token comment\" spellcheck=\"true\">// send data to server</span>\n<span class=\"token punctuation\" >}</span>"
	  }, ["code", "handleSubmit() {\n  const values = this.props.form.getFieldsValue();\n  values.date = values.date.format('YYYY-MM-DD HH:mm:ss'); // or other format\n  const data = JSON.stringify(values);\n  // send data to server\n}"]]], ["li", ["p", "For the value of time-related components becomes an instance of ", ["code", "moment"], ", you should replace ", ["code", "type: 'date'"], " with ", ["code", "type: 'object'"], " in form validation."]], ["li", ["p", "The ", ["code", "format"], " of time-related components is changed from ", ["a", {
	    "title": null,
	    "href": "https://github.com/yiminghe/gregorian-calendar-format#api"
	  }, "gregorian-calendar-format"], " to ", ["a", {
	    "title": null,
	    "href": "http://momentjs.com/docs/#/parsing/string-format/"
	  }, "moment  format"], " now, for instance the format ", ["code", "yyyy-MM-dd"], " should change to ", ["code", "YYYY-MM-DD"], "."]], ["li", ["p", ["code", "linkRender"], " and ", ["code", "nameRender"], " of Breadcrumb are removed, please use ", ["code", "itemRender"], "."]], ["li", ["p", ["code", "onClose"], " and ", ["code", "onOpen"], " of Menu are removed, please use ", ["code", "onOpenChange"], ". As being totally different, please check ", ["a", {
	    "title": null,
	    "href": "http://beta.ant.design/components/menu/#components-menu-demo-sider-current"
	  }, "this demo"], " first."]], ["li", ["p", "Paging columns of Table were removed, please use ", ["a", {
	    "title": null,
	    "href": "http://ant.design/components/table/#components-table-demo-fixed-columns"
	  }, "fixed columns"], "."]], ["li", ["p", ["code", "Popover[overlay]"], " is removed, please use ", ["code", "Popover[content]"], " instead."]]], ["p", "The following change will throw some warnings in the console and it will still work, but we recommend to update your code."], ["ul", ["li", ["p", ["code", "getFieldProps"], " of Form is deprecated, please use ", ["code", "getFieldDecorator"], ":"], ["pre", {
	    "lang": "diff",
	    "highlighted": "<span class=\"token deleted\" >-  &lt;Input placeholder=\"text\" {...getFieldProps('userName', { ... })} /></span>\n<span class=\"token inserted\" >+  {getFieldDecorator('userName', { ... })(</span>\n<span class=\"token inserted\" >+    &lt;Input placeholder=\"text\" /></span>\n<span class=\"token inserted\" >+  )}</span>"
	  }, ["code", "-  <Input placeholder=\"text\" {...getFieldProps('userName', { ... })} />\n+  {getFieldDecorator('userName', { ... })(\n+    <Input placeholder=\"text\" />\n+  )}"]], ["p", "Look up to ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/1533"
	  }, "#1533"], " for related discussion."]], ["li", ["p", ["code", "toggleOpen"], " of DatePicker is deprecated, please use ", ["code", "onOpenChange"], ":"], ["pre", {
	    "lang": "diff",
	    "highlighted": "<span class=\"token deleted\" >- handleToggleOpen({ open }) {</span>\n<span class=\"token inserted\" >+ handleOpenChange(open) {</span>\n  ...\n}"
	  }, ["code", "- handleToggleOpen({ open }) {\n+ handleOpenChange(open) {\n  ...\n}"]]]], ["h3", "2.x Bug fixes"], ["ul", ["li", ["p", "Dropdown.Button", "[disabled]", " should work. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3070"
	  }, "#3070"]]], ["li", ["p", ["code", "option.withRef"], " of Form.create should work. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2843"
	  }, "#2843"]]], ["li", ["p", "Fix slow response of expanding sub menu in Menu", "[inline]", " mode. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2701"
	  }, "#2701"]]], ["li", ["p", "The button of Modal.confirm(and so on) should not be clickable while it is closed asynchronously. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2684"
	  }, "#2684"]]], ["li", ["p", ["code", "format"], " of DatePicker", "[showtime]", " should work. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/3123"
	  }, "#3123"]]], ["li", ["p", "Fix Table", "[datasource]", " treat key whose value is ", ["code", "0"], " as inexisting. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/pull/3166"
	  }, "#3166"], " @noonnightstorm"]], ["li", ["p", "Tree.Node should not show arrow if it has no child nodes. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2616"
	  }, "#2616"]]], ["li", ["p", "Fix cursor style of arrows that are hidden of Tree.Node. ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/2748"
	  }, "#2748"]]]], ["h3", "2.x Other improvements"], ["ul", ["li", ["p", "Alert supports ", ["a", {
	    "title": null,
	    "href": "http://ant.design/components/alert/#components-alert-demo-banner"
	  }, ["code", "banner"], " mode"], "."]], ["li", ["p", "BackTop will scroll to top with animation."]], ["li", ["p", "Badge supports ", ["a", {
	    "title": null,
	    "href": "http://ant.design/components/badge/#components-badge-demo-status"
	  }, "status dot mode"], "."]], ["li", ["p", "Cascader supports ", ["a", {
	    "title": null,
	    "href": "http://ant.design/components/cascader/#components-cascader-demo-search"
	  }, "searching options directly"], "."]], ["li", ["p", "Checkbox supports ", ["a", {
	    "title": null,
	    "href": "http://ant.design/components/checkbox/#components-checkbox-demo-check-all"
	  }, "indeterminate mode"], "."]], ["li", ["p", "Form supports ", ["a", {
	    "title": null,
	    "href": "http://ant.design/components/form/#components-form-demo-validate-customized"
	  }, "vertical layout"], "."]], ["li", ["p", "InputNumber supports long press to increase/decrease number. ", ["a", {
	    "title": null,
	    "href": "http://ant.design/components/input-number/#components-input-number-demo-basic"
	  }, "#"]]], ["li", ["p", "notification supports ", ["a", {
	    "title": null,
	    "href": "http://ant.design/components/notification/#components-notification-demo-custom-icon"
	  }, "customized icon"], "."]], ["li", ["p", "Spin allows ", ["a", {
	    "title": null,
	    "href": "http://ant.design/components/spin/#components-spin-demo-tip"
	  }, "customized tips and animation work together"], ". @jerrybendy"]], ["li", ["p", "Transfer can handle event while options are checked/unchecked. ", ["a", {
	    "title": null,
	    "href": "http://ant.design/components/transfer/#components-transfer-demo-basic"
	  }, "#"]]], ["li", ["p", "Transfer can determine ", ["a", {
	    "title": null,
	    "href": "http://ant.design/components/transfer/#components-transfer-demo-basic"
	  }, "whether an option is checkable"], "."]], ["li", ["p", "Improve style of Alert and notification."]], ["li", ["p", "Modal.confirm(and so on) can be closed by keyboard. @Dafrok"]], ["li", ["p", "Improve the user experience of ", ["a", {
	    "title": null,
	    "href": "http://ant.design/components/date-picker/#components-date-picker-demo-time"
	  }, "selecting time in DatePicker"], "."]], ["li", ["p", "Improve the status changed animation of ", ["a", {
	    "title": null,
	    "href": "http://ant.design/components/spin/#components-spin-demo-nested"
	  }, "Spin"], "."]], ["li", ["p", "Update ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/commit/2f308b0f995cfcb2a3c8feb1e35ffd3f0bf93cfc"
	  }, "font-family"], "."]]], ["h3", "2.x Workflow"], ["ul", ["li", ["p", ["a", {
	    "title": null,
	    "href": "http://library.ant.design/"
	  }, "AntD Library"], " a collection of Axure files which includes components and patterns that follow Ant Design Specification."]], ["li", ["p", "Rename ", ["code", "babel-plugin-antd"], " to ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/babel-plugin-import"
	  }, ["code", "babel-plugin-import"]], ", and this means that ", ["code", "babel-plugin-import"], " becomes an common load-on-demand solution and not just for ", ["code", "antd"], "."], ["p", "Please update ", ["code", "package.json"], ":"], ["pre", {
	    "lang": "diff",
	    "highlighted": "{\n  \"devDependencies\": {\n<span class=\"token deleted\" >-   \"babel-plugin-antd\": \"^0.x.x\",</span>\n<span class=\"token inserted\" >+   \"babel-plugin-import\": \"^1.0.0\",</span>\n  }\n}"
	  }, ["code", "{\n  \"devDependencies\": {\n-   \"babel-plugin-antd\": \"^0.x.x\",\n+   \"babel-plugin-import\": \"^1.0.0\",\n  }\n}"]], ["p", "And update your babel config in ", ["code", ".babelrc"], " or other place:"], ["pre", {
	    "lang": "diff",
	    "highlighted": "{\n<span class=\"token deleted\" >-  \"plugins\": [[\"antd\", { style: \"css\" }]]</span>\n<span class=\"token inserted\" >+  \"plugins\": [[\"import\", { libraryName: \"antd\", style: \"css\" }]]</span>\n}"
	  }, ["code", "{\n-  \"plugins\": [[\"antd\", { style: \"css\" }]]\n+  \"plugins\": [[\"import\", { libraryName: \"antd\", style: \"css\" }]]\n}"]]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "https://github.com/dvajs/dva"
	  }, "dva@1.0.0"], " is published and it is officially recommended framework ", ["a", {
	    "title": null,
	    "href": "http://ant.design/docs/react/practical-projects"
	  }, "in real world"], "."]], ["li", ["p", "The officially recommended scaffold is ", ["a", {
	    "title": null,
	    "href": "https://github.com/dvajs/dva-cli"
	  }, "dva-cli"], " now, the old ", ["code", "antd-init"], " is just for studying and demo."]]], ["h2", "1.0.0"], ["p", "Visit ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/releases?after=2.0.0"
	  }, "GitHub"], " to read change logs from ", ["code", "0.x"], " to ", ["code", "1.x"], "。"]],
	  "meta": {
	    "order": 5,
	    "title": "Change Log",
	    "toc": false,
	    "timeline": true,
	    "filename": "CHANGELOG.en-US.md"
	  },
	  "description": ["section", ["p", "If you want to read change logs before ", ["code", "2.0.0"], ", please visit ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/releases?after=2.0.0"
	  }, "GitHub"], "."]],
	  "toc": ["ul", ["li", ["a", {
	    "href": "#2.4.3"
	  }, "2.4.3"]], ["li", ["a", {
	    "href": "#2.4.2"
	  }, "2.4.2"]], ["li", ["a", {
	    "href": "#2.4.1"
	  }, "2.4.1"]], ["li", ["a", {
	    "href": "#2.4.0"
	  }, "2.4.0"]], ["li", ["a", {
	    "href": "#2.3.2"
	  }, "2.3.2"]], ["li", ["a", {
	    "href": "#2.3.1"
	  }, "2.3.1"]], ["li", ["a", {
	    "href": "#2.3.0"
	  }, "2.3.0"]], ["li", ["a", {
	    "href": "#2.2.1"
	  }, "2.2.1"]], ["li", ["a", {
	    "href": "#2.2.0"
	  }, "2.2.0"]], ["li", ["a", {
	    "href": "#2.1.0"
	  }, "2.1.0"]], ["li", ["a", {
	    "href": "#2.0.1"
	  }, "2.0.1"]], ["li", ["a", {
	    "href": "#2.0.0"
	  }, "2.0.0"]], ["li", ["a", {
	    "href": "#1.0.0"
	  }, "1.0.0"]]]
	};

/***/ }

});