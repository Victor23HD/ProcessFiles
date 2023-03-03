const getGroup = (txt) =>
{
    const regex = /\[([\w\s\<>]*?)\]\((https?:\/\/[^\n?#.].[^\s]*)\)/gm;
    const iRet = [...txt.matchAll(regex)];
    if(iRet.length !== 0)
    {
        return iRet.map((cap) => ({[cap[1]]: [cap[2]]}));
    }  
}

export default getGroup;