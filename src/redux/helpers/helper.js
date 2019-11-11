export const generateArray = (size) => {
    let new_arr = []
    for(let i = 0 ; i < size; i++){
        new_arr = [...new_arr, Math.round(Math.random() * 100 + 1)];
        
    }
    return new_arr;
    
}
