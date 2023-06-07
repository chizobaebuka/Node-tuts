import https from 'https';

const url = 'https://dhq.sh/ages.json';

const request = https.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  })

  res.on('end', () => {
    try{
      const json = JSON.parse(data);
      calculateAges(json.data)
      // console.log(json.data)
    }catch(err){
      console.error(err, `Error fetching Data`)
    }
  })
})

request.on('err', (err)=>{
  console.log(err)
})

function calculateAges(data){
  const asParams = data.replaceAll(', ', '&');
  const params = new URLSearchParams(asParams);
  const ages = params.getAll('age');

  const result = ages.map((age) => Number(age));
  const filter = result.filter((age) => age > 50);

  const sum = filter.reduce((total, age) => total + age, 0);
  // filter
}