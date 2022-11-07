export interface Header {
    links: Link[]
    customclass: string
    customstyle: string
    orientation: string
}

interface Link {
    href: string,
    title: string,
    src: string,
    alt: string, 
    style: string, 
    anchor: boolean
}
