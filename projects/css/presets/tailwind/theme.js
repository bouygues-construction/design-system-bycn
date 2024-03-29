module.exports = {
  screens: {
    mobile: {
      min: '0px',
    },
    tablet: {
      min: '600px',
    },
    desktop: {
      min: '1440px',
    },
  },
  spacing: {
    '0': 'var(--mas-spacing_0)',
    '025': 'var(--mas-spacing_025)',
    '050': 'var(--mas-spacing_050)',
    '075': 'var(--mas-spacing_075)',
    '100': 'var(--mas-spacing_100)',
    '150': 'var(--mas-spacing_150)',
    '200': 'var(--mas-spacing_200)',
    '250': 'var(--mas-spacing_250)',
    '300': 'var(--mas-spacing_300)',
    '400': 'var(--mas-spacing_400)',
    '500': 'var(--mas-spacing_500)',
    '600': 'var(--mas-spacing_600)',
    '800': 'var(--mas-spacing_800)',
  },
  colors: {
    current: 'currentColor',
    transparent: 'transparent',
    'background-primary': 'var(--mas-semantic-color_background-primary)',
    'background-secondary': 'var(--mas-semantic-color_background-secondary)',
    'surface-primary': 'var(--mas-semantic-color_surface-primary)',
    'surface-secondary': 'var(--mas-semantic-color_surface-secondary)',
    'surface-tiertiary': 'var(--mas-semantic-color_surface-tiertiary)',

    'icon-primary': 'var(--mas-semantic-color_icon-primary)',
    'icon-secondary': 'var(--mas-semantic-color_icon-secondary)',
    'icon-tiertiary': 'var(--mas-semantic-color_icon-tiertiary)',
    'icon-reverse': 'var(--mas-semantic-color_icon-reverse)',
    'icon-orange': 'var(--mas-semantic-color_icon-orange)',
    'icon-amber': 'var(--mas-semantic-color_icon-amber)',
    'icon-green': 'var(--mas-semantic-color_icon-green)',
    'icon-teal': 'var(--mas-semantic-color_icon-teal)',
    'icon-blue': 'var(--mas-semantic-color_icon-blue)',
    'icon-purple': 'var(--mas-semantic-color_icon-purple)',
    'icon-red': 'var(--mas-semantic-color_icon-red)',

    'border-primary': 'var(--mas-semantic-color_border-primary)',
    'border-secondary': 'var(--mas-semantic-color_border-secondary)',
    'border-tiertiary': 'var(--mas-semantic-color_border-tiertiary)',

    'action-primary--default': 'var(--mas-semantic-color_action-primary--default)',
    'action-primary--hovered': 'var(--mas-semantic-color_action-primary--hovered)',
    'action-primary--pressed': 'var(--mas-semantic-color_action-primary--pressed)',
    'action-primary--disabled': 'var(--mas-semantic-color_action-primary--disabled)',
    'action-secondary--default': 'var(--mas-semantic-color_action-secondary--default)',
    'action-secondary--hovered': 'var(--mas-semantic-color_action-secondary--hovered)',
    'action-secondary--pressed': 'var(--mas-semantic-color_action-secondary--pressed)',
    'action-secondary--disabled': 'var(--mas-semantic-color_action-secondary--disabled)',
    'action-tiertiary--default': 'var(--mas-semantic-color_action-tiertiary--default)',
    'action-tiertiary--hovered': 'var(--mas-semantic-color_action-tiertiary--hovered)',
    'action-tiertiary--pressed': 'var(--mas-semantic-color_action-tiertiary--pressed)',
    'action-tiertiary--disabled': 'var(--mas-semantic-color_action-tiertiary--disabled)',
    'action-reverse--default': 'var(--mas-semantic-color_action-reverse--default)',
    'action-reverse--hovered': 'var(--mas-semantic-color_action-reverse--hovered)',
    'action-reverse--pressed': 'var(--mas-semantic-color_action-reverse--pressed)',
    'action-reverse--disabled': 'var(--mas-semantic-color_action-reverse--disabled)',

    'surface-orange': 'var(--mas-semantic-color_surface-orange)',
    'surface-amber': 'var(--mas-semantic-color_surface-amber)',
    'surface-green': 'var(--mas-semantic-color_surface-green)',
    'surface-teal': 'var(--mas-semantic-color_surface-teal)',
    'surface-blue': 'var(--mas-semantic-color_surface-blue)',
    'surface-purple': 'var(--mas-semantic-color_surface-purple)',
    'surface-red': 'var(--mas-semantic-color_surface-red)',
    // Text Color
    'text-primary': 'var(--mas-semantic-color_text-primary)',
    'text-secondary': 'var(--mas-semantic-color_text-secondary)',
    'text-tiertiary': 'var(--mas-semantic-color_text-tiertiary)',
    'text-reverse': 'var(--mas-semantic-color_text-reverse)',
    'text-orange': 'var(--mas-semantic-color_text-orange)',
    'text-amber': 'var(--mas-semantic-color_text-amber)',
    'text-green': 'var(--mas-semantic-color_text-green)',
    'text-teal': 'var(--mas-semantic-color_text-teal)',
    'text-blue': 'var(--mas-semantic-color_text-blue)',
    'text-purple': 'var(--mas-semantic-color_text-purple)',
    'text-red': 'var(--mas-semantic-color_text-red)',
    brand: {'DEFAULT': 'var(--mas-primitive-color_orange600)'},
    'brand--hovered': 'var(--mas-primitive-color_orange700)', 
    'brand--pressed': 'var(--mas-primitive-color_orange800)', 
    'brand--disabled': 'var(--mas-primitive-color_orange600)'
  },
  extend: {
    textColor: {
      orange: "var(--mas-semantic-color_text-orange)",
      amber: 'var(--mas-semantic-color_text-amber)',
      green: 'var(--mas-semantic-color_text-green)',
      teal: 'var(--mas-semantic-color_text-teal)',
      blue: 'var(--mas-semantic-color_text-blue)',
      purple: 'var(--mas-semantic-color_text-purple)',
      red: 'var(--mas-semantic-color_text-red)',
    },
    borderColor: {
      'primary': 'var(--mas-semantic-color_border-primary)',
      'secondary': 'var(--mas-semantic-color_border-secondary)',
      'tiertiary': 'var(--mas-semantic-color_border-tiertiary)',
    },
    backgroundColor: {
      'primary': 'var(--mas-semantic-color_background-primary)',
      'secondary': 'var(--mas-semantic-color_background-secondary)',
    },
    borderRadius: {
      0: 'var(--mas-radius_0)',
      0.5: 'var(--mas-radius_05)',
      1: 'var(--mas-radius_1)',
      2: 'var(--mas-radius_2)',
      3: 'var(--mas-radius_3)',
      4: 'var(--mas-radius_4)',
      5: 'var(--mas-radius_5)',
      6: 'var(--mas-radius_6)',
      7: 'var(--mas-radius_7)',
      8: 'var(--mas-radius_8)',
      full: 'var(--mas-radius_full)',
    },
    boxShadow: {
      100: 'var(--mas-shadow_100)',
      200: 'var(--mas-shadow_200)',
      300: 'var(--mas-shadow_300)',
      400: 'var(--mas-shadow_400)',
    },
  },
};
