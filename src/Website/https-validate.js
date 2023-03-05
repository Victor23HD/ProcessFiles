import chalk from "chalk";



const checkLink = async function (list) {

    const link = list.map((l) => { return l.join() });
    return await Promise.all(
        link.map(async (url) => {
            let res;
            try {
                res = await fetch(url)
                return res.status;

            } catch (err) {
                return "TypeError";
            }
        })
    );
}





export { checkLink }