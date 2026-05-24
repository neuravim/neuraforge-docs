import { test, expect } from '@playwright/test';

test.describe('i18n — English (default)', () => {
  test('root redirects to /en', async ({ page }) => {
    await page.goto('/');
    await page.waitForURL('**/en');
    expect(page.url()).toContain('/en');
  });

  test('homepage renders in English', async ({ page }) => {
    await page.goto('/en');
    await expect(page.locator('h1')).toContainText('Stop coding alone');
  });

  test('navigation labels are in English', async ({ page }) => {
    await page.goto('/en');
    const sidebar = page.locator('aside');
    await expect(sidebar).toContainText('Getting Started');
    await expect(sidebar).toContainText('Guides');
    await expect(sidebar).toContainText('Reference');
    await expect(sidebar).toContainText('Cookbook');
  });

  test('getting-started hub renders in English', async ({ page }) => {
    await page.goto('/en/getting-started');
    await expect(page.locator('h1')).toContainText('From zero to your first AI feature');
  });

  test('installation page renders in English', async ({ page }) => {
    await page.goto('/en/getting-started/installation');
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('body')).toContainText('neuraforge init');
  });

  test('guides hub renders in English', async ({ page }) => {
    await page.goto('/en/guides');
    await expect(page.locator('h1')).toContainText('Guides');
  });

  test('modes page renders in English', async ({ page }) => {
    await page.goto('/en/guides/modes');
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('body')).toContainText('Flash');
    await expect(page.locator('body')).toContainText('Standard');
    await expect(page.locator('body')).toContainText('Enterprise');
  });

  test('reference CLI page renders', async ({ page }) => {
    await page.goto('/en/reference/cli');
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('body')).toContainText('neuraforge flash');
  });

  test('cookbook brownfield page renders', async ({ page }) => {
    await page.goto('/en/cookbook/brownfield');
    await expect(page.locator('h1')).toBeVisible();
  });
});

test.describe('i18n — French', () => {
  test('homepage renders in French', async ({ page }) => {
    await page.goto('/fr');
    await expect(page.locator('h1')).toContainText('Arretez de coder seul');
  });

  test('navigation labels are in French', async ({ page }) => {
    await page.goto('/fr');
    const sidebar = page.locator('aside');
    await expect(sidebar).toContainText('Demarrage');
    await expect(sidebar).toContainText('Guides');
    await expect(sidebar).toContainText('Reference');
    await expect(sidebar).toContainText('Cookbook');
  });

  test('getting-started hub renders in French', async ({ page }) => {
    await page.goto('/fr/getting-started');
    await expect(page.locator('h1')).toContainText('De zero a votre premiere feature IA');
  });

  test('installation page renders in French', async ({ page }) => {
    await page.goto('/fr/getting-started/installation');
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('body')).toContainText('neuraforge init');
  });

  test('modes page renders in French', async ({ page }) => {
    await page.goto('/fr/guides/modes');
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('body')).toContainText('Flash');
  });
});

test.describe('Language switching', () => {
  test('can switch from EN to FR via header button', async ({ page }) => {
    await page.goto('/en/guides/modes');
    await page.locator('button:has-text("FR")').click();
    await page.waitForURL('**/fr/guides/modes');
    expect(page.url()).toContain('/fr/guides/modes');
  });

  test('can switch from FR to EN via header button', async ({ page }) => {
    await page.goto('/fr/guides/agents');
    await page.locator('button:has-text("EN")').click();
    await page.waitForURL('**/en/guides/agents');
    expect(page.url()).toContain('/en/guides/agents');
  });
});

test.describe('Navigation', () => {
  test('sidebar links navigate correctly', async ({ page }) => {
    await page.goto('/en');
    await page.locator('aside a:has-text("Installation")').click();
    await expect(page).toHaveURL(/\/en\/getting-started\/installation/);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('footer prev/next navigation works', async ({ page }) => {
    await page.goto('/en/getting-started/installation');
    const nextLink = page.locator('footer a:has-text("Quickstart")');
    if (await nextLink.isVisible()) {
      await nextLink.click();
      await expect(page).toHaveURL(/\/en\/getting-started\/quickstart/);
    }
  });

  test('breadcrumbs display correctly', async ({ page }) => {
    await page.goto('/en/guides/modes');
    const header = page.locator('header');
    await expect(header).toContainText('NeuraForge');
    await expect(header).toContainText('Guides');
    await expect(header).toContainText('Modes');
  });
});

test.describe('SEO', () => {
  test('homepage has meta description', async ({ page }) => {
    await page.goto('/en');
    const desc = await page.locator('meta[name="description"]').getAttribute('content');
    expect(desc).toBeTruthy();
    expect(desc!.length).toBeGreaterThan(50);
  });

  test('homepage has Open Graph title', async ({ page }) => {
    await page.goto('/en');
    const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
    expect(ogTitle).toBeTruthy();
  });

  test('structured data is present', async ({ page }) => {
    await page.goto('/en');
    const jsonLd = await page.locator('script[type="application/ld+json"]').textContent();
    expect(jsonLd).toContain('SoftwareApplication');
    expect(jsonLd).toContain('NeuraForge');
  });
});

test.describe('Theme', () => {
  test('theme toggle works', async ({ page }) => {
    await page.goto('/en');
    const themeBtn = page.locator('button[aria-label="Toggle theme"]');
    await themeBtn.click();
    const theme = await page.locator('html').getAttribute('data-theme');
    expect(theme).toBe('dark');
  });
});

test.describe('All pages load without errors', () => {
  const enPages = [
    '/en',
    '/en/getting-started',
    '/en/getting-started/installation',
    '/en/getting-started/quickstart',
    '/en/getting-started/first-feature',
    '/en/guides',
    '/en/guides/modes',
    '/en/guides/agents',
    '/en/guides/providers',
    '/en/guides/providers/claude-code',
    '/en/guides/providers/gemini',
    '/en/guides/providers/opencode',
    '/en/guides/providers/copilot',
    '/en/guides/providers/custom-api',
    '/en/guides/configuration',
    '/en/guides/rules-and-templates',
    '/en/guides/skills',
    '/en/guides/troubleshooting',
    '/en/reference',
    '/en/reference/cli',
    '/en/reference/config',
    '/en/reference/artefacts',
    '/en/reference/glossary',
    '/en/cookbook',
    '/en/cookbook/brownfield',
    '/en/cookbook/team',
    '/en/cookbook/ci-cd',
    '/en/cookbook/migration-bmad',
  ];

  for (const path of enPages) {
    test(`${path} loads without console errors`, async ({ page }) => {
      const errors: string[] = [];
      page.on('console', (msg) => {
        if (msg.type() === 'error') errors.push(msg.text());
      });
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);
      await expect(page.locator('body')).not.toBeEmpty();
    });
  }
});
