import EStyleSheet from 'react-native-extended-stylesheet';
import metrics from "./metrics";

EStyleSheet.build({
    $primary: '#e5722a',
    $appBg: '#111111',
    $authBg: '#121313',
    $accent: '#cc00cc',
    $yellow: '#e5c62a',
    $red: '#dd3333',
    $gray: '#6d6861',
    $darkGray: '#282828',
    $black: '#000000',
    $white: '#ffffff',

    $fontWeight400: '400',
    $fontWeight600: '600',
    $fontWeight900: '900',

    $100Thin: "Lato_100Thin",
    $400Regular: "Lato_400Regular",
    $700Bold: "Lato_700Bold",

    $font6: metrics.calc(6),
    $font8: metrics.calc(8),
    $font10: metrics.calc(10),
    $font12: metrics.calc(12),
    $font14: metrics.calc(14),
    $font16: metrics.calc(16),
    $font20: metrics.calc(20),
    $font24: metrics.calc(24),
    $font28: metrics.calc(28),
    $font32: metrics.calc(32),
})
