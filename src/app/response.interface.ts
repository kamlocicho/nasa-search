export interface Item {

    data: [
        {
            center: string,
            date_created: string,
            decription: string,
            keywords: string[]
        }
    ]
    media_type: string,
    nasa_id: string,
    title: string

}

export interface Response {
    collection: {
        href: string,
        items: Item[],
        links: [
          {
            href: string,
            prompt: string,
            rel: string
          }
        ],
        metadata: {
            total_hits: number
        }
    }
}