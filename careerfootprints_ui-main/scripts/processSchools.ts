import { promises as fs } from 'fs';
import path from 'path';
import csv from 'csv-parse/sync';

async function processSchools() {
    try {
        const filePath = path.join(process.cwd(), 'schools.csv');
        const fileContent = await fs.readFile(filePath, 'utf-8');
        
        const records = csv.parse(fileContent, {
            columns: true,
            skip_empty_lines: true
        });

        // Remove duplicates and sort by name
        const uniqueSchools = Array.from(new Map(
            records.map(school => [school.name.toLowerCase(), {
                id: parseInt(school.id),
                name: school.name,
                status: school.status,
                no_of_courses: parseInt(school.no_of_courses)
            }])
        ).values()).sort((a, b) => a.name.localeCompare(b.name));

        // Write to a JSON file in the public directory
        await fs.writeFile(
            path.join(process.cwd(), 'public', 'data', 'schools.json'),
            JSON.stringify(uniqueSchools, null, 2)
        );

        console.log('Schools data processed successfully!');
    } catch (error) {
        console.error('Error processing schools:', error);
    }
}

processSchools(); 