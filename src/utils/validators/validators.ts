
export const required = (value: string) => {
    if (value)
        return undefined;
   else  return 'Error!!!'
}

export const maxLengthCreator = (maxLength: number) => (value: string) => {
    if (value && value.length > maxLength) return `Too much symbols. Max length ${maxLength}`;
    else return undefined
}

export const minLengthCreator = (length:number) => (value:string) => {
    if (value && value.length < length) return `Min length is ${length} symbols`
    else return undefined
}