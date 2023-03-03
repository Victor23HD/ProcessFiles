const processesTest = (list) =>
{
    let site = []; 
    let url = [];
    for(let i = 0; i < list.length; i++)
    {
        site.push(Object.keys(list[`${i}`]));
        url.push(list[`${i}`][site[i]]);
    }
    return [site, url];
}

export default processesTest;