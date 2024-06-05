const getData = async () => {
    const input = document.querySelector('#search').value;
    const url = `https://google-search72.p.rapidapi.com/search?q=${input}&gl=us&lr=lang_en&num=10&start=0`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '98037e522bmsh7cf0b8de287d655p11092ejsn820d0a365bcd',
            'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const mainData = result.items
        console.log(mainData);
        mainData.map((res, index) => {
            document.querySelector('#result').innerHTML += `
            <h1><a href="${res.link}">${res.title}</a> </h1>
            <h4>${res.htmlTitle}</h4>
            `
        })

    } catch (error) {
        console.error(error);
    }

}



