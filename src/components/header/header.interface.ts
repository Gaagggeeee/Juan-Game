export interface Header {
    Links: Link[]
}

interface Link {
    href: string,
    title: string,
    src: string,
    alt: string, 
    style: string, 

}