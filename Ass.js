const http = require('http');
const fs = require('fs');

const url = 'http://dhq.sh/ages.json';
const outputFilePath = 'sum.txt';

http.get(url, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    try {
      const jsonData = JSON.parse(data);
      const ages = jsonData.ages;
      let sum = 0;

      // Calculate the sum of ages greater than 50 using a for loop
      for (let i = 0; i < ages.length; i++) {
        if (ages[i] > 50) {
          sum += ages[i];
        }
      }

      // Write the sum to a file
      const writeStream = fs.createWriteStream(outputFilePath);
      writeStream.write(`Sum of ages greater than 50: ${sum}`);
      writeStream.end();

      console.log(`Sum of ages greater than 50 has been written to ${outputFilePath}`);
    } catch (error) {
      console.error('Error parsing JSON:', error.message);
    }
  });
}).on('error', (error) => {
  console.error('Error retrieving data:', error.message);
});
