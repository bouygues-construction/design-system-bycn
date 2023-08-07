"use strict";(self.webpackChunkdesign_system_bycn=self.webpackChunkdesign_system_bycn||[]).push([[694],{"./projects/showcases/components/stories/text-input/text-input-text-example.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WithReactiveForm:()=>WithReactiveForm,default:()=>text_input_text_example_stories});var _class,dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),fesm2020_forms=__webpack_require__("./node_modules/@angular/forms/fesm2020/forms.mjs");let TextInputExample=((_class=class TextInputExample{constructor(formBuilder){this.formBuilder=formBuilder}ngOnInit(){this.formGroup=this.formBuilder.group({textInput:this.formBuilder.control("Your input",[fesm2020_forms.kI.required,fesm2020_forms.kI.email])})}toggleClear(){const textInput=this.formGroup.get("textInput");null!=textInput&&textInput.setValue("")}toggleDisable(){const textInput=this.formGroup.get("textInput");null!=textInput&&(textInput.disabled?textInput.enable():textInput.disable())}}).ctorParameters=()=>[{type:fesm2020_forms.qu}],_class);TextInputExample=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-text-input",template:'\n    <form [formGroup]="formGroup">\n      <mas-text-input\n        labelText="Label"\n        placeholder="Placeholder Text"\n        formControlName="textInput"\n        type="email"\n      >\n        <mas-label [optional]="true" [infoIcon]="true">Label text</mas-label>\n        <mas-error>Somethig went wrong</mas-error>\n        <mas-helper>Type here...</mas-helper>\n      </mas-text-input>\n    </form>\n    <br />\n    <div style="display: flex; ">\n      <button\n        (click)="toggleClear()"\n        style="background-color: orange; border: solid 1px black; border-radius: 4px; padding: 2px; margin-right:10px "\n      >\n        Clear\n      </button>\n      <br />\n      <button\n        (click)="toggleDisable()"\n        style="background-color: orange; border: solid 1px black; border-radius: 4px; padding: 2px"\n      >\n        Toggle disabled state\n      </button>\n    </div>\n  '})],TextInputExample);var text_input_module=__webpack_require__("./projects/components/src/lib/text-input/text-input.module.ts"),error_component=__webpack_require__("./projects/components/src/lib/sub-elements/error.component.ts"),label_component=__webpack_require__("./projects/components/src/lib/sub-elements/label.component.ts"),helper_component=__webpack_require__("./projects/components/src/lib/sub-elements/helper.component.ts");const text_input_text_example_stories={component:TextInputExample,title:"Components/Text input",decorators:[(0,dist.moduleMetadata)({declarations:[TextInputExample],imports:[common.CommonModule,text_input_module.i,fesm2020_forms.UX,error_component.s,label_component.K,helper_component.E]})],render:args=>({props:{...args}}),argTypes:{}},WithReactiveForm={args:{}}},"./projects/components/src/lib/text-input/text-input.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>MasTextInput});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),injectStylesIntoStyleTag=(__webpack_require__("./projects/icons/dist/css/mas-icons.css"),__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),dist=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./projects/css/src/components/text-input/dist/index.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(dist.Z,options);dist.Z&&dist.Z.locals&&dist.Z.locals;var _class,MasTextInput_1,fesm2020_forms=__webpack_require__("./node_modules/@angular/forms/fesm2020/forms.mjs");let MasTextInput=((_class=class MasTextInput{constructor(){this.identifier="text-input-"+MasTextInput_1.textInputCount++,this._disabled=!1,this.input=new fesm2020_forms.NI(""),this._value="",this.placeholder="",this.required=!1,this.size="S",this.type="text",this.filled=!1,this.change=new core.EventEmitter,this.inputChangeEvent=new core.EventEmitter,this._invalid=!1,this.onChangeHandler=_=>{},this.onTouchedHandler=()=>{}}get disabled(){return this._disabled}set disabled(value){this._disabled=value,value?this.input.disable():this.input.enable()}get labelText(){return this._labelText}set labelText(value){this._labelText=value}set invalid(value){this._invalid=value}get invalid(){return this.input?!this.input?.valid&&this.input.touched:this._invalid}set value(value){this._value=value}get value(){return this._value}get empty(){return""===this._value}get leadingIcon(){let icon="none";switch(this.type){case"search":icon="mas-magnifyingglass-outlined";break;case"email":icon="mas-envelopesimple-outlined";break;case"password":icon="mas-lockkey-outlined";break;case"tel":icon="mas-phone-outlined"}return icon}get trailingIcon(){return"password"===this.type?"mas-eye-filled":"none"}writeValue(obj){this.input.setValue(obj)}registerOnChange(fn){this.onChangeHandler=fn}registerOnTouched(fn){this.onTouchedHandler=fn}setDisabledState(isDisabled){this.disabled=isDisabled}updateModel(event){let newModelValue=this.value;this.onChangeHandler(newModelValue),this.model=newModelValue,this.formControl&&this.formControl.setValue(newModelValue),this.change.emit({value:newModelValue,originalEvent:event})}onChange(event){this.updateModel(event)}showPassword(input){"password"===input.getAttribute("type")?input.setAttribute("type","text"):input.setAttribute("type","password")}ngOnInit(){}ngAfterViewInit(){this.input.valueChanges.subscribe((value=>{this.onChangeHandler(value?.trim()),this.value=value??""})),"tel"===this.type?this.input.addValidators(fesm2020_forms.kI.pattern(/[0-9\+\-\ ]/)):"email"===this.type&&this.input.addValidators(fesm2020_forms.kI.email)}}).textInputCount=0,_class.propDecorators={identifier:[{type:core.Input}],disabled:[{type:core.Input}],labelText:[{type:core.Input}],inputViewChild:[{type:core.ViewChild,args:["textinput"]}],formControlName:[{type:core.Input}],placeholder:[{type:core.Input}],required:[{type:core.Input}],size:[{type:core.Input}],formControl:[{type:core.Input}],type:[{type:core.Input}],filled:[{type:core.Input}],change:[{type:core.Output}],inputChangeEvent:[{type:core.Output}],invalid:[{type:core.Input}]},MasTextInput_1=_class);MasTextInput=MasTextInput_1=(0,tslib_es6.gn)([(0,core.Component)({selector:"mas-text-input",template:'<ng-content select="mas-label"></ng-content>\r\n<div class="mas-text-input_input-wrapper">\r\n  <i *ngIf="leadingIcon !== \'none\'" class="{{ leadingIcon }} mas-icon mas-leading-icon"></i>\r\n  <input\r\n    #textinput\r\n    [id]="identifier"\r\n    class="mas-text-input_input mas-text-input-min-line"\r\n    [type]="type"\r\n    [placeholder]="placeholder"\r\n    [required]="required"\r\n    [formControl]="input"\r\n    [value]="value"\r\n    (change)="onChange($event)"\r\n  />\r\n  <i\r\n    *ngIf="trailingIcon !== \'none\'"\r\n    class="{{ trailingIcon }} mas-icon mas-trailing-icon"\r\n    (click)="showPassword(textinput)"\r\n  ></i>\r\n</div>\r\n<ng-content *ngIf="invalid" select="mas-error"></ng-content>\r\n<ng-content *ngIf="!invalid" select="mas-helper"></ng-content>',providers:[{provide:fesm2020_forms.JU,useExisting:MasTextInput_1,multi:!0}],host:{class:"mas-text-input","[class.mas-text-input--invalid]":"invalid","[class.mas-text-input--disabled]":"disabled","[class.mas-text-input--filled]":"filled","[class.mas-text-input--medium]":'size === "M"'}})],MasTextInput)},"./projects/components/src/lib/text-input/text-input.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>MasTextInputModule});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_text_input_component__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./projects/components/src/lib/text-input/text-input.component.ts"),_angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),_sub_elements__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./projects/components/src/lib/sub-elements/error.component.ts"),_sub_elements__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./projects/components/src/lib/sub-elements/label.component.ts"),_sub_elements__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./projects/components/src/lib/sub-elements/helper.component.ts"),_angular_forms__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@angular/forms/fesm2020/forms.mjs");let MasTextInputModule=class MasTextInputModule{};MasTextInputModule=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,_sub_elements__WEBPACK_IMPORTED_MODULE_3__.s,_sub_elements__WEBPACK_IMPORTED_MODULE_4__.K,_sub_elements__WEBPACK_IMPORTED_MODULE_5__.E,_angular_forms__WEBPACK_IMPORTED_MODULE_6__.UX],declarations:[_text_input_component__WEBPACK_IMPORTED_MODULE_7__.j],exports:[_text_input_component__WEBPACK_IMPORTED_MODULE_7__.j],providers:[]})],MasTextInputModule)},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./projects/css/src/components/text-input/dist/index.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".mas-text-input{\n  width:280px;\n  font-family:var(--mas-typo_font-family--inter);\n  font-weight:var(--mas-typo_body-font-weight);\n  font-size:var(--mas-typo_body-3-font-size);\n  line-height:var(--mas-typo_body-3-line-height);\n}\n\n.mas-text-input_input-wrapper{\n  position:relative;\n  display:flex;\n  align-items:center;\n  box-shadow:0 0 0 1px var(--mas-semantic-color_border-primary);\n  border-radius:var(--mas-radius_2);\n  color:inherit;\n  font-family:inherit;\n  font-size:inherit;\n  line-height:inherit;\n  margin:0;\n  min-inline-size:280px;\n  inline-size:280px;\n  block-size:32px;\n  padding-inline:12px;\n  cursor:pointer;\n  gap:8px;\n}\n\n.mas-text-input-min-line{\n}\n\n.mas-text-input_input{\n  display:block;\n  min-inline-size:208px;\n  inline-size:100%;\n  background-color:var(--mas-semantic-color-surface-primary);\n  cursor:pointer;\n  outline:none;\n  transition:var(--mas-transition_focus-visible);\n}\n\n.mas-icon{\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  width:16px;\n  height:16px;\n  padding-top:0px;\n}\n\n.mas-text-input input::-moz-placeholder{\n  -moz-user-select:none;\n       user-select:none;\n  color:var(--mas-semantic-color_text-tiertiary);\n}\n\n.mas-text-input input::placeholder{\n  -webkit-user-select:none;\n     -moz-user-select:none;\n          user-select:none;\n  color:var(--mas-semantic-color_text-tiertiary);\n}\n\n:not(.mas-text-input--disabled) > .mas-text-input_input-wrapper:hover{\n  box-shadow:0 0 0 1px var(--mas-semantic-color_action-tiertiary--default);\n}\n\n:not(.mas-text-input--disabled) > .mas-text-input_input-wrapper:active{\n  box-shadow:0 0 0 1px var(--mas-semantic-color_action-primary--default), 0 0 0 4px hsla(200, 100%, 42%, 0.16);\n}\r\n\n/* ! invalid */\n\n.mas-text-input--invalid .mas-text-input_input-wrapper{\n  box-shadow:0 0 0 1px var(--mas-primitive-color_red600);\n}\n\n.mas-text-input--invalid .mas-text-input_input-wrapper:hover{\n  box-shadow:0 0 0 1px var(--mas-primitive-color_red600), 0 0 0 4px hsla(\r\n        var(--mas-primitive-color_red500--h),\r\n        var(--mas-primitive-color_red500--s),\r\n        var(--mas-primitive-color_red500--l),\r\n        0.16\r\n      );\n}\r\n\n/* !Size */\n\n.mas-text-input--medium{\n  font-family:var(--mas-typo_font-family--inter);\n  font-weight:var(--mas-typo_body-font-weight);\n  font-size:var(--mas-typo_body-2-font-size);\n  line-height:var(--mas-typo_body-2-line-height);\n}\n\n.mas-text-input--medium .mas-text-input_input-wrapper{\n  block-size:40px;\n}\r\n\n/* ! disabled */\n\n.mas-text-input--disabled .mas-text-input_input-wrapper{\n  opacity:0.4;\n}\r\n\n/* ! Filled */\n\n.mas-text-input--filled input::-moz-placeholder{\n  color:var(--mas-semantic-color_text-primary);\n}\n\n.mas-text-input--filled input::placeholder{\n  color:var(--mas-semantic-color_text-primary);\n}\n\n.mas-text-input input:-webkit-autofill,\r\ninput:-webkit-autofill:hover,\r\ninput:-webkit-autofill:focus,\r\ninput:-webkit-autofill:active{\n  -webkit-transition:background-color 5000s ease-in-out 0s;\n  transition:background-color 5000s ease-in-out 0s;\n}","",{version:3,sources:["webpack://./projects/css/src/components/text-input/dist/index.css"],names:[],mappings:"AAAA;EACE,WAAW;EACX,8CAA8C;EAC9C,4CAA4C;EAC5C,0CAA0C;EAC1C,8CAA8C;AAChD;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;EAClB,6DAA6D;EAC7D,iCAAiC;EACjC,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB;EACnB,QAAQ;EACR,qBAAqB;EACrB,iBAAiB;EACjB,eAAe;EACf,mBAAmB;EACnB,cAAc;EACd,OAAO;AACT;;AAEA;AACA;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,gBAAgB;EAChB,0DAA0D;EAC1D,cAAc;EACd,YAAY;EACZ,8CAA8C;AAChD;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,sBAAsB;EACtB,UAAU;EACV,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,qBAAqB;OAChB,gBAAgB;EACrB,8CAA8C;AAChD;;AAEA;EACE,wBAAwB;KACrB,qBAAqB;UAChB,gBAAgB;EACxB,8CAA8C;AAChD;;AAEA;EACE,wEAAwE;AAC1E;;AAEA;EACE,4GAA4G;AAC9G;;AAEA,cAAc;;AAEd;EACE,sDAAsD;AACxD;;AAEA;EACE;;;;;OAKK;AACP;;AAEA,UAAU;;AAEV;EACE,8CAA8C;EAC9C,4CAA4C;EAC5C,0CAA0C;EAC1C,8CAA8C;AAChD;;AAEA;EACE,eAAe;AACjB;;AAEA,eAAe;;AAEf;EACE,WAAW;AACb;;AAEA,aAAa;;AAEb;EACE,4CAA4C;AAC9C;;AAEA;EACE,4CAA4C;AAC9C;;AAEA;;;;EAIE,wDAAwD;EACxD,gDAAgD;AAClD",sourcesContent:[".mas-text-input{\n  width:280px;\n  font-family:var(--mas-typo_font-family--inter);\n  font-weight:var(--mas-typo_body-font-weight);\n  font-size:var(--mas-typo_body-3-font-size);\n  line-height:var(--mas-typo_body-3-line-height);\n}\n\n.mas-text-input_input-wrapper{\n  position:relative;\n  display:flex;\n  align-items:center;\n  box-shadow:0 0 0 1px var(--mas-semantic-color_border-primary);\n  border-radius:var(--mas-radius_2);\n  color:inherit;\n  font-family:inherit;\n  font-size:inherit;\n  line-height:inherit;\n  margin:0;\n  min-inline-size:280px;\n  inline-size:280px;\n  block-size:32px;\n  padding-inline:12px;\n  cursor:pointer;\n  gap:8px;\n}\n\n.mas-text-input-min-line{\n}\n\n.mas-text-input_input{\n  display:block;\n  min-inline-size:208px;\n  inline-size:100%;\n  background-color:var(--mas-semantic-color-surface-primary);\n  cursor:pointer;\n  outline:none;\n  transition:var(--mas-transition_focus-visible);\n}\n\n.mas-icon{\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  width:16px;\n  height:16px;\n  padding-top:0px;\n}\n\n.mas-text-input input::-moz-placeholder{\n  -moz-user-select:none;\n       user-select:none;\n  color:var(--mas-semantic-color_text-tiertiary);\n}\n\n.mas-text-input input::placeholder{\n  -webkit-user-select:none;\n     -moz-user-select:none;\n          user-select:none;\n  color:var(--mas-semantic-color_text-tiertiary);\n}\n\n:not(.mas-text-input--disabled) > .mas-text-input_input-wrapper:hover{\n  box-shadow:0 0 0 1px var(--mas-semantic-color_action-tiertiary--default);\n}\n\n:not(.mas-text-input--disabled) > .mas-text-input_input-wrapper:active{\n  box-shadow:0 0 0 1px var(--mas-semantic-color_action-primary--default), 0 0 0 4px hsla(200, 100%, 42%, 0.16);\n}\r\n\n/* ! invalid */\n\n.mas-text-input--invalid .mas-text-input_input-wrapper{\n  box-shadow:0 0 0 1px var(--mas-primitive-color_red600);\n}\n\n.mas-text-input--invalid .mas-text-input_input-wrapper:hover{\n  box-shadow:0 0 0 1px var(--mas-primitive-color_red600), 0 0 0 4px hsla(\r\n        var(--mas-primitive-color_red500--h),\r\n        var(--mas-primitive-color_red500--s),\r\n        var(--mas-primitive-color_red500--l),\r\n        0.16\r\n      );\n}\r\n\n/* !Size */\n\n.mas-text-input--medium{\n  font-family:var(--mas-typo_font-family--inter);\n  font-weight:var(--mas-typo_body-font-weight);\n  font-size:var(--mas-typo_body-2-font-size);\n  line-height:var(--mas-typo_body-2-line-height);\n}\n\n.mas-text-input--medium .mas-text-input_input-wrapper{\n  block-size:40px;\n}\r\n\n/* ! disabled */\n\n.mas-text-input--disabled .mas-text-input_input-wrapper{\n  opacity:0.4;\n}\r\n\n/* ! Filled */\n\n.mas-text-input--filled input::-moz-placeholder{\n  color:var(--mas-semantic-color_text-primary);\n}\n\n.mas-text-input--filled input::placeholder{\n  color:var(--mas-semantic-color_text-primary);\n}\n\n.mas-text-input input:-webkit-autofill,\r\ninput:-webkit-autofill:hover,\r\ninput:-webkit-autofill:focus,\r\ninput:-webkit-autofill:active{\n  -webkit-transition:background-color 5000s ease-in-out 0s;\n  transition:background-color 5000s ease-in-out 0s;\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);