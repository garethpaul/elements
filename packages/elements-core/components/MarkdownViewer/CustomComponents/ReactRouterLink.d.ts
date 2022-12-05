import type { LinkProps } from '@stoplight/mosaic';
export declare const ReactRouterMarkdownLink: ({ title, to, href: _href, children, }: Omit<LinkProps<"a">, "rel" | "target"> & {
    to?: string | undefined;
}) => JSX.Element;
