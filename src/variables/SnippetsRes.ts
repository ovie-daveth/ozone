export interface SnippetsInterface{
    text: any,
    title: string,
    date: any,
    language: string,
    tags: tagInterface[],
    icon: any,
    description: string
}

export interface tagInterface {
    color: "",
    name: ""
}