export async function  getAllList(search){
    try {
        let url;
        if(search){
            url = `https://www.breakingbadapi.com/api/characters?name=${search}`;
        }else{
            url = 'https://www.breakingbadapi.com/api/characters';
        }
        let data = await fetch(url)
          .then(res => {
             return res.json();
         })
         return await data;

    } catch (error) {
       return [];
    }
}