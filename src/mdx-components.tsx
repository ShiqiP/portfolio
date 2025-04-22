import type { MDXComponents } from 'mdx/types'
import "@/style/github-dark-dimmed.css"

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,
    }
}