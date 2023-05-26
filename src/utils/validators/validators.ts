
export const required = (value: string) => {
    if (value)
        return undefined;
   else  return 'Error!!!'
}

export const maxLengthCreator = (length: number) => (value: string) => {
    if (value && value.length > length) return `Max length is ${length} symbols`
    else return undefined
}

export const minLengthCreator = (length:number) => (value:string) => {
    if (value && value.length < length) return `Min length is ${length} symbols`
    else return undefined
}