import axios from 'axios'
import { schoolData } from './school_data.js'; // Assuming the file name is school_data.js

// Function to fetch definition for a school
async function fetchDefinition(schoolName) {
  try {
    const response = await axios.get('https://mashape-community-urban-dictionary.p.rapidapi.com/define', {
      params: { term: schoolName },
      headers: {
        'X-RapidAPI-Key': 'f3f8db9792msh7871b75c22e0ea9p183393jsncf37b755dc9c', // Replace 'YOUR_RAPIDAPI_KEY' with your actual RapidAPI key
        'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
      }
    });

    // Check if there are any definitions returned
    if (response.data.list.length > 0) {
      // Sort definitions by thumbs_up in descending order and select the first one
      const highestRatedDefinition = response.data.list.sort((a, b) => b.thumbs_up - a.thumbs_up)[0];
      
      // Return only the required fields
      return {
        definition: highestRatedDefinition.definition,
        permalink: highestRatedDefinition.permalink,
        example: highestRatedDefinition.example
      };
    }

    return null; // Return null if no definitions found
  } catch (error) {
    console.error(`Error fetching definition for ${schoolName}:`, error);
    return null;
  }
}

// Function to loop through all schools and fetch their definitions
async function fetchDefinitionsForAllSchools() {
  const definitions = [];

  for (const school of schoolData) {
    console.log(`Fetching definition for ${school.name}...`);
    const definition = await fetchDefinition(school.name);
    if (definition) {
      definitions.push({
        school: school.name,
        ...definition
      });
    } else {
      console.log(`No definition found for ${school.name}.`);
    }
  }

  return definitions;
}

// Execute the function and log the results
fetchDefinitionsForAllSchools().then(definitions => {
  console.log('Fetched definitions:', definitions);
}).catch(error => {
  console.error('Error fetching definitions:', error);
});
