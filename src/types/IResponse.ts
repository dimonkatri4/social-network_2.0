export interface IResponse<D = {}> {
    resultCode: number
    messages: string[]
    fieldsErrors: []
    data: D
}