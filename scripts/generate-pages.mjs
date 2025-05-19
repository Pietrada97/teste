import fs from 'fs';
import path from 'path';
import { faker } from '@faker-js/faker';

const TOTAL_PAGES = 1000;
const DATA_DIR = path.join(process.cwd(), 'src/data/pages');

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

for (let i = 1; i <= TOTAL_PAGES; i++) {
  const slug = `template-${i}`;
  const data = {
    slug,
    title: faker.company.catchPhrase(),
    subtitle: faker.lorem.sentence(),
    paragraph1: faker.lorem.paragraphs(2),
    paragraph2: faker.lorem.paragraphs(2),
    image: `/images/img-${i % 5 + 1}.jpg`,
    ctaText: faker.company.bsBuzz(),
    testimonial: faker.lorem.sentence(),
    name: faker.name.fullName()
  };

  fs.writeFileSync(path.join(DATA_DIR, `${slug}.json`), JSON.stringify(data, null, 2));
}
