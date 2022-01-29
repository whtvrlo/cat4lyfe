// decided to use an async function instead of promises
// for me it seems a lot cleaner and easier to follow
// this is being called in the app because i want to store the data (cats) in a hook

export const collectData = async () => {
    let res = await fetch('https://api.thecatapi.com/v1/images/search?limit=20&page=10&order=Desc')
    let data = await res.json()
    if(res.status !== 200){
        throw new Error("there is an error")
    }
    return data
}