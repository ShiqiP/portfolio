/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            typography: () => ({
                white: {
                    css: {
                        '--tw-prose-body': 'var(--tw-prose-invert-body)',
                        '--tw-prose-headings': 'var(--tw-prose-invert-headings)',
                        '--tw-prose-lead': 'var(--tw-prose-invert-lead)',
                        '--tw-prose-links': 'var(--tw-prose-invert-links)',
                        '--tw-prose-bold': 'var(--tw-prose-invert-bold)',
                        '--tw-prose-counters': 'var(--tw-prose-invert-counters)',
                        '--tw-prose-bullets': 'var(--tw-prose-invert-bullets)',
                        '--tw-prose-hr': 'var(--tw-prose-invert-hr)',
                        '--tw-prose-quotes': 'var(--tw-prose-invert-quotes)',
                        '--tw-prose-quote-borders': 'var(--tw-prose-invert-quote-borders)',
                        '--tw-prose-captions': 'var(--tw-prose-invert-captions)',
                        '--tw-prose-kbd': 'var(--tw-prose-invert-kbd)',
                        '--tw-prose-kbd-shadows': 'var(--tw-prose-invert-kbd-shadows)',
                        '--tw-prose-code': 'var(--tw-prose-invert-code)',
                        '--tw-prose-pre-code': 'var(--tw-prose-invert-pre-code)',
                        '--tw-prose-pre-bg': 'var(--tw-prose-invert-pre-bg)',
                        '--tw-prose-th-borders': 'var(--tw-prose-invert-th-borders)',
                        '--tw-prose-td-borders': 'var(--tw-prose-invert-td-borders)',
                    },
                },
            }),
        },
    },
}