
export const extractNumber = (data)=> (parseInt(data.match(/\d+/)) ? parseInt(data.match(/\d+/)) : 0);
export const resetInput = (input)=> (input.value = '');