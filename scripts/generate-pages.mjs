import fs from 'fs';
import path from 'path';
import { faker } from '@faker-js/faker';

const TOTAL_PAGES = 1000;
const TEMPLATE_DIR = path.join(process.cwd(), 'content/template-pages');

if (!fs.existsSync(TEMPLATE_DIR)) fs.mkdirSync(TEMPLATE_DIR, { recursive: true });

for (let i = 1; i <= TOTAL_PAGES; i++) {
  const content = `---
title: "Template Page ${i}"
subtitle: "${faker.lorem.sentence()}"
image: "/images/template-${i % 5 + 1}.jpg"
---

# ${faker.lorem.sentence()}

${faker.lorem.paragraphs(3)}

## ${faker.lorem.sentence()}

${faker.lorem.paragraphs(2)}

* ${faker.lorem.sentence()}
* ${faker.lorem.sentence()}
* ${faker.lorem.sentence()}
`;

  fs.writeFileSync(path.join(TEMPLATE_DIR, `template-page-${i}.mdx`), content);
}
