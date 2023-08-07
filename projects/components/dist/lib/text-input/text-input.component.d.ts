import { AfterViewInit, ElementRef, EventEmitter, OnInit } from '@angular/core';
import '@masoni/icons/dist/css/mas-icons.css';
import '@masoni/css-text-input/dist/index.css';
import { ControlValueAccessor, FormControl, FormControlName } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class MasTextInput implements OnInit, ControlValueAccessor, AfterViewInit {
    static textInputCount: number;
    identifier: string;
    get disabled(): boolean;
    set disabled(value: boolean);
    protected _disabled: boolean;
    get labelText(): string;
    set labelText(value: string);
    protected input: FormControl<string | null>;
    protected _labelText: string;
    protected _value: string;
    model: any;
    inputViewChild: ElementRef | undefined;
    formControlName: FormControlName | undefined;
    placeholder: string;
    required: boolean;
    size: 'M' | 'S';
    formControl: FormControl | undefined;
    type: 'search' | 'tel' | 'text' | 'password' | 'email';
    filled: boolean;
    onChange: EventEmitter<any>;
    inputChangeEvent: EventEmitter<string>;
    set invalid(value: boolean | undefined);
    get invalid(): boolean | undefined;
    protected _invalid: boolean | undefined;
    set value(value: string);
    get value(): string;
    get empty(): boolean;
    get leadingIcon(): string;
    get trailingIcon(): string;
    protected onChangeHandler: (_: any) => void;
    protected onTouchedHandler: () => void;
    writeValue(obj: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    updateModel(event: Event): void;
    handleChange(event: Event): void;
    showPassword(input: HTMLElement): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MasTextInput, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MasTextInput, "mas-text-input", never, { "identifier": "identifier"; "disabled": "disabled"; "labelText": "labelText"; "formControlName": "formControlName"; "placeholder": "placeholder"; "required": "required"; "size": "size"; "formControl": "formControl"; "type": "type"; "filled": "filled"; "invalid": "invalid"; }, { "onChange": "onChange"; "inputChangeEvent": "inputChangeEvent"; }, never, ["mas-label", "mas-error", "mas-helper"], false, never>;
}
