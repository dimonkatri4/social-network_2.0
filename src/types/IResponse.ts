export interface IResponse<D = Record<string, never>> {
    resultCode: number
    messages: string[]
    fieldsErrors: []
    data: D
}